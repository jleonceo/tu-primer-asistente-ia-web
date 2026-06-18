// ============================================================
// CONTENIDO DE LA PÁGINA "QUÉ ES ESTO" — fuente única de verdad.
// Editar los textos AQUÍ; acerca.astro solo los coloca.
// ============================================================

export const acerca = {
  titulo: 'Qué es esto, en claro',
  subtitulo: 'Lo que es, lo que no, y cómo trata tus datos. Sin rodeos.',

  secciones: [
    {
      id: 'idea',
      h2: 'La idea',
      parrafos: [
        'Casi todo el mundo usa la IA para pedirle tareas sueltas. <b>Esto va de otra cosa:</b> de darle tu forma de trabajar y tu memoria, para que deje de ser una IA genérica y pase a ser <b>tu</b> asistente. Y de aprender, de paso, cómo se hace, sin tecnicismos.',
      ],
    },
    {
      id: 'como-funciona',
      h2: 'Cómo funciona',
      parrafos: [
        'Te guiamos por tres piezas, una cada vez: <b>su tarea</b> (qué hace), <b>su comportamiento</b> (cómo actúa siempre) y <b>su memoria</b> (qué recuerda de ti). Al final, juntamos todo en un texto que tú copias.',
        '<b>El asistente se crea en tu propio Claude.</b> Esta web no es la IA: es el sitio que te enseña y te prepara el texto. El último paso, pegarlo en tu Claude, es el que lo hace tuyo y permanente. Aquí no hace falta cuenta, ni pagar nada, ni instalar nada.',
      ],
    },
    {
      id: 'que-es-y-que-no',
      h2: 'Lo que es… y lo que no',
      lista: [
        { si: true,  texto: '<b>Es</b> un método y una estructura para que el tiempo que inviertas cuente.' },
        { si: true,  texto: '<b>Es</b> medio formación, medio creación: lo entiendes mientras lo haces.' },
        { si: false, texto: '<b>No es</b> instantáneo: un buen asistente se construye con tus respuestas y mejora con el uso.' },
        { si: false, texto: '<b>No te hace experto</b>, pero sales con un asistente que antes no existía y que es tuyo.' },
      ],
    },
    {
      id: 'privacidad',
      h2: 'Tu privacidad, lo propio de esta web',
      parrafos: [
        'Mientras rellenas esta web, <b>lo que escribes se queda en tu navegador</b> y no lo enviamos a ningún sitio. Solo más tarde, cuando pegues tu asistente en Claude, ese texto pasa por los servidores de Anthropic.',
        'Lo que conviene tener en cuenta sobre privacidad y sobre la fiabilidad de un asistente (qué no escribir nunca, qué revisar siempre) lo explicamos entero en <b><a href="/metodo">el método</a></b>.',
      ],
    },
    {
      id: 'otras-ias',
      h2: '¿Esto solo vale para Claude?',
      parrafos: [
        'Aquí te enseñamos con <b>Claude</b>, porque es donde hoy mejor encaja esta forma de trabajar: fue de los primeros en usar un archivo de reglas como <b>CLAUDE.md</b> y va por delante en las <i>skills</i>. Pero el método <b>no es exclusivo suyo.</b>',
        'Las tres piezas que aprendes —la tarea, las normas y la memoria— existen también en ChatGPT (OpenAI) y en Gemini (Google), con otros nombres. Y las <i>skills</i> siguen un <b>estándar abierto</b> (<a href="https://agentskills.io" target="_blank" rel="noopener">agentskills.io</a>, creado por Anthropic y adoptado ya por muchas herramientas): la misma skill funciona en Claude, en el agente de Google o en el de OpenAI. Así que lo que aprendas aquí <b>te lo llevas</b>: cambia dónde lo pegas y cómo se llama cada archivo, no la idea de fondo.',
      ],
    },
  ],

  avisoIndep: {
    negrita: 'Proyecto independiente.',
    texto:
      ' No está afiliado ni respaldado por Anthropic. "Claude" es una marca de Anthropic; aquí solo te enseñamos a usarla. Esto es un prototipo de prueba, sin uso comercial.',
  },

  cta: {
    texto: 'Si quieres, empieza la guía →',
    href: '/ejemplos',
  },
};
