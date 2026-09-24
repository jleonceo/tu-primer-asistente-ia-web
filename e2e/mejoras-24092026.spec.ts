import { test, expect, type Page } from '@playwright/test';
import { readFileSync } from 'node:fs';
import { crc32 } from 'node:zlib';

// MEJORAS DEL 24/09/2026 · una prueba por criterio de aceptación
//   CA1 · la tarea se descarga como skill (.zip con <nombre>/SKILL.md)
//   CA2 · tres pruebas para el asistente y un prompt que las concreta
//   CA3 · el tono con quien lo usa, separado del tono de lo que escribe para otros
//   CA4 · cabecera del texto final y «DATOS QUE DEBES TENER EN CUENTA»
// Se escribieron ANTES que el código y salieron en rojo contra la web del 24/09.

const CABECERA = [
  'Estas son las instrucciones de mi asistente. Aplícalas en todas las conversaciones de este proyecto.',
  '- Si te falta un dato para hacer la tarea, pregúntamelo en vez de inventarlo.',
  '- Si lo que te pido choca con alguna de estas normas, avísame antes de seguir.',
].join('\n');

const USTED_YO = 'Háblame de usted, con cercanía pero con respeto.';
const TU_YO = 'Háblame de tú.';
const TU_OTROS = 'En lo que escribas para otras personas, trátalas de tú.';
const USTED_OTROS = 'En lo que escribas para otras personas, trátalas de usted.';

// Rellena el navegador como si se hubieran hecho los pasos 1 a 3.
async function sembrar(page: Page, datos: Record<string, string>) {
  await page.goto('/');
  await page.evaluate((d) => {
    localStorage.clear();
    for (const [k, v] of Object.entries(d)) localStorage.setItem(k, v);
  }, datos);
}

const COMPLETO = {
  ht_tarea: 'Responder reseñas de clientes',
  ht_titulo: 'Responder reseñas',
  ht_quien: 'Clientes que dejan una reseña en Google',
  ht_bueno: 'Hola Marta, gracias por contarlo',
  ht_malo: 'Estimado cliente, lamentamos las molestias',
  ht_nunca: 'Prometer descuentos',
  ht_sin_ejemplos: '0',
  ht_normas: JSON.stringify([USTED_YO]),
  ht_memoria: JSON.stringify(['Negocio: panadería en Valencia']),
};

async function textoFinal(page: Page) {
  await page.goto('/resultado');
  return (await page.locator('#texto').textContent()) ?? '';
}

// Devuelve el bloque de una sección «## X» hasta la siguiente «## ».
function seccion(texto: string, titulo: string) {
  const i = texto.indexOf('## ' + titulo);
  if (i === -1) return '';
  const resto = texto.slice(i + 3);
  const j = resto.indexOf('\n## ');
  return j === -1 ? resto : resto.slice(0, j);
}

async function descargar(page: Page, boton: string) {
  const espera = page.waitForEvent('download');
  await page.locator(boton).click();
  const d = await espera;
  return { nombre: d.suggestedFilename(), datos: readFileSync(await d.path()) };
}

// Lector mínimo de ZIP: directorio central, sin compresión (método 0).
function leerZip(buf: Buffer) {
  const fin = buf.lastIndexOf(Buffer.from([0x50, 0x4b, 0x05, 0x06]));
  expect(fin).toBeGreaterThan(-1);
  const total = buf.readUInt16LE(fin + 10);
  let p = buf.readUInt32LE(fin + 16);
  const entradas: { nombre: string; texto: string; crcOk: boolean; metodo: number }[] = [];
  for (let n = 0; n < total; n++) {
    expect(buf.readUInt32LE(p)).toBe(0x02014b50);
    const metodo = buf.readUInt16LE(p + 10);
    const crc = buf.readUInt32LE(p + 16);
    const tam = buf.readUInt32LE(p + 20);
    const lnom = buf.readUInt16LE(p + 28);
    const lext = buf.readUInt16LE(p + 30);
    const lcom = buf.readUInt16LE(p + 32);
    const local = buf.readUInt32LE(p + 42);
    const nombre = buf.slice(p + 46, p + 46 + lnom).toString('utf8');
    const ini = local + 30 + buf.readUInt16LE(local + 26) + buf.readUInt16LE(local + 28);
    const datos = buf.slice(ini, ini + tam);
    entradas.push({ nombre, texto: datos.toString('utf8'), crcOk: crc32(datos) === crc, metodo });
    p += 46 + lnom + lext + lcom;
  }
  return entradas;
}

test.describe('CA4 · cabecera del texto final', () => {
  test('el texto final empieza con las tres líneas y la memoria cambia de nombre', async ({ page }) => {
    await sembrar(page, COMPLETO);
    const t = await textoFinal(page);
    expect(t.startsWith(CABECERA + '\n')).toBe(true);
    expect(t).toContain('## DATOS QUE DEBES TENER EN CUENTA');
    expect(t).not.toContain('QUÉ RECUERDA DE MÍ');
    expect(seccion(t, 'DATOS QUE DEBES TENER EN CUENTA')).toContain('Negocio: panadería en Valencia');
  });

  test('sin rellenar nada sigue saliendo «Aún no has creado nada», sin cabecera', async ({ page }) => {
    await sembrar(page, {});
    const t = await textoFinal(page);
    await expect(page.locator('#titulo')).toHaveText('Aún no has creado nada');
    expect(t).not.toContain('Estas son las instrucciones');
    await expect(page.locator('#bloque-skill')).toBeHidden();
    await expect(page.locator('#pruebas')).toBeHidden();
  });

  test('el informe descargable explica las dos reglas de la cabecera', async ({ page }) => {
    await sembrar(page, COMPLETO);
    await page.goto('/resultado');
    const { datos } = await descargar(page, '#descargar-informe');
    expect(datos.toString('utf8')).toContain(
      'El texto empieza con dos reglas para Claude: preguntarte si le falta un dato y avisarte si algo choca con tus normas.'
    );
  });
});

test.describe('CA3 · dos tonos', () => {
  test('usted para mí y tú para los clientes salen en secciones separadas', async ({ page }) => {
    await sembrar(page, { ...COMPLETO, ht_normas: '[]' });
    await page.goto('/paso2');
    await page.locator(`input[data-r="${USTED_YO}"]`).check();
    await page.locator(`input[data-r="${TU_OTROS}"]`).check();
    await page.locator('#siguiente').click();
    await expect(page).toHaveURL(/\/paso3\/?$/);
    const t = await textoFinal(page);
    const comporta = seccion(t, 'CÓMO SE COMPORTA');
    const otros = seccion(t, 'CÓMO ESCRIBE LO QUE PREPARA PARA OTROS');
    expect(comporta).toContain(USTED_YO);
    expect(comporta).not.toContain(TU_OTROS);
    expect(otros).toContain(TU_OTROS);
    expect(otros).not.toContain(USTED_YO);
  });

  test('tú y usted se excluyen dentro de cada grupo, no entre grupos', async ({ page }) => {
    await sembrar(page, {});
    await page.goto('/paso2');
    const tuYo = page.locator(`input[data-r="${TU_YO}"]`);
    const ustedYo = page.locator(`input[data-r="${USTED_YO}"]`);
    const tuOtros = page.locator(`input[data-r="${TU_OTROS}"]`);
    const ustedOtros = page.locator(`input[data-r="${USTED_OTROS}"]`);
    await tuYo.check();
    await ustedYo.check();
    await expect(tuYo).not.toBeChecked();
    await expect(ustedYo).toBeChecked();
    await tuOtros.check();
    await expect(ustedYo).toBeChecked();
    await ustedOtros.check();
    await expect(tuOtros).not.toBeChecked();
    await expect(ustedYo).toBeChecked();
  });

  test('lo guardado antes del cambio se conserva', async ({ page }) => {
    await sembrar(page, { ...COMPLETO, ht_normas: JSON.stringify([USTED_YO, 'Nunca me hables de política']) });
    await page.goto('/paso2');
    await expect(page.locator(`input[data-r="${USTED_YO}"]`)).toBeChecked();
    await expect(page.locator('#propias-list')).toContainText('Nunca me hables de política');
    const t = await textoFinal(page);
    const comporta = seccion(t, 'CÓMO SE COMPORTA');
    expect(comporta).toContain(USTED_YO);
    expect(comporta).toContain('Nunca me hables de política');
    expect(t).not.toContain('CÓMO ESCRIBE LO QUE PREPARA PARA OTROS');
  });
});

test.describe('CA2 · tres pruebas', () => {
  test('las tres pruebas usan las respuestas de la persona', async ({ page }) => {
    await sembrar(page, COMPLETO);
    await page.goto('/resultado');
    const pr = page.locator('#pruebas');
    await expect(pr).toBeVisible();
    await expect(pr.locator('li')).toHaveCount(3);
    await expect(pr.locator('li').nth(0)).toContainText('Responder reseñas de clientes');
    await expect(pr.locator('li').nth(0)).toContainText('Hola Marta, gracias por contarlo');
    await expect(pr.locator('li').nth(1)).toContainText('Prometer descuentos');
    await expect(pr.locator('li').nth(2)).toContainText('preguntar');
    await expect(pr).toContainText('Repite estas tres pruebas');
    await expect(page.locator('#prompt-pruebas')).toContainText('tres pruebas');
  });

  test('con el «nunca» vacío la prueba 2 lo dice y manda al paso 1', async ({ page }) => {
    await sembrar(page, { ...COMPLETO, ht_nunca: '' });
    await page.goto('/resultado');
    const p2 = page.locator('#pruebas li').nth(1);
    await expect(p2).toContainText('no tiene ningún límite escrito');
    await expect(p2.locator('a[href="/paso1"]')).toBeVisible();
    await expect(p2).not.toContainText('«»');
  });

  test('sin ejemplo bueno la prueba 1 no lo cita', async ({ page }) => {
    await sembrar(page, { ...COMPLETO, ht_sin_ejemplos: '1' });
    await page.goto('/resultado');
    const p1 = page.locator('#pruebas li').nth(0);
    await expect(p1).not.toContainText('ejemplo bueno');
    await expect(p1).not.toContainText('Hola Marta');
  });

  test('el informe lleva las tres pruebas y «Mejorarlo con el uso» remite a ellas', async ({ page }) => {
    await sembrar(page, COMPLETO);
    await page.goto('/resultado');
    const { datos } = await descargar(page, '#descargar-informe');
    const inf = datos.toString('utf8');
    expect(inf).toContain('## Tres pruebas para tu asistente');
    expect(inf).toContain('Prometer descuentos');
    await page.goto('/evolucion');
    await expect(page.locator('main')).toContainText('las tres pruebas');
  });
});

test.describe('CA1 · la tarea como skill en .zip', () => {
  const TITULO_LARGO = 'Contestar a las reseñas de Google de la panadería con cariño y sin prisas'; // 73

  test('el ZIP trae una sola entrada <nombre>/SKILL.md con cabecera válida y sin la memoria', async ({ page }) => {
    expect(TITULO_LARGO.length).toBeGreaterThan(64);
    await sembrar(page, { ...COMPLETO, ht_titulo: TITULO_LARGO });
    await page.goto('/resultado');
    await expect(page.locator('#bloque-skill')).toContainText('Personalizar');
    await expect(page.locator('#bloque-skill')).toContainText('ejecución de código');
    const { nombre, datos } = await descargar(page, '#descargar-skill');
    expect(nombre).toMatch(/\.zip$/);
    const e = leerZip(datos);
    expect(e).toHaveLength(1);
    expect(e[0].metodo).toBe(0);
    expect(e[0].crcOk).toBe(true);
    const m = e[0].nombre.match(/^([a-z0-9]+(?:-[a-z0-9]+)*)\/SKILL\.md$/);
    expect(m).not.toBeNull();
    const slug = m![1];
    expect(slug.length).toBeLessThanOrEqual(64);
    const md = e[0].texto;
    const lineas = md.split('\n');
    expect(lineas[0]).toBe('---');
    expect(lineas[1]).toBe('name: ' + slug);
    const desc = JSON.parse(lineas[2].replace(/^description: /, ''));
    expect(desc.length).toBeGreaterThan(0);
    expect(desc.length).toBeLessThanOrEqual(200);
    expect(lineas[3]).toBe('---');
    expect(md).toContain('Responder reseñas de clientes');
    expect(md).toContain('Prometer descuentos');
    expect(md).toContain(USTED_YO);
    expect(md).not.toContain('panadería en Valencia');
    expect(md).not.toContain('Estas son las instrucciones');
  });

  test('la descripción es editable, cuenta hasta 200 y se escapa en la cabecera', async ({ page }) => {
    await sembrar(page, COMPLETO);
    await page.goto('/resultado');
    const campo = page.locator('#sk-desc');
    await expect(campo).not.toHaveValue('');
    await campo.fill('x'.repeat(250));
    expect((await campo.inputValue()).length).toBeLessThanOrEqual(200);
    await expect(page.locator('#sk-desc-cuenta')).toContainText('200');
    await campo.fill('Úsala para esto: "reseñas"');
    await expect(page.locator('#sk-desc-cuenta')).toContainText(String('Úsala para esto: "reseñas"'.length));
    const { datos } = await descargar(page, '#descargar-skill');
    const md = leerZip(datos)[0].texto;
    expect(md.split('\n')[2]).toBe('description: "Úsala para esto: \\"reseñas\\""');
  });
});

test.describe('Pie de página · versión y fecha de actualización', () => {
  test('el pie dice la versión y el mes y año de la última compilación', async ({ page }) => {
    await page.goto('/');
    const mes = new Date().toLocaleDateString('es-ES', { month: 'long', year: 'numeric', timeZone: 'Europe/Madrid' });
    await expect(page.locator('#actualizado')).toHaveText('Versión 4 · Última actualización: ' + mes);
  });
});

test.describe('Recorrido · del nivel 1 al nivel 2', () => {
  test('al acabar «Mejorarlo con el uso» el botón principal lleva al nivel 2', async ({ page }) => {
    await page.goto('/evolucion');
    const siguiente = page.getByRole('link', { name: /Siguiente nivel/ });
    await expect(siguiente).toBeVisible();
    await expect(siguiente).toHaveAttribute('href', '/nivel-2');
    await siguiente.click();
    await expect(page).toHaveURL(/\/nivel-2\/?$/);
  });
});
