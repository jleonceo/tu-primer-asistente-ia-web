# Tu primer asistente de IA

> Una web formativa, gratuita y sin programar, que te guía para crear tu primer asistente de IA: uno que recuerda tu forma de trabajar y mañana no la olvida.

**Esto es un prototipo.** Una pieza informativa, formativa y pedagógica: un punto de partida y todavía no un producto terminado. Falta mucho trabajo por delante. Se irá puliendo y ampliando con el uso. Este repositorio contiene **el código de la web** (hecha con Astro) y esta explicación: qué resuelve y cómo se relaciona con el resto del trabajo.

*(English version below: [jump to English](#english).)*

---

## Qué problema resuelve

Casi todo el mundo usa la IA para pedirle tareas sueltas. Le pides algo, te contesta, y mañana lo ha olvidado: vuelves a empezar de cero. La idea de esta web es otra: enseñarte a darle a la IA **tu** forma de trabajar y **tu** memoria, para que deje de ser una herramienta genérica y pase a ser tu asistente.

Y todo en lenguaje normal. Si sabes explicarle tu trabajo a un compañero nuevo, sabes hacer esto. No hace falta saber programar, no hay que instalar nada y no cuesta dinero.

## Qué se ve en la web

Un recorrido guiado, paso a paso, alrededor de un método de **tres piezas**:

- **La tarea:** qué quieres que haga (lo que en Claude se llama una *skill*: un encargo que escribes una vez y queda guardado).
- **El comportamiento:** cómo actúa siempre, en cualquier tarea.
- **La memoria:** qué recuerda de ti.

Al final, la web junta todo en un texto que copias y pegas en tu cuenta gratuita de Claude. Importante: **la web no es la IA**. Es el sitio que te enseña y te prepara el texto; la IA es Claude, donde lo pegas.

Además del recorrido, la web incluye:

- Un **antes y después** con un ejemplo real, para ver el valor en segundos.
- **El método honesto:** lo que se cree que hace la IA, frente a lo que se ha comprobado montándola de verdad. Sin promesas infladas.
- **Los conceptos:** un glosario que explica cada palabra (skill, CLAUDE.md, Markdown, agente, enjambre…) con analogías para quien no es del gremio.
- **Tres niveles**, de menos a más: una tarea, un equipo y un sistema. Al empezar solo necesitas el primero; los otros dos están para enseñar hasta dónde llega esto.

## Cómo está hecha (para quien quiera el detalle)

- **Astro** (un generador de webs estáticas: produce páginas HTML que cargan rápido y no necesitan servidor propio).
- **Sin backend ni claves:** todo ocurre en el navegador. Lo que escribes mientras la rellenas se queda en tu propio equipo (en el *localStorage* del navegador, una memoria local de la página) y no se envía a ningún sitio.
- **15 páginas**, con el contenido separado de la estructura: los textos viven en archivos de datos aparte, para poder corregir y mejorar sin tocar el diseño.
- Pensada para **desplegarse en Vercel** (un servicio que publica webs estáticas y les da una dirección).

Por cómo está construida (estática, sin backend, sin credenciales), no maneja datos sensibles ni secretos.

## Cómo se relaciona con el resto del trabajo

Esta web es la **cara visible y accesible** de un trabajo más amplio: la puerta de entrada que explica, en lenguaje llano, conceptos que en otros repositorios están construidos y probados de verdad. Si la web te despierta la curiosidad, aquí es donde vive la ingeniería:

- [**accounting-agent-swarm**](https://github.com/jleonceo/accounting-agent-swarm): un equipo de asistentes ("enjambre") que se reparten una tarea contable de principio a fin. Es el ejemplo de "sistema" que la web explica de forma sencilla.
- [**verificacion-determinista-ia**](https://github.com/jleonceo/verificacion-determinista-ia): la pieza de verificación, código que recomprueba la coherencia del sistema **sin** depender de la IA. El guardarraíl que mantiene todo honesto.
- [**gobernanza-skills-analiticas**](https://github.com/jleonceo/gobernanza-skills-analiticas): el método para que un asistente no empeore en silencio (respuestas de referencia, pruebas de no-regresión y autonomía según el riesgo). Es "el método honesto" de la web, por dentro.
- [**agent-memory-governance**](https://github.com/jleonceo/agent-memory-governance): cómo evitar que la memoria de un asistente se convierta en un cajón de sastre.
- [**llm-eval-contable**](https://github.com/jleonceo/llm-eval-contable): cómo se examina a un asistente como a un alumno, con su nota medida.

## Estado

Prototipo en evolución. Se publica para **informar** y compartir el enfoque, no como producto cerrado. Las sugerencias son bienvenidas.

## Ver la web

La web está publicada en **https://tu-primer-asistente-ia-web.vercel.app/**

## Licencia

El código de esta web y esta explicación se publican bajo licencia MIT (ver [LICENSE](LICENSE)).

---

<a name="english"></a>

# Your first AI assistant

> A free, no-code educational website that walks you through creating your first AI assistant: one that remembers how you work and won't forget it tomorrow.

**This is a prototype.** An informative, educational piece: a starting point, not a finished product. There's a lot of work still ahead. It will be refined and expanded over time. This repository contains **the website's code** (built with Astro) and this explanation: what it solves and how it connects to the rest of the work.

## The problem it solves

Most people use AI for one-off tasks. You ask, it answers, and tomorrow it has forgotten: you start from scratch. This website takes a different path: it teaches you to give the AI **your** way of working and **your** memory, so it stops being a generic tool and becomes your assistant.

All in plain language. If you can explain your job to a new colleague, you can do this. No coding, nothing to install, no cost.

## What the website shows

A step-by-step guided walkthrough built around a **three-piece** method:

- **The task:** what you want it to do (what Claude calls a *skill*: an instruction you write once and that stays saved).
- **The behavior:** how it always acts, across any task.
- **The memory:** what it remembers about you.

At the end, the website assembles everything into a piece of text you copy and paste into your free Claude account. Important: **the website is not the AI**. It's the place that teaches you and prepares the text; the AI is Claude, where you paste it.

It also includes a before/after with a real example, an "honest method" section (hype vs. what's actually been verified), a plain-language glossary, and three levels (a task, a team and a system).

## How it's built (for those who want the detail)

- **Astro** (a static-site generator: it produces fast HTML pages that need no server of their own).
- **No backend, no keys:** everything happens in the browser. What you type while filling it in stays on your own device (in the browser's *localStorage*) and is never sent anywhere.
- **15 pages**, with content separated from structure, so it can be improved without touching the design.
- Built to **deploy on Vercel**.

Because of how it's built (static, no backend, no credentials), it handles no sensitive data or secrets.

## How it relates to the rest of the work

This website is the **accessible, visible face** of a wider ecosystem: the front door that explains, in plain language, concepts that other repositories actually build and test. If the website sparks your curiosity, that's where the engineering lives: see `accounting-agent-swarm`, `verificacion-determinista-ia`, `gobernanza-skills-analiticas`, `agent-memory-governance` and `llm-eval-contable` linked above.

## Status

A prototype in progress, published to **inform** and share the approach, not as a finished product. Feedback welcome.

## Live site

The site is live at **https://tu-primer-asistente-ia-web.vercel.app/**

## License

The website's code and this explanation are published under the MIT license (see [LICENSE](LICENSE)).
