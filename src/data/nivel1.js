// Nivel 1 — Una skill. La página "a fondo" de por dónde se empieza.
// Material: GUIA_CLAUDE_v0.12 (las 3 piezas, el ejemplo hilo de reseñas,
// las 4 preguntas, el momento de anclaje).
export const nivel1 = {
  meta: {
    title: 'Nivel 1 · Una skill — Tu primer asistente de IA',
    description: 'Tu primer asistente, pieza a pieza: la tarea, sus normas y su memoria, con un ejemplo seguido de principio a fin.',
  },
  n: '1',
  nombre: 'Una skill',
  titulo: 'Tu primer asistente, pieza a pieza',
  lead: 'Una skill es la primera tarea que tu asistente sabe hacer. Lo que creas aquí, sin escribir una línea de código. Aquí la desmontamos para que veas de qué está hecha.',
  bloques: [
    {
      tipo: 'intro',
      titulo: 'Piensa en un libro que escribes tú',
      parrafos: [
        'Un asistente no es un programa que instalas. Es <b>texto</b>: unas instrucciones que le das a la IA para que se especialice en una cosa concreta.',
        'Imagínalo como un libro: una <b>portada</b> que dice para qué sirve y unas <b>páginas</b> con las instrucciones de dentro. Las dos las escribes tú.',
      ],
    },
    {
      tipo: 'piezas',
      titulo: 'Las tres piezas',
      intro: 'Tu asistente se construye con tres piezas que se quedan guardadas (no se borran al cerrar la conversación). Puedes tener solo la primera y ya funciona. Las otras dos lo hacen más tuyo.',
      items: [
        {
          etiqueta: 'La skill',
          pregunta: '¿qué quieres que haga?',
          cristiano: 'la tarea que le encargas',
          detalle: 'La tarea concreta: responder reseñas, resumir contratos, preparar fichas de producto. Una cosa, hecha bien. Es la pieza por la que se empieza, y la más fácil.',
        },
        {
          etiqueta: 'Las normas de siempre',
          pregunta: '¿cómo quieres que se comporte?',
          cristiano: 'cómo se comporta, pase lo que pase',
          detalle: 'Las normas que cumple en <b>cualquier</b> tarea: el tono con el que habla, lo que no puede hacer nunca, lo que sabe de ti. Aquí es donde empieza a sonar a ti y no a una IA cualquiera.',
        },
        {
          etiqueta: 'La memoria',
          pregunta: '¿qué quieres que recuerde?',
          cristiano: 'lo que no olvida entre charlas',
          detalle: 'Lo que no quieres repetirle cada vez: cómo se llama tu negocio, a qué clientes te diriges, cómo firmas. Con esto el asistente ya es tuyo, no uno genérico.',
        },
      ],
    },
    {
      tipo: 'hilo',
      titulo: 'Un ejemplo seguido de principio a fin',
      intro: 'Digamos que tienes una tienda de café y quieres que la IA <b>responda las reseñas</b> de los clientes. Mira cómo entran las tres piezas en una sola tarea:',
      pasos: [
        { pieza: '1', texto: '<b>La tarea.</b> «Responder reseñas de clientes con tono cercano, sin sonar a robot.» Eso es la skill.' },
        { pieza: '2', texto: '<b>La norma de siempre.</b> «No prometas un reembolso sin que lo confirme una persona.» Es una norma fija, y se cumple responda lo que responda.' },
        { pieza: '3', texto: '<b>Lo que recuerda.</b> «La tienda se llama Aroma, vendemos café de tueste propio y firmamos como el equipo de Aroma.» Eso es la memoria, y no se lo vuelves a contar.' },
      ],
    },
    {
      tipo: 'preguntas',
      titulo: 'Las cuatro preguntas que crean tu skill',
      intro: 'Cuando empieces, la guía te irá presentando estas cuatro preguntas. No hay respuestas correctas, solo las tuyas.',
      items: [
        { q: '¿En qué tarea pierdes más tiempo, o te repites más?', ayuda: 'Empieza por algo pequeño y cotidiano. No tiene que ser impresionante.' },
        { q: '¿Quién recibe el resultado y qué espera?', ayuda: 'Esto fija el tono. No le hablas igual a un cliente molesto que a tu jefe.' },
        { q: 'Enséñale un resultado bueno y uno malo.', ayuda: 'Los dos hacen falta. La diferencia entre ambos es lo que le enseña dónde está la frontera.' },
        { q: '¿Qué no puede hacer nunca?', ayuda: 'Las líneas rojas: inventar datos, prometer plazos que no controlas, salirse del tono.' },
      ],
    },
    {
      tipo: 'destacado',
      titulo: 'El momento que importa: que siga ahí mañana',
      texto: 'La respuesta que ves en el chat está bien, pero vive solo en esa conversación. Si cierras, se va. La señal de que lo has hecho bien es otra: <b>guardas la skill, abres una conversación nueva al día siguiente, y vuelve a responder a tu manera sin que se lo repitas</b>. Ahí es cuando se vuelve tuyo.',
    },
  ],
  prev: null,
  next: { href: '/nivel-2', texto: 'Cuando una skill se queda corta: un equipo' },
  cta: {
    titulo: 'Si quieres probarlo',
    sub: 'Coge una tarea de las que repites. La guía te lleva con las cuatro preguntas, a tu ritmo.',
    texto: 'Empezar por una tarea',
    href: '/ejemplos',
  },
};
