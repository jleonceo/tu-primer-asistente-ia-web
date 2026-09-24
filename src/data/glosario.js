// ============================================================
// CONTENIDO DE LA PÁGINA GLOSARIO: fuente única de verdad.
// Dos capas: (1) las cuatro palabras que más se confunden (prompt → skill →
// asistente → agente), de menos a más; (2) "más palabras", para quien quiera
// el vocabulario de los niveles 2 y 3, cada una con una comparación.
// 24/09/2026: revisada desde lo que el lector necesita entender (títulos, causas, antítesis y remates).
// 24/09/2026: reescrito con el registro de la guía de estilo del proyecto. Skill y CLAUDE.md
// contrastados con la documentación oficial; el modelo, sin nombres ni
// número de tallas, porque cambian cada pocos meses.
// ============================================================

export const glosario = {

  intro: {
    k: 'Cuatro palabras',
    titulo: 'Las cuatro palabras que más se confunden, de menos a más',
    sub: 'No hace falta aprenderlas de memoria, pero entenderlas <b>una vez</b> facilita el resto de la guía. Cada una incluye a la anterior.',
  },

  terminos: [
    {
      num: 1,
      palabra: 'Prompt',
      corto: 'Lo que se le escribe a la IA en el momento',
      texto: 'La pregunta o el encargo que se escribe en una conversación. Es la forma más básica de usar una IA. Su limitación es que lo que no se guarda en unas instrucciones hay que volver a explicarlo en la conversación siguiente.',
      frase: 'Vale para esa conversación.',
    },
    {
      num: 2,
      palabra: 'Skill',
      corto: 'Una tarea escrita una vez, con sus instrucciones',
      texto: 'Unas instrucciones para una tarea concreta que se escriben <b>una sola vez</b> y quedan guardadas. En Claude, una skill en sentido estricto es un archivo llamado SKILL.md, con un nombre y una descripción, que Claude carga solo cuando la tarea encaja con esa descripción. Esta guía prepara el mismo contenido para pegarlo en las instrucciones de un proyecto, donde se aplica a todas sus conversaciones. Al terminar, también lo descarga como skill, en un .zip listo para subir.',
      frase: 'Se explica una vez y sirve para todas las conversaciones.',
    },
    {
      num: 3,
      palabra: 'Asistente',
      corto: 'Una o varias skills con sus normas y su memoria',
      texto: 'Cuando a una o varias skills se les añaden <b>las normas</b> (cómo tiene que actuar siempre) y <b>la memoria</b> (los datos de quien lo usa), el resultado es un asistente propio. Responde siguiendo el criterio de quien escribió sus instrucciones.',
      frase: 'Responde según las instrucciones que se le dieron.',
    },
    {
      num: 4,
      palabra: 'Agente',
      corto: 'Un asistente que da varios pasos seguidos dentro de unos límites',
      texto: 'Un asistente responde a cada petición. Un agente, además, <b>encadena varios pasos por su cuenta</b>: usa herramientas, busca información y avanza hasta terminar la tarea. <b>Lo que puede hacer y lo que no</b> lo fijan sus instrucciones y los permisos que se le dan. Por eso, cuanta más autonomía tiene, más importa que esos límites estén claros y que una persona revise lo que hace.',
      frase: 'Da varios pasos seguidos, solo los que se le permiten.',
    },
  ],

  // Segunda capa: el vocabulario de los niveles 2 y 3.
  mas: {
    titulo: 'Más palabras, para los niveles 2 y 3',
    sub: 'Aparecen al hablar de enjambres de skills. No hacen falta para empezar.',
    items: [
      { palabra: 'Markdown (.md)', def: 'Un archivo de texto normal con unas marcas sencillas para dar formato: una almohadilla (#) delante de un título, guiones para las listas y asteriscos para la negrita. Su extensión es .md. Se usa para escribir instrucciones porque los modelos lo leen sin problemas y se abre con cualquier editor de texto.', analogia: 'Se parece a una nota escrita a mano con guiones y subrayados: se entiende de un vistazo y no necesita ningún programa especial.' },
      { palabra: 'CLAUDE.md', def: 'El archivo de instrucciones generales que Claude Code, la herramienta de Claude para el ordenador, lee al empezar a trabajar en una carpeta. Recoge las normas que se aplican a cualquier tarea en ella. En claude.ai no se usa: su equivalente son las instrucciones del proyecto.', analogia: 'Funciona como las normas de un puesto de trabajo que se leen el primer día.' },
      { palabra: 'Memoria', def: 'Los datos de quien usa el asistente que no hace falta repetir. Pueden estar escritos en las instrucciones, donde solo cambian cuando se editan, o en la memoria automática de Claude, que guarda información de las conversaciones y se puede revisar y corregir desde la configuración.', analogia: 'Se parece a una ficha con los datos de un cliente: quien la lee ya sabe con quién trata.' },
      { palabra: 'Modelo', def: 'El motor que interpreta lo que se escribe y genera la respuesta. Hay varios, de los más potentes a los más rápidos. Anthropic publica versiones nuevas cada cierto tiempo. Unas instrucciones bien escritas siguen sirviendo cuando cambia el modelo.', analogia: 'Se parece a los motores de un fabricante de coches: hay varios tamaños y cada pocos años sale una versión nueva.' },
      { palabra: 'Arnés (en inglés, «harness»)', def: 'Todo lo que rodea al modelo para que haga bien una tarea: las skills, las normas, la memoria, el encargo bien escrito y la forma de usarlo. Con el mismo modelo, un buen arnés cambia mucho la calidad de las respuestas. Es lo que se monta en esta guía, aunque no se le dé ese nombre.', analogia: 'Un motor suelto no mueve un coche: hacen falta chasis, dirección, frenos y alguien que conduzca. El arnés es todo eso y el modelo es el motor.' },
      { palabra: 'Entrenar (no es lo que se hace aquí)', def: 'Mejorar un asistente no consiste en entrenar la IA. El modelo no cambia. Lo que cambia son las instrucciones que lee en cada conversación. Por eso una mejora se nota al momento y se puede deshacer cuando se quiera.', analogia: 'Se parece más a corregir la hoja de instrucciones de un puesto que a formar a un empleado durante meses.' },
      { palabra: 'Orquestador', def: 'La skill que recibe un encargo y lo envía a la skill o al enjambre que corresponde. Reparte el trabajo sin hacerlo. Dentro de un enjambre se le llama coordinador, y el que reparte entre enjambres es el orquestador maestro.', analogia: 'Hace lo mismo que la centralita de una clínica, que pasa cada llamada a la consulta que corresponde.' },
      { palabra: 'Enjambre', def: 'Un grupo de skills encadenadas que resuelven juntas una tarea con varios pasos distintos. Es el nivel 2 de esta guía.', analogia: 'Funciona como una cadena de montaje: cada puesto hace su parte y al final sale el producto terminado.' },
      { palabra: 'Enjambre de enjambres', def: 'El conjunto de los enjambres de una empresa, uno para cada área, con una skill que lee cada encargo y lo envía al enjambre que corresponde. Es el nivel 3 de esta guía.', analogia: 'Funciona como una empresa con varios departamentos y una recepción que pasa cada asunto al departamento que lo lleva.' },
      { palabra: 'Verificador independiente', def: 'Un agente cuyo único trabajo es buscar errores en lo que ha hecho otro, antes de que nadie actúe sobre ese resultado. No ha participado en hacerlo.', analogia: 'Hace lo mismo que el corrector de un periódico, que revisa un artículo que no ha escrito.' },
      { palabra: 'Verificación por código', def: 'Una comprobación que hace un programa y no la IA. Da siempre el mismo resultado: la cifra cuadra o no cuadra.', analogia: 'Se parece a una báscula, que pesa en vez de calcular a ojo.' },
      { palabra: 'Contexto', def: 'Todo lo que el modelo tiene delante en una conversación: las instrucciones, los mensajes y los archivos. Tiene un tamaño máximo. En conversaciones muy largas lo más antiguo se resume o se tiene menos en cuenta.', analogia: 'Se parece a lo que se recuerda de una reunión larga: lo de los últimos minutos está claro y lo del principio, menos.' },
    ],
  },

  cierre: {
    negrita: 'La guía empieza por la base, que es una skill.',
    texto: ' El asistente completo y los enjambres se construyen después, encima de ella. Para empezar no hace falta entender todo lo anterior.',
  },

  cta: {
    texto: 'Empezar por una skill →',
    sub: 'El primer paso es una sola tarea.',
    href: '/ejemplos',
  },

};
