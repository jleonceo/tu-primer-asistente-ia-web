// ============================================================
// CONTENIDO DE LA WEB: fuente única de verdad (separado de la estructura).
// Editar los textos AQUÍ; las páginas .astro solo los colocan.
// 24/09/2026: reescrito con el registro de la guía de automatización del M6.
// Impersonal en las páginas que explican, tuteo solo en los pasos y el
// resultado, botones en infinitivo. Sin cifras usadas como reclamo.
// ============================================================

export const marca = {
  nombre: 'Tu primer asistente de ',
  nombreAcento: 'IA',
  titulo: 'Tu primer asistente de IA',
  descripcion:
    'Una guía para preparar las instrucciones que le dan a Claude una tarea, unas normas y los datos de quien lo usa. Con ellas no hace falta explicarle todo en cada conversación. Escrita en lenguaje normal, para quien no programa.',
};

export const nav = [
  { href: '/nivel-1', texto: 'Cómo funciona' },
  { href: '/glosario', texto: 'Conceptos clave' },
  { href: '/casos', texto: 'Casos' },
  { href: '/metodo', texto: 'El método' },
  { href: '/preguntas', texto: 'Preguntas' },
  { href: '/ejemplos', texto: 'Crear mi asistente', cta: true },
];

export const footer = {
  nav: [
    { href: '/', texto: 'Inicio' },
    { href: '/nivel-1', texto: 'Nivel 1 · Una skill' },
    { href: '/nivel-2', texto: 'Nivel 2 · Un equipo' },
    { href: '/nivel-3', texto: 'Nivel 3 · Un sistema' },
    { href: '/casos', texto: 'Casos' },
    { href: '/metodo', texto: 'El método' },
    { href: '/glosario', texto: 'Conceptos clave' },
    { href: '/evolucion', texto: 'Mejorarlo con el uso' },
    { href: '/preguntas', texto: 'Preguntas' },
    { href: '/acerca', texto: 'Qué es esto' },
  ],
  nota: 'Prototipo sin uso comercial. Proyecto independiente, sin relación con Anthropic.',
};

export const inicio = {
  hero: {
    kicker: 'Una guía paso a paso',
    titulo: 'Las instrucciones que convierten a Claude en <em>un asistente propio</em>',
    lead: 'Sin instrucciones guardadas, Claude no sabe qué tarea se le va a pedir, con qué tono ni con qué límites. Hay que explicárselo en cada conversación. Esta guía ayuda a escribir esas instrucciones <b>una sola vez</b> y a guardarlas en un proyecto de Claude, donde se aplican a todas las conversaciones.',
    aclara: 'Esta web no es la IA. Aquí se prepara el texto de las instrucciones. Al final se pega en una cuenta de Claude, que puede ser la gratuita. Es Claude quien lo usa.',
    cta: 'Crear un asistente',
    ctaHref: '/ejemplos',
    ctaSub: 'Cada paso queda guardado en el navegador',
    linkTexto: 'o ver antes cómo funciona',
    linkHref: '/nivel-1',
  },

  // PARA QUIÉN: nota breve para que el visitante sepa si le sirve.
  paraQuien: {
    si: 'Sirve a quien repite a menudo la misma tarea de escritura o de respuesta, no programa y quiere que Claude la haga con sus criterios sin tener que explicárselos cada día.',
    no: 'No sirve a quien busca que la tarea se haga sola, sin revisar el resultado, ni a quien necesita un sistema grande con un equipo técnico detrás.',
  },

  // DEMO con y sin instrucciones. Textos escritos a mano, no generados en directo.
  demo: {
    titulo: 'La misma tarea, con y sin instrucciones guardadas',
    sub: 'Al elegir una tarea, a la izquierda aparece la respuesta de una IA sin instrucciones y a la derecha la de un asistente que ya tiene guardada la forma de trabajar de quien lo usa.',
    nota: 'Las respuestas están escritas a mano para mostrar la diferencia. No las genera una IA en directo.',
    casos: [
      {
        etiqueta: 'Responder una reseña',
        orden: 'Un cliente deja una reseña de dos estrellas: «El pedido llegó tarde y la caja venía aplastada». Respóndele.',
        generico:
          'Estimado cliente, lamentamos los inconvenientes ocasionados. Hemos tomado nota de su incidencia y trabajaremos para mejorar nuestros servicios. Le agradecemos su comprensión y quedamos a su entera disposición.',
        tuyo:
          'Hola Marta, gracias por contárnoslo y perdona el estado del envío. Tienes razón, así no debería llegar. Te preparamos hoy mismo el reemplazo y lo tendrás en 48 horas. Lo de la caja ya se lo hemos trasladado a la empresa de transporte. Para cualquier cosa, escríbeme directamente.',
      },
      {
        etiqueta: 'Vender un producto',
        orden: 'Datos de una mochila: 22 litros, tela reciclada, bolsillo para portátil de 15", impermeable, 680 gramos. Hazme la descripción para la tienda.',
        generico:
          'Mochila de 22 litros fabricada en tela reciclada. Dispone de un bolsillo para portátil de 15 pulgadas. Es impermeable y pesa 680 gramos. Un producto versátil y de calidad para tu día a día.',
        tuyo:
          'Caben las cosas de todo el día y casi no se nota el peso: 680 gramos para 22 litros, con un bolsillo acolchado para un portátil de hasta 15". La tela es reciclada e impermeable, así que la lluvia de camino a la oficina no la atraviesa. Pensada para quien quiere llevarlo todo encima sin cargar la espalda.',
      },
      {
        etiqueta: 'Explicar algo difícil',
        orden: 'Explícame qué es la prorrata del IVA como si no tuviera ni idea de contabilidad.',
        generico:
          'La prorrata del IVA es el mecanismo mediante el cual se determina el porcentaje del IVA soportado que resulta deducible cuando un sujeto pasivo realiza simultáneamente operaciones que generan derecho a deducción y otras que no, aplicando la regla general o especial según corresponda.',
        tuyo:
          'Cuando compras algo para tu negocio pagas IVA. Si todo lo que vendes lleva IVA, puedes descontarte todo ese IVA. Si una parte de tus ventas está exenta, como algunos seguros o ciertas clases, Hacienda solo te deja descontar la parte proporcional. La prorrata es ese porcentaje: la parte del IVA pagado que recuperas.',
      },
    ],
  },

  // TRES IDEAS: la versión breve. El detalle vive en /metodo.
  credo: {
    titulo: 'Las tres ideas en las que se basa la guía',
    sub: 'Aquí van resumidas. La página del método las explica con más detalle.',
    puntos: [
      {
        t: 'No hace falta saber programar.',
        d: 'Hace falta saber qué tarea se quiere encargar y cómo tiene que quedar el resultado. Eso lo sabe quien hace la tarea cada día.',
      },
      {
        t: 'Se escribe una vez y queda guardado.',
        d: 'Las instrucciones se guardan en un proyecto de Claude y se aplican a todas las conversaciones que se abren dentro de él.',
      },
      {
        t: 'Quien lo monta sabe arreglarlo.',
        d: 'Quien ha escrito sus instrucciones sabe qué cambiar cuando el asistente falla. Si otra persona lo monta entero, cada arreglo depende de ella.',
      },
    ],
    remate: 'En qué se basan estas ideas, qué riesgos de privacidad hay y qué errores comete un asistente se explica en',
    remateEnlace: { texto: 'el método', href: '/metodo' },
  },

  // RECORRIDO: los tres niveles, como índice de la guía.
  ascenso: {
    titulo: 'Tres niveles: una tarea, un equipo y un sistema',
    sub: 'La guía empieza por una sola tarea, que es el nivel 1. Los niveles 2 y 3 explican cómo se combinan varias skills cuando una sola no basta. Para empezar solo hace falta el primero.',
    niveles: [
      {
        n: '1',
        nombre: 'Una skill',
        titulo: 'El primer asistente',
        d: 'Una tarea con sus normas y los datos de quien la usa. Es el punto de partida.',
        prueba: 'Por aquí se empieza.',
        href: '/nivel-1',
      },
      {
        n: '2',
        nombre: 'Un equipo',
        titulo: 'Varias skills que trabajan juntas',
        d: 'Un coordinador reparte el trabajo entre especialistas y un verificador lo revisa antes de darlo por bueno.',
        prueba: 'Para tareas con varios pasos distintos.',
        href: '/nivel-2',
      },
      {
        n: '3',
        nombre: 'Un sistema',
        titulo: 'Un equipo de equipos',
        d: 'Un director central lee cada encargo y lo envía al equipo que corresponde.',
        prueba: 'Para cuando ya hay varios equipos.',
        href: '/nivel-3',
      },
    ],
  },

  // DE DÓNDE SALE: el origen de los ejemplos, sin cifras de reclamo.
  contexto: {
    titulo: 'De dónde sale lo que cuenta esta guía',
    sub: 'Lo que se explica aquí sale de montar estos asistentes y equipos sobre la contabilidad de una empresa simulada. Los datos son ficticios, pero el sistema contable funciona y cada cifra tiene que cuadrar. Es la experiencia de quien lo ha montado, no una garantía que se pueda comprobar desde esta web.',
    puntos: [
      'Las cifras que importan, como un importe o una fecha, las comprueba un programa. No se dan por buenas porque lo diga la IA.',
      'Un segundo revisor busca los errores del primero antes de cerrar una tarea.',
      'Lo que no se ha podido comprobar se declara como no comprobado.',
    ],
    nota: 'Sirve para valorar si el método encaja con lo que se necesita. Cómo se comprueba que un asistente funciona se explica en la página del método.',
  },

  cierre: {
    titulo: 'Por dónde empezar',
    sub: 'La primera versión es un borrador que ya funciona y mejora con el uso. Los niveles 2 y 3 se construyen después, encima de ella.',
    cta: 'Crear un asistente',
    ctaHref: '/ejemplos',
  },
};
