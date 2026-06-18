// ============================================================
// CONTENIDO DE LA WEB — fuente única de verdad (separado de la estructura).
// Editar los textos AQUÍ; las páginas .astro solo los colocan.
// web_nueva v3: home como GUÍA (no como landing de venta). Manifiesto que
// explica desde dónde se habla, demo "antes/después" con ejemplos reales,
// recorrido por los 3 niveles y una nota honesta sobre dónde se usa esto.
// Voz peninsular, directa, sin tics de IA (ni raya como conector, ni
// "no es X sino Y" en cadena, ni "de verdad/sin humo" repetido).
// 18/06: se quita el tono vendedor. Es una guía que informa y enseña, no
// empuja a convertir. Se retiran las cifras usadas como gancho de venta.
// ============================================================

export const marca = {
  nombre: 'Tu primer asistente de ',
  nombreAcento: 'IA',
  titulo: 'Tu primer asistente de IA',
  descripcion:
    'Una guía para aprender a darle a la IA tu forma de trabajar y tu memoria, para que deje de ser genérica. Con ejemplos reales y lenguaje claro, pensada para quien no programa.',
};

export const nav = [
  { href: '/nivel-1', texto: 'Cómo funciona' },
  { href: '/glosario', texto: 'Conceptos clave' },
  { href: '/casos', texto: 'Casos reales' },
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
    { href: '/casos', texto: 'Casos reales' },
    { href: '/metodo', texto: 'El método' },
    { href: '/glosario', texto: 'Conceptos clave' },
    { href: '/evolucion', texto: 'Mejorarlo con el uso' },
    { href: '/preguntas', texto: 'Preguntas' },
    { href: '/acerca', texto: 'Qué es esto' },
  ],
  nota: 'Prototipo de prueba, sin uso comercial. Proyecto independiente, no afiliado a Anthropic.',
};

export const inicio = {
  hero: {
    kicker: 'Una guía paso a paso',
    titulo: 'Una IA que <em>te conoce</em> y mañana no te olvida',
    lead: 'Hoy se lo explicas todo en cada conversación, y al día siguiente vuelve a ser una desconocida. Esta guía te ayuda a darle <b>tu forma de trabajar y tu memoria</b> una sola vez, para que se quede.',
    aclara: 'Para que quede claro: esta web no es la IA. Aquí preparas las instrucciones de tu asistente y, al final, las pegas en tu cuenta gratuita de Claude, que es quien las usa.',
    cta: 'Crea tu primer asistente',
    ctaHref: '/ejemplos',
    ctaSub: 'A tu ritmo',
    linkTexto: 'o entiende primero cómo funciona',
    linkHref: '/nivel-1',
  },

  // PARA QUIÉN: nota breve y honesta para que el visitante se identifique
  // sin tener que deducirlo. Nombra al público; no vende.
  paraQuien: {
    si: 'Es para ti si haces una y otra vez la misma tarea de escritura o de contestación, no programas, y quieres que la IA se adapte a tu forma en vez de empezar de cero cada día.',
    no: 'No es para ti si buscas un botón que lo haga todo solo, o si necesitas montar algo a gran escala con un equipo técnico detrás.',
  },

  // DEMO antes/después. La diferencia se ve mejor de lo que se cuenta.
  // Honestidad: son respuestas reales de ejemplo, no una IA llamada en vivo.
  demo: {
    titulo: 'La misma tarea, antes y después',
    sub: 'Elige una tarea. A la izquierda responde una IA que te acaba de conocer. A la derecha, la misma tarea con tu forma de trabajar ya guardada.',
    nota: 'Son respuestas reales de ejemplo, escritas a mano para enseñar la diferencia. No es una IA llamada en directo.',
    casos: [
      {
        etiqueta: 'Responder una reseña',
        orden: 'Un cliente deja una reseña de dos estrellas: «El pedido llegó tarde y la caja venía aplastada». Respóndele.',
        generico:
          'Estimado cliente, lamentamos los inconvenientes ocasionados. Hemos tomado nota de su incidencia y trabajaremos para mejorar nuestros servicios. Le agradecemos su comprensión y quedamos a su entera disposición.',
        tuyo:
          'Hola Marta, gracias por contárnoslo, y perdona el destrozo del envío. Tienes toda la razón: así no debería llegar. Te he preparado el reemplazo, sale hoy y lo tienes en 48 horas. Lo de la caja se lo digo ya a la empresa de transporte. Cualquier cosa, me escribes a mí directamente.',
      },
      {
        etiqueta: 'Vender un producto',
        orden: 'Datos de una mochila: 22 litros, tela reciclada, bolsillo para portátil de 15", impermeable, 680 gramos. Hazme la descripción para la tienda.',
        generico:
          'Mochila de 22 litros fabricada en tela reciclada. Dispone de un bolsillo para portátil de 15 pulgadas. Es impermeable y pesa 680 gramos. Un producto versátil y de calidad para tu día a día.',
        tuyo:
          'Te cabe el día entero y casi no la notas: 680 gramos para 22 litros, con un bolsillo acolchado donde el portátil de 15" viaja sin sustos. La tela es reciclada y aguanta el chaparrón de camino a la oficina. Para quien va ligero pero lo lleva todo.',
      },
      {
        etiqueta: 'Explicar algo difícil',
        orden: 'Explícame qué es la prorrata del IVA como si no tuviera ni idea de contabilidad.',
        generico:
          'La prorrata del IVA es el mecanismo mediante el cual se determina el porcentaje del IVA soportado que resulta deducible cuando un sujeto pasivo realiza simultáneamente operaciones que generan derecho a deducción y otras que no, aplicando la regla general o especial según corresponda.',
        tuyo:
          'Cuando compras cosas para tu negocio pagas IVA. Si todo lo que vendes lleva IVA, te lo puedes descontar entero. Pero si una parte de lo que vendes está exenta (algunos seguros, ciertas clases), Hacienda dice: «solo te descuentas la parte proporcional». La prorrata es ese porcentaje, qué parte del IVA que pagaste recuperas.',
      },
    ],
  },

  // MANIFIESTO: en qué creemos. Toma partido, habla al miedo del no-técnico.
  // (Versión breve: el detalle de los principios y los avisos vive en /metodo,
  //  para no repetir lo mismo en portada, método y acerca.)
  credo: {
    titulo: 'Cómo lo vemos',
    sub: 'Cómo pensamos, en pocas palabras.',
    puntos: [
      {
        t: 'No necesitas saber programar.',
        d: 'Necesitas saber qué quieres que haga. Y eso lo sabes tú.',
      },
      {
        t: 'Lo escribes una vez y se queda.',
        d: 'Tu manera de trabajar no se repite en cada chat: se guarda una vez y la IA la lee siempre que abres una conversación.',
      },
      {
        t: 'Lo montas tú, y por eso lo entiendes.',
        d: 'Cuando entiendes cómo está hecho, lo arreglas y lo mejoras solo. Si te lo hacen entero, dependes para siempre de quien te lo hizo.',
      },
    ],
    remate: 'En qué nos apoyamos para decir esto (y lo que no te ocultamos sobre privacidad y errores) lo contamos entero en',
    remateEnlace: { texto: 'el método', href: '/metodo' },
  },

  // RECORRIDO: los 3 niveles como peldaños de una misma pirámide.
  // (Antes "ascenso" con cifras de prueba social; ahora describe cada nivel
  //  de forma neutra, como un índice de la guía.)
  ascenso: {
    titulo: 'El recorrido: de tu primera tarea a un sistema',
    sub: 'Se empieza con una sola tarea. Lo que aprendes ahí es el primer peldaño de algo bastante más grande. Aquí están los tres niveles explicados, aunque al principio solo necesites el de abajo.',
    niveles: [
      {
        n: '1',
        nombre: 'Una skill',
        titulo: 'Tu primer asistente',
        d: 'Una "skill" no es más que esto: una tarea, con sus normas y su memoria. Es por donde se empieza.',
        prueba: 'El peldaño de partida.',
        href: '/nivel-1',
      },
      {
        n: '2',
        nombre: 'Un equipo',
        titulo: 'Varias skills que trabajan juntas',
        d: 'Un coordinador que reparte el trabajo entre especialistas, y un verificador que lo comprueba antes de dar nada por bueno.',
        prueba: 'Cuando una skill sola se queda corta.',
        href: '/nivel-2',
      },
      {
        n: '3',
        nombre: 'Un sistema',
        titulo: 'Un equipo de equipos',
        d: 'Un director central que escucha lo que pides y manda el encargo al equipo correcto. La punta de la pirámide.',
        prueba: 'La forma que toma cuando ya hay varios equipos.',
        href: '/nivel-3',
      },
    ],
  },

  // DE DÓNDE SALE ESTO: nota honesta sobre el origen de los ejemplos.
  // (Antes "prueba viva" con cifras como gancho de venta y sin cotejar con la
  //  fuente. Ahora explica el contexto sin presentar números como reclamo.)
  contexto: {
    titulo: 'De dónde sale lo que aquí se cuenta',
    sub: 'Esta guía no es teoría suelta: viene de usar estos asistentes y equipos en un caso real, la contabilidad de una empresa, donde un número mal puesto trae consecuencias de verdad. Es nuestra experiencia montándolo, no una garantía que puedas comprobar desde aquí.',
    puntos: [
      'Lo que de verdad importa (un importe, una fecha, un dato) se comprueba con un programa, no se da por bueno porque lo diga la IA.',
      'Un segundo revisor busca el fallo del primero antes de dar nada por cerrado.',
      'Y si algo no se ha podido comprobar, se dice claramente en lugar de adornarlo.',
    ],
    nota: 'Lo contamos porque puede serte útil para valorar si un método así encaja con lo que necesitas. Si quieres ver cómo se comprueba que un sistema así funciona, lo explicamos en el método.',
  },

  cierre: {
    titulo: 'Por dónde empezar',
    sub: 'La primera versión es un borrador: funciona desde el primer día y se mejora con el uso. Lo demás se construye encima, a tu ritmo.',
    cta: 'Crea tu primer asistente',
    ctaHref: '/ejemplos',
  },
};
