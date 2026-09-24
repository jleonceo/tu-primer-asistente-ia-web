// Nivel 1 · Una skill. La página "a fondo" de por dónde se empieza.
// Material: GUIA_CLAUDE_v0.12 (las 3 piezas, el ejemplo hilo de reseñas,
// las 4 preguntas, el momento de anclaje).
// 24/09/2026: reescrita con el registro de la guía de automatización del M6
// (impersonal, verbos literales, cada afirmación con su causa). Se corrige la
// definición de skill contra la documentación oficial de Anthropic: una skill
// es un SKILL.md que se carga cuando la tarea encaja; lo que prepara esta web
// va en las instrucciones de un proyecto.
export const nivel1 = {
  meta: {
    title: 'Nivel 1 · Una skill · Tu primer asistente de IA',
    description: 'Cómo se construye un asistente propio con tres piezas, la tarea, las normas y la memoria, siguiendo un ejemplo de principio a fin.',
  },
  n: '1',
  nombre: 'Una skill',
  titulo: 'Un asistente propio se construye con tres piezas: la tarea, las normas y la memoria',
  lead: 'La primera pieza es la tarea que el asistente sabe hacer. En esta guía se llama skill y se escribe en lenguaje normal, sin programar. Esta página explica de qué está hecha cada pieza y dónde se guarda en Claude.',
  bloques: [
    {
      tipo: 'intro',
      titulo: 'Un asistente es un texto de instrucciones guardado en Claude',
      parrafos: [
        'Un asistente se hace con un <b>texto de instrucciones</b>, sin instalar ningún programa. Claude lee ese texto antes de cada respuesta. En él encuentra qué tarea tiene que hacer, cómo debe comportarse y qué datos de quien lo usa tiene que tener en cuenta.',
        'Claude ofrece dos sitios para guardar esas instrucciones. Las <b>instrucciones de un proyecto</b> se aplican a todas las conversaciones que se abren dentro de ese proyecto. Es el sitio que usa esta guía, porque funciona en la cuenta gratuita sin configurar nada más. Una <b>skill</b>, en el sentido estricto que usa Anthropic, es un archivo llamado SKILL.md que lleva un nombre, una descripción y las instrucciones. Se sube en Personalizar > Skills, exige tener activada la ejecución de código y Claude solo la carga cuando la tarea que se le pide encaja con su descripción.',
        'En los dos casos el contenido es el mismo: la tarea, cómo hacerla y lo que hay que evitar. Por eso esta guía llama skill a la primera pieza, aunque al final el texto se pegue en un proyecto.',
      ],
    },
    {
      tipo: 'piezas',
      titulo: 'Las tres piezas y qué aporta cada una',
      intro: 'Las tres piezas quedan guardadas y se aplican en cada conversación nueva del proyecto. Con la primera el asistente ya funciona. Las otras dos adaptan sus respuestas a quien lo usa.',
      items: [
        {
          etiqueta: 'La skill',
          pregunta: '¿qué tiene que hacer?',
          cristiano: 'la tarea que se le encarga',
          detalle: 'Una tarea concreta que se repite, como responder reseñas, resumir contratos o preparar fichas de producto. Conviene que sea una sola, porque unas instrucciones que mezclan varias tareas producen respuestas que no cumplen bien ninguna.',
        },
        {
          etiqueta: 'Las normas',
          pregunta: '¿cómo tiene que comportarse?',
          cristiano: 'lo que cumple en cualquier tarea',
          detalle: 'Las reglas que se aplican siempre: el tono, el trato de tú o de usted, lo que no puede hacer nunca y cuándo tiene que avisar de que no está seguro. Son las que acercan el resultado al que escribiría quien lo usa.',
        },
        {
          etiqueta: 'La memoria',
          pregunta: '¿qué tiene que saber de quien lo usa?',
          cristiano: 'los datos que no cambian de una conversación a otra',
          detalle: 'Los datos fijos que evitan explicar el contexto cada vez: el nombre del negocio, el tipo de cliente o la firma. Claude tiene además una memoria automática, activada por defecto también en la cuenta gratuita, que guarda información de las conversaciones. Lo que se escribe en las instrucciones tiene una ventaja sobre ella: lo decide y lo corrige quien lo escribe.',
        },
      ],
    },
    {
      tipo: 'hilo',
      titulo: 'Un ejemplo de principio a fin: una tienda de café que responde reseñas',
      intro: 'Una tienda de café quiere que Claude <b>redacte las respuestas a las reseñas</b> de sus clientes. Así se reparte el encargo entre las tres piezas:',
      pasos: [
        { pieza: '1', texto: '<b>La tarea.</b> «Redactar respuestas a las reseñas de clientes con un tono cercano, sin fórmulas de plantilla.» Es la skill.' },
        { pieza: '2', texto: '<b>La norma.</b> «No prometer un reembolso sin que lo confirme una persona.» Se cumple en todas las respuestas, sea cual sea la reseña.' },
        { pieza: '3', texto: '<b>La memoria.</b> «La tienda se llama Aroma, vende café de tueste propio y firma como el equipo de Aroma.» Con este dato guardado, las respuestas ya no piden el nombre de la tienda ni se lo inventan.' },
      ],
    },
    {
      tipo: 'preguntas',
      titulo: 'Las cuatro preguntas con las que se escribe la skill',
      intro: 'El recorrido de esta web hace estas cuatro preguntas en su primer paso. Cada una aporta una parte distinta de las instrucciones.',
      items: [
        { q: '¿En qué tarea se pierde más tiempo o se repite más lo mismo?', ayuda: 'Conviene empezar por una tarea pequeña y frecuente, porque es la que antes permite comprobar si el asistente responde bien.' },
        { q: '¿Quién recibe el resultado y qué espera?', ayuda: 'La respuesta fija el tono. A un cliente molesto se le escribe de otra forma que a un proveedor o a un alumno.' },
        { q: '¿Cómo es un resultado bueno y cómo es uno malo?', ayuda: 'Hacen falta los dos. El bueno indica a qué tiene que parecerse la respuesta y el malo muestra qué fórmulas hay que evitar.' },
        { q: '¿Qué no puede hacer nunca?', ayuda: 'Son los límites fijos, como inventar datos, prometer plazos que no se controlan o cambiar de tono.' },
      ],
    },
    {
      tipo: 'destacado',
      titulo: 'La prueba de que funciona es una conversación nueva al día siguiente',
      texto: 'Una buena respuesta dentro de una conversación solo demuestra que esa conversación ya tenía el contexto. La comprobación que sirve es otra: <b>abrir al día siguiente una conversación nueva dentro del proyecto y pedir la misma tarea sin explicar nada</b>. Si la respuesta respeta el tono, las normas y los datos guardados, las instrucciones están bien escritas.',
    },
  ],
  prev: null,
  next: { href: '/nivel-2', texto: 'Cuando una skill no basta: un equipo' },
  cta: {
    titulo: 'Para probarlo con una tarea propia',
    sub: 'El recorrido de esta web hace las cuatro preguntas y prepara el texto para pegarlo en un proyecto de Claude.',
    texto: 'Empezar por una tarea',
    href: '/ejemplos',
  },
};
