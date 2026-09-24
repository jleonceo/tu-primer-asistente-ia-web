// Nivel 1 · Una skill. La página de por dónde se empieza: qué es un asistente
// propio, dónde se guarda, sus tres partes, un ejemplo de principio a fin, las
// cuatro preguntas del primer paso y cómo se comprueba que funciona.
// Material: la guía de Claude del producto (las tres partes, el ejemplo de las
// reseñas, las cuatro preguntas) y la documentación oficial de Anthropic sobre
// proyectos y skills.
// 24/09/2026: reescrita desde lo que el lector necesita entender. Empieza por el
// problema que resuelve, dice dónde se guarda cada cosa y la causa de cada norma.
export const nivel1 = {
  meta: {
    title: 'Nivel 1 · Una skill · Tu primer asistente de IA',
    description: 'Un asistente propio es un texto de instrucciones con tres partes, la tarea, las normas y los datos de quien lo usa, que Claude aplica en cada conversación de un proyecto. Con un ejemplo de principio a fin.',
  },
  n: '1',
  nombre: 'Una skill',
  titulo: 'Un asistente propio es un texto de instrucciones que Claude aplica en cada conversación',
  lead: 'Sin instrucciones guardadas, Claude empieza cada conversación sin saber a qué se dedica quien le escribe, qué tono quiere ni qué no debe hacer, así que hay que explicárselo cada vez. Un asistente propio lo resuelve con un texto escrito una sola vez. Esta página explica qué partes tiene ese texto, dónde se guarda y cómo se comprueba que funciona. Es el nivel por el que empieza esta guía.',
  bloques: [
    {
      tipo: 'intro',
      titulo: 'Las instrucciones se guardan en un proyecto de Claude y valen para todas sus conversaciones',
      parrafos: [
        'Claude lee las instrucciones de un proyecto antes de cada respuesta que da dentro de él. Por eso basta con escribirlas una vez: cada conversación nueva del proyecto empieza ya con la tarea, las normas y los datos que contienen. Los proyectos están disponibles en la cuenta gratuita, que permite hasta cinco. No hace falta instalar ningún programa.',
        'Esta guía llama <b>skill</b> a la primera parte de esas instrucciones, la tarea. En Claude, una skill en sentido estricto es un archivo llamado SKILL.md con un nombre, una descripción y las instrucciones de una tarea. Claude lo carga solo cuando lo que se le pide encaja con esa descripción, en cualquier conversación y no únicamente dentro de un proyecto. Se sube en Personalizar > Skills y exige tener activada la ejecución de código.',
        'El contenido es el mismo en los dos casos, porque lo que cambia es dónde se guarda y cuándo se lee. El camino principal de esta guía es el proyecto, que es el más sencillo de montar. Al terminar el recorrido, la web descarga además la tarea como skill, en un .zip que se sube tal cual.',
      ],
    },
    {
      tipo: 'piezas',
      titulo: 'Las instrucciones tienen tres partes y cada una responde a una pregunta',
      intro: 'Con la primera parte el asistente ya funciona. Las otras dos hacen que sus respuestas se parezcan a las que daría quien lo usa, porque le dan su forma de trabajar y los datos de su negocio.',
      items: [
        {
          etiqueta: 'La skill',
          pregunta: '¿qué tiene que hacer?',
          cristiano: 'la tarea que se le encarga',
          detalle: 'Una tarea concreta que se repite, como responder reseñas, resumir contratos o preparar fichas de producto. Conviene que sea una sola, porque unas instrucciones que mezclan varias tareas dan respuestas que no cumplen bien ninguna.',
        },
        {
          etiqueta: 'Las normas',
          pregunta: '¿cómo tiene que comportarse?',
          cristiano: 'lo que cumple en cualquier tarea',
          detalle: 'El tono, el trato de tú o de usted, lo que no puede hacer nunca y cuándo tiene que avisar de que no está seguro. El trato se fija por separado para la conversación con quien lo usa y para los textos que prepara para otras personas, porque suelen ser distintos.',
        },
        {
          etiqueta: 'La memoria',
          pregunta: '¿qué tiene que saber de quien lo usa?',
          cristiano: 'los datos que no cambian de una conversación a otra',
          detalle: 'El nombre del negocio, el tipo de cliente o la firma. Escritos una vez en las instrucciones, evitan explicar el contexto en cada conversación. Claude tiene además una memoria automática, activada por defecto también en la cuenta gratuita, que guarda información de las conversaciones. Lo escrito en las instrucciones se diferencia de ella en que lo decide y lo corrige quien lo escribe.',
        },
      ],
    },
    {
      tipo: 'hilo',
      titulo: 'Una tienda de café reparte entre las tres partes el encargo de responder reseñas',
      intro: 'Una tienda de café quiere que Claude <b>redacte las respuestas a las reseñas</b> de sus clientes. Así queda su encargo en cada parte de las instrucciones:',
      pasos: [
        { pieza: '1', texto: '<b>La tarea.</b> «Redactar respuestas a las reseñas de clientes con un tono cercano, sin fórmulas de plantilla.» Es la skill.' },
        { pieza: '2', texto: '<b>La norma.</b> «No prometer un reembolso sin que lo confirme una persona.» Se cumple en todas las respuestas, sea cual sea la reseña, porque un reembolso prometido por escrito obliga a la tienda.' },
        { pieza: '3', texto: '<b>La memoria.</b> «La tienda se llama Aroma, vende café de tueste propio y firma como el equipo de Aroma.» Con este dato guardado, las respuestas ya no preguntan el nombre de la tienda ni se lo inventan.' },
      ],
    },
    {
      tipo: 'preguntas',
      titulo: 'La skill se escribe respondiendo a cuatro preguntas',
      intro: 'El primer paso del recorrido de esta web hace estas cuatro preguntas. Cada respuesta aporta una parte distinta de las instrucciones de la tarea.',
      items: [
        { q: '¿En qué tarea se pierde más tiempo o se repite más lo mismo?', ayuda: 'Conviene empezar por una tarea pequeña y frecuente, porque es la que antes permite comprobar si el asistente responde bien.' },
        { q: '¿Quién recibe el resultado y qué espera?', ayuda: 'La respuesta fija el tono. A un cliente molesto se le escribe de otra forma que a un proveedor o a un alumno.' },
        { q: '¿Cómo es un resultado bueno y cómo es uno malo?', ayuda: 'Hacen falta los dos. El bueno indica a qué tiene que parecerse la respuesta y el malo muestra qué fórmulas hay que evitar.' },
        { q: '¿Qué no puede hacer nunca?', ayuda: 'Son los límites fijos, como inventar datos o prometer plazos que no dependen de quien lo usa.' },
      ],
    },
    {
      tipo: 'destacado',
      titulo: 'Las instrucciones funcionan si una conversación nueva responde bien sin explicarle nada',
      texto: 'Dentro de una misma conversación, una buena respuesta no prueba que las instrucciones estén bien, porque Claude tiene delante todo lo que se le ha explicado en ella. La comprobación se hace <b>al día siguiente, en una conversación nueva dentro del proyecto, pidiendo la misma tarea sin dar ningún contexto</b>. Si la respuesta respeta el tono, las normas y los datos guardados, las instrucciones están bien escritas. Al terminar el recorrido, la web propone tres pruebas concretas para hacer esa comprobación.',
    },
  ],
  prev: null,
  next: { href: '/nivel-2', texto: 'Cuando una skill no basta: un enjambre de skills' },
  cta: {
    titulo: 'El recorrido de esta web prepara las instrucciones para una tarea propia',
    sub: 'Hace las cuatro preguntas y ayuda a elegir las normas y los datos. Al final deja el texto listo para pegarlo en un proyecto de Claude.',
    texto: 'Empezar por una tarea',
    href: '/ejemplos',
  },
};
