import { test, expect } from '@playwright/test';

// FLUJO PRINCIPAL: el recorrido central de la web es "crear tu primer asistente":
//   home → /ejemplos → elegir una tarea → /paso1 (asistente guiado de 5 pasos).
// Aserciones sobre estructura REAL verificada en:
//   src/pages/index.astro, src/pages/ejemplos.astro, src/pages/paso1.astro.

test.describe('flujo — crear mi primer asistente', () => {
  test('desde la home se llega a /ejemplos por la CTA del navbar', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', { name: 'Crear mi asistente' }).click();
    await expect(page).toHaveURL(/\/ejemplos\/?$/);
    // intro.titulo de la sección ejemplos vive en un h1 dentro de <main>
    // (se acota a 'main h1' por la barra de dev de Astro, que inyecta otros h1).
    await expect(page.locator('main h1')).toBeVisible();
  });

  test('en /ejemplos hay tareas con botón "Empezar con este"', async ({ page }) => {
    await page.goto('/ejemplos');
    const botones = page.getByRole('link', { name: /Empezar con este/i });
    // ejemplos.tarjetas: hay varias filas, cada una con su botón
    expect(await botones.count()).toBeGreaterThan(0);
    await expect(botones.first()).toBeVisible();
  });

  test('elegir una tarea lleva a /paso1 y guarda la tarea en localStorage', async ({ page }) => {
    await page.goto('/ejemplos');
    const primero = page.getByRole('link', { name: /Empezar con este/i }).first();
    // el data-tarea del botón es el título de la tarjeta; el script lo guarda
    const tareaEsperada = await primero.getAttribute('data-tarea');
    await primero.click();
    await expect(page).toHaveURL(/\/paso1\/?$/);

    const guardada = await page.evaluate(() => localStorage.getItem('ht_tarea'));
    expect(guardada).toBe(tareaEsperada);
  });

  test('el asistente guiado de /paso1 avanza de pregunta con el botón Siguiente', async ({ page }) => {
    await page.goto('/paso1');

    // Estado inicial: barra de progreso "Pregunta 1 de 4"
    await expect(page.locator('#prog-txt')).toHaveText('Pregunta 1 de 4');

    // Un chip rellena el textarea de la pregunta 1 (interacción central)
    const chip = page.getByRole('button', { name: 'Responder reseñas sin sonar a robot' });
    await expect(chip).toBeVisible();
    await chip.click();
    await expect(page.locator('#q1')).toHaveValue('Responder reseñas sin sonar a robot');

    // Avanzar a la pregunta 2
    await page.getByRole('button', { name: /Siguiente/ }).click();
    await expect(page.locator('#prog-txt')).toHaveText('Pregunta 2 de 4');
    await expect(page.locator('#lbl-q2')).toBeVisible();
  });

  test('el asistente recorre las 4 preguntas hasta la skill montada', async ({ page }) => {
    await page.goto('/paso1');

    // Preguntas 1→2→3: el botón se llama "Siguiente" (label depende de step;
    // sólo pasa a "Ver mi skill" en la pregunta 4). Ver paso1.astro §pintar().
    await page.locator('#q1').fill('Responder reseñas de clientes');
    await page.getByRole('button', { name: /Siguiente/ }).click();
    await expect(page.locator('#prog-txt')).toHaveText('Pregunta 2 de 4');

    await page.locator('#q2').fill('Un cliente enfadado');
    await page.getByRole('button', { name: /Siguiente/ }).click();
    await expect(page.locator('#prog-txt')).toHaveText('Pregunta 3 de 4');

    await page.locator('#q3a').fill('Un ejemplo bueno de respuesta');
    await page.locator('#q3b').fill('Un ejemplo soso');
    await page.getByRole('button', { name: /Siguiente/ }).click();
    await expect(page.locator('#prog-txt')).toHaveText('Pregunta 4 de 4');

    // Pregunta 4: ahora sí el botón es "Ver mi skill" → paso reveal.
    await page.locator('#q4').fill('Nunca sonar a robot');
    await page.getByRole('button', { name: /Ver mi skill/ }).click();

    // Paso reveal: la skill queda montada con los datos introducidos
    await expect(page.locator('#prog-txt')).toHaveText('¡Hecho!');
    await expect(page.locator('#sk-tarea')).toHaveText('Responder reseñas de clientes');
    await expect(page.locator('#sk-quien')).toHaveText('Un cliente enfadado');
    await expect(page.locator('#sk-nunca')).toHaveText('Nunca sonar a robot');
    // El botón final apunta al paso 2 del recorrido
    await expect(page.getByRole('button', { name: /su comportamiento/ })).toBeVisible();
  });
});
