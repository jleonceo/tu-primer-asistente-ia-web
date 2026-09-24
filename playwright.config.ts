import { defineConfig, devices } from '@playwright/test';

// Config E2E de web_nueva (Astro + Tailwind + daisyUI).
// El dev server de Astro arranca en el puerto 4321 por defecto.
// webServer lo levanta solo; reuseExistingServer permite reutilizar uno ya abierto.
// IMPORTANTE: se usa [::1] (IPv6) explícito y NO 'localhost'. En este equipo
// Windows el dev server de Astro escucha SÓLO en IPv6 (::1 responde 200,
// 127.0.0.1 rechaza). Con 'localhost', Chromium puede resolver a la variante
// IPv4 y page.goto se cuelga hasta agotar el timeout. Fijando [::1] apuntamos
// al interfaz que realmente responde.
const PORT = 4321;
const HOST = '[::1]';
const BASE_URL = `http://${HOST}:${PORT}`;

export default defineConfig({
  testDir: './e2e',
  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  // El dev server de Astro es un único proceso y compila las páginas bajo
  // demanda (Vite): la PRIMERA visita a cada ruta es lenta. Con muchos workers
  // en paralelo, varias navegaciones frías simultáneas saturan el server y
  // agotan el timeout. Un solo worker las serializa y calienta la caché.
  workers: 1,
  reporter: [['list'], ['html', { open: 'never' }]],
  timeout: 60_000,
  use: {
    baseURL: BASE_URL,
    trace: 'on-first-retry',
    // margen para la primera compilación en frío de cada ruta.
    navigationTimeout: 45_000,
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
  webServer: {
    command: 'npm run dev',
    url: BASE_URL,
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,
  },
});
