import { test, expect } from '@playwright/test';

// SMOKE: la web carga sin errores y sus piezas clave renderizan.
// Aserciones sobre contenido REAL verificado en src/ (site.js, index.astro,
// Navbar.astro, Layout.astro). Nada inventado.

test.describe('smoke — la home carga y renderiza', () => {
  test('la home responde 200', async ({ page }) => {
    const res = await page.goto('/');
    expect(res, 'la navegación devuelve una respuesta').not.toBeNull();
    expect(res!.status()).toBe(200);
  });

  test('el título de la home es el correcto', async ({ page }) => {
    await page.goto('/');
    // marca.titulo en src/data/site.js
    await expect(page).toHaveTitle('Tu primer asistente de IA');
  });

  test('el hero (h1) y la CTA principal renderizan', async ({ page }) => {
    await page.goto('/');
    // hero.titulo (src/data/site.js, reescrito el 24/09/2026):
    // 'Las instrucciones que convierten a Claude en <em>un asistente propio</em>'
    // Se acota a 'main h1': la barra de herramientas de Astro en dev inyecta
    // otros <h1> fuera de <main> y 'h1' a secas sería ambiguo (modo estricto).
    const h1 = page.locator('main h1');
    await expect(h1).toBeVisible();
    await expect(h1).toContainText('Las instrucciones que convierten a Claude');
    await expect(h1).toContainText('un asistente propio');

    // hero.cta: 'Crear un asistente' → href /ejemplos
    const cta = page.getByRole('link', { name: /Crear un asistente/i }).first();
    await expect(cta).toBeVisible();
    await expect(cta).toHaveAttribute('href', '/ejemplos');
  });

  test('el navbar y su CTA "Crear mi asistente" están presentes', async ({ page }) => {
    await page.goto('/');
    // nav en site.js: último item es CTA con texto 'Crear mi asistente' → /ejemplos
    const navCta = page.getByRole('link', { name: 'Crear mi asistente' });
    await expect(navCta).toBeVisible();
    await expect(navCta).toHaveAttribute('href', '/ejemplos');
  });

  test('la demo interactiva (pestañas antes/después) renderiza', async ({ page }) => {
    await page.goto('/');
    const tabs = page.locator('.demo-tab');
    // demo.casos tiene 3 casos → 3 pestañas
    await expect(tabs).toHaveCount(3);
    await expect(page.getByRole('button', { name: 'Responder una reseña' })).toBeVisible();
  });

  test('sin errores críticos de consola al cargar la home', async ({ page }) => {
    const erroresConsola: string[] = [];
    page.on('console', (msg) => {
      if (msg.type() === 'error') erroresConsola.push(msg.text());
    });
    const erroresPagina: string[] = [];
    page.on('pageerror', (err) => erroresPagina.push(err.message));

    // NOTA: no se usa 'networkidle' — el dev server de Astro mantiene abierta
    // una conexión de HMR (WebSocket/SSE) y la red nunca queda "idle".
    await page.goto('/', { waitUntil: 'load' });

    // Un fallo de red de favicon no debe tumbar el smoke; los errores de JS de
    // página (pageerror) sí son críticos.
    expect(erroresPagina, `errores de JS en la página: ${erroresPagina.join(' | ')}`).toHaveLength(0);
    expect(erroresConsola, `errores de consola: ${erroresConsola.join(' | ')}`).toHaveLength(0);
  });
});
