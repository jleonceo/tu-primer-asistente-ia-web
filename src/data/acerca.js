// ============================================================
// CONTENIDO DE LA PÁGINA "QUÉ ES ESTO": fuente única de verdad.
// Editar los textos AQUÍ; acerca.astro solo los coloca.
// 24/09/2026: reescrito con el registro de la guía de estilo del proyecto. La sección de otras
// IA dice ya que Anthropic creó el formato de las skills y que después lo
// adoptaron otras plataformas (lista comprobada en agentskills.io ese día).
// ============================================================

export const acerca = {
  titulo: 'Qué es esta web y qué no es',
  subtitulo: 'Para qué sirve, cómo funciona, qué hace con los datos y si vale para otras IA.',

  secciones: [
    {
      id: 'idea',
      h2: 'La idea',
      parrafos: [
        'Lo habitual es usar la IA para tareas sueltas, explicando el contexto en cada conversación. Esta web enseña a <b>escribir unas instrucciones</b> con la tarea, las normas y los datos de quien la usa, para que Claude trabaje con ese criterio en todas las conversaciones. Al mismo tiempo explica, sin tecnicismos, por qué funciona así.',
      ],
    },
    {
      id: 'como-funciona',
      h2: 'Cómo funciona',
      parrafos: [
        'La web lleva por tres pasos, uno por pieza: <b>la tarea</b> (qué hace), <b>las normas</b> (cómo se comporta siempre) y <b>la memoria</b> (qué datos de quien lo usa tiene en cuenta). Al final junta las respuestas en un solo texto para copiarlo.',
        '<b>El asistente se crea en la cuenta de Claude de cada persona.</b> Esta web no es la IA, solo enseña y prepara el texto. El último paso es pegarlo en las instrucciones de un proyecto de Claude, donde queda guardado. Para usar la web no hace falta cuenta, ni pagar, ni instalar nada.',
      ],
    },
    {
      id: 'que-es-y-que-no',
      h2: 'Lo que es y lo que no es',
      lista: [
        { si: true,  texto: '<b>Es</b> un método ordenado para que el tiempo que se dedica a preparar un asistente se note en sus respuestas.' },
        { si: true,  texto: '<b>Es</b> formación y creación a la vez: se entiende cómo funciona mientras se monta.' },
        { si: false, texto: '<b>No es</b> instantáneo. Un buen asistente sale de respuestas pensadas y mejora con el uso.' },
        { si: false, texto: '<b>No convierte en experto en IA</b>, pero al terminar hay un asistente propio que antes no existía.' },
      ],
    },
    {
      id: 'privacidad',
      h2: 'Qué hace esta web con los datos',
      parrafos: [
        'Lo que se escribe en esta web <b>se queda en el navegador</b> y no se envía a ningún sitio. Solo cuando el texto se pega en Claude pasa por los servidores de Anthropic.',
        'Qué conviene no escribir nunca y qué hay que revisar siempre se explica en <b><a href="/metodo">el método</a></b>.',
      ],
    },
    {
      id: 'otras-ias',
      h2: '¿Solo vale para Claude?',
      parrafos: [
        'La guía usa <b>Claude</b> porque Anthropic creó el formato de las <i>skills</i> y durante un tiempo fue la plataforma que mejor resolvía esta forma de trabajar. El método, sin embargo, <b>no depende de Claude</b>.',
        'Anthropic publicó ese formato como <b>estándar abierto</b> en <a href="https://agentskills.io" target="_blank" rel="noopener">agentskills.io</a>. Después lo han adoptado muchas otras herramientas, entre ellas ChatGPT y Codex de OpenAI, Gemini CLI de Google, GitHub Copilot y Cursor. Las tres piezas, la tarea, las normas y la memoria, existen también en esas plataformas con otros nombres. Lo que se aprende aquí <b>sirve en todas ellas</b>: cambia dónde se pega el texto y cómo se llama cada archivo.',
      ],
    },
  ],

  avisoIndep: {
    negrita: 'Proyecto independiente.',
    texto:
      ' No tiene relación con Anthropic ni cuenta con su respaldo. Claude es una marca de Anthropic. Esta web solo explica cómo usarlo. Es un prototipo sin uso comercial.',
  },

  cta: {
    texto: 'Empezar la guía →',
    href: '/ejemplos',
  },
};
