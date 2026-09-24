# Tu primer asistente de IA

> Una web gratuita para aprender a escribir las instrucciones que convierten a Claude en un asistente propio, con una tarea, unas normas y los datos de quien lo usa. No hace falta programar.

**Es un prototipo.** Es una guía formativa y un punto de partida, no un producto terminado. Se irá ampliando con el uso. Este repositorio contiene **el código de la web**, hecha con Astro. También contiene esta explicación de qué resuelve y de cómo se relaciona con el resto de mi trabajo.

*(English version below: [jump to English](#english).)*

---

## Qué problema resuelve

Lo habitual es usar la IA para tareas sueltas y explicarle el contexto en cada conversación: qué tarea es, con qué tono y con qué límites. La web enseña a escribir ese contexto **una sola vez**, en unas instrucciones que Claude aplica en todas las conversaciones de un proyecto.

Todo está en lenguaje normal. Quien sabe explicarle su trabajo a un compañero nuevo tiene lo necesario para hacerlo. No hay que programar ni instalar nada. La web es gratuita.

## Qué hay en la web

Un recorrido en tres pasos, uno por cada pieza del método:

- **La tarea**, que la web llama *skill*: qué tiene que hacer el asistente. En sentido estricto, una skill de Claude es un archivo `SKILL.md` que Claude carga cuando la tarea encaja con su descripción. La web prepara el mismo contenido para pegarlo en las instrucciones de un proyecto.
- **Las normas**: cómo se comporta en cualquier tarea.
- **La memoria**: los datos de quien lo usa que tiene que tener en cuenta.

Al final, la web junta las respuestas en un texto que se copia en un proyecto de Claude. Sirve la cuenta gratuita. **La web no es la IA**: enseña y prepara el texto. Quien lo usa es Claude.

Además del recorrido, la web incluye:

- La misma tarea resuelta **con y sin instrucciones**, con respuestas escritas a mano para mostrar la diferencia.
- **El método**: lo que se suele creer que hace la IA frente a lo que se comprobó al montar un sistema contable. Explica también cómo se prueba un asistente antes de confiar en él.
- **Un glosario** con cada palabra que usa la guía (skill, CLAUDE.md, Markdown, agente, enjambre y otras), explicada con una comparación.
- **Tres niveles**, de menos a más: una tarea, un equipo y un sistema. Para empezar basta el primero. Los otros dos explican cómo crece un sistema cuando una skill no basta.

## Cómo está hecha

- Astro, un generador de webs estáticas: produce páginas HTML que cargan rápido y no necesitan servidor propio.
- Sin servidor ni claves: todo ocurre en el navegador. Lo que se escribe se guarda en el *localStorage* del navegador, en el propio equipo. No se envía a ningún sitio.
- **15 páginas**, con el contenido separado de la estructura. Los textos están en archivos de datos aparte, para poder corregirlos sin tocar el diseño.
- Publicada en **Vercel**, que la vuelve a publicar cada vez que cambia este repositorio.

Como es estática y no tiene servidor ni credenciales, no maneja datos sensibles ni secretos.

## Cómo se relaciona con el resto de mi trabajo

Esta web es la puerta de entrada, en lenguaje llano, a conceptos que otros repositorios construyen y prueban con código:

- [**accounting-agent-swarm**](https://github.com/jleonceo/accounting-agent-swarm): un enjambre de agentes que se reparten una tarea contable de principio a fin. Es el ejemplo del nivel 2 de la web.
- [**verificacion-determinista-ia**](https://github.com/jleonceo/verificacion-determinista-ia): código que comprueba la coherencia del sistema **sin** depender de la IA.
- [**gobernanza-skills-analiticas**](https://github.com/jleonceo/gobernanza-skills-analiticas): cómo se evita que un asistente empeore sin que nadie lo note, con respuestas de referencia, pruebas de no regresión y autonomía según el riesgo. Es la base de la página del método.
- [**agent-memory-governance**](https://github.com/jleonceo/agent-memory-governance): cómo se mantiene ordenada la memoria de un asistente.
- [**llm-eval-contable**](https://github.com/jleonceo/llm-eval-contable): cómo se evalúa un asistente como a un alumno, con su nota medida.

## Estado

Prototipo en evolución. Se publica para compartir el enfoque, no como producto cerrado. Las sugerencias son bienvenidas.

## Ver la web

La web está publicada en **https://tu-primer-asistente-ia-web.vercel.app/**

## Licencia

El código de esta web y esta explicación se publican con licencia MIT (ver [LICENSE](LICENSE)).

---

<a name="english"></a>

# Your first AI assistant

> A free website that teaches you to write the instructions that turn Claude into your own assistant, with a task, a set of rules and the details of the person using it. No coding needed.

**This is a prototype.** It is an educational guide and a starting point, not a finished product. It will grow with use. This repository holds **the website's code**, built with Astro. It also holds this explanation of what it solves and how it connects to the rest of my work.

## The problem it solves

Most people use AI for one-off tasks and explain the context in every conversation: what the task is, which tone to use and which limits apply. The website teaches you to write that context **once**, as instructions Claude applies in every conversation inside a project.

Everything is in plain language. If you can explain your job to a new colleague, you can do this. There is nothing to code or install. The website is free.

## What the website contains

A three-step walkthrough, one step per piece of the method:

- **The task**, which the website calls a *skill*: what the assistant has to do. Strictly speaking, a Claude skill is a `SKILL.md` file that Claude loads when a task matches its description. The website prepares the same content to paste into a project's instructions.
- **The rules**: how it behaves in any task.
- **The memory**: the details about the user it has to take into account.

At the end, the website puts the answers together in a text you paste into a Claude project; a free account is enough. **The website is not the AI**: it teaches and prepares the text. Claude is what uses it.

It also includes the same task answered **with and without instructions** (hand-written examples), a page on **the method** and on testing an assistant before trusting it, a **glossary** that explains every term with a comparison, and **three levels**: a task, a team and a system.

## How it's built

- Astro, a static-site generator: fast HTML pages that need no server of their own.
- No backend and no keys: everything happens in the browser. What you type is stored in the browser's *localStorage* on your own device. It is never sent anywhere.
- **15 pages**, with content kept apart from structure so the text can be fixed without touching the design.
- Published on **Vercel**, which republishes it whenever this repository changes.

Because it is static, with no backend and no credentials, it handles no sensitive data or secrets.

## How it relates to the rest of my work

This website is the plain-language entry point to concepts that other repositories build and test in code: `accounting-agent-swarm`, `verificacion-determinista-ia`, `gobernanza-skills-analiticas`, `agent-memory-governance` and `llm-eval-contable`, linked above.

## Status

A prototype in progress, published to share the approach, not as a finished product. Feedback is welcome.

## Live site

The site is live at **https://tu-primer-asistente-ia-web.vercel.app/**

## License

The website's code and this explanation are published under the MIT license (see [LICENSE](LICENSE)).
