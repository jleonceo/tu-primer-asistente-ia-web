// ============================================================
// CONTENIDO "EL MÉTODO HONESTO" — fuente única de verdad.
// El diferencial frente al hype: lo que se cree que hace la IA frente a las
// conclusiones a las que hemos llegado, y por qué la honestidad va por delante.
// (No inflamos nada: contamos lo que hemos comprobado.)
// ============================================================

export const metodo = {
  meta: {
    title: 'El método honesto — Tu primer asistente de IA',
    description: 'Lo que se cree que hace la IA frente a las conclusiones a las que hemos llegado montándolo de verdad, y por qué la honestidad va por delante de quedar bien.',
  },

  hero: {
    k: 'El método honesto',
    titulo: 'Lo que se cree, y lo que hemos comprobado',
    lead: 'Con la IA se oye de todo: que lo hace todo sola, que sustituye a tu equipo, que basta un clic. Aquí preferimos contarte lo que hemos comprobado montándolo de verdad: un método de tres piezas que entiendes y un asistente que es tuyo desde el principio.',
  },

  contraste: {
    k: 'Frente al hype',
    titulo: 'Lo que se cree que hace la IA, y lo que hemos comprobado',
    filas: [
      { otros: '«La IA lo hace todo sola.»', nosotros: 'Lo montas tú, con nuestra guía. Por eso lo entiendes y lo controlas.' },
      { otros: '«Es un clic, sin esfuerzo.»', nosotros: 'Son tres piezas y un rato de trabajo. Ese rato es lo que hace que funcione.' },
      { otros: '«Reemplaza a tu equipo.»', nosotros: 'Te quita lo repetitivo de encima. Las decisiones siguen siendo tuyas.' },
      { otros: '«Nunca se equivoca.»', nosotros: 'Reduce errores, no los borra. Lo que importa, lo revisas tú.' },
      { otros: '«Tus datos, tú no te preocupes.»', nosotros: 'Te decimos por dónde pasan y qué no escribir nunca.' },
      { otros: '«Mira estas cifras espectaculares.»', nosotros: 'Las nuestras se pueden repetir y comprobar. Y si algo no lo hemos comprobado, lo decimos.' },
    ],
  },

  principios: {
    k: 'En qué nos apoyamos',
    titulo: 'Cuatro principios que seguimos',
    items: [
      { b: 'Lo montas tú, y lo entiendes', span: 'Nada de cajas negras. Cada paso en lenguaje normal, para que sepas qué hace y por qué.' },
      { b: 'Honestidad por encima de quedar bien', span: 'Si algo no va a funcionar, te lo decimos. Una falsa sensación de logro no ayuda a nadie.' },
      { b: 'Empiezas pequeño y creces', span: 'Una tarea hoy. El asistente completo, a tu ritmo. Nada de todo o nada.' },
      { b: 'Tú mandas, siempre', span: 'Cuanto más le delegas, más conviene revisar. La autonomía se gana con confianza, no de golpe.' },
    ],
  },

  honestidades: {
    titulo: 'Las dos cosas que no te ocultamos',
    items: [
      { b: 'Tu privacidad', span: 'Lo que escribes a Claude pasa por los servidores de Anthropic. No metas contraseñas ni datos muy sensibles. El texto que creas es tuyo y se queda contigo.' },
      { b: 'La fiabilidad', span: 'Un asistente ayuda mucho, pero a veces se equivoca. Lo que realmente importe —los números y las fechas— revísalo siempre tú.' },
    ],
  },

  // ============================================================
  // SECCIÓN-GUÍA: probar antes de confiar (simulaciones).
  // Explica, sin tecnicismos, por qué hay que probar un sistema de IA, qué es
  // una "respuesta de referencia" (golden), qué es la no-regresión, los niveles
  // de profundidad según el riesgo, y el marco: esto es una guía, lo puedes
  // construir tú con ayuda de la IA y lo que aportamos es criterio.
  // Sin cifras ni casos concretos: a nivel de guía.
  // ============================================================
  simulaciones: {
    k: 'Comprobar antes de confiar',
    titulo: 'Cómo se sabe que un asistente funciona de verdad',
    lead: 'Esto es para cuando quieras ir un paso más a fondo; si solo quieres crear tu primer asistente, puedes saltártelo. Que una respuesta parezca buena no quiere decir que el sistema funcione: antes de confiarle algo que importa, hay que probarlo de forma ordenada. Y es lo que más confianza da.',

    // 1) Por qué probar es imprescindible.
    porQue: {
      titulo: 'Por qué no basta con que "parezca que va bien"',
      texto: 'Le pides una cosa, contesta bien, y das por hecho que ya está. El problema es que has visto un caso, no cien. La pregunta de verdad es: ¿acierta también con el caso raro, con el que tiene truco, con el que no habías pensado? Eso no se sabe mirando una respuesta suelta; se sabe probándolo contra muchos casos a propósito.',
      analogia: 'Es como un coche nuevo: que arranque en el garaje no basta. Antes de fiarte, lo sacas a la carretera, a la cuesta, a la lluvia. Probar un asistente es eso: ponerlo en situaciones a ver si aguanta.',
    },

    // 2) La respuesta correcta de referencia (golden).
    referencia: {
      titulo: 'Una "respuesta correcta de referencia"',
      texto: 'La idea es sencilla: preparas unos cuantos casos y, para cada uno, anotas de antemano cuál sería la respuesta correcta. Eso es tu referencia, lo que tendría que salir. Luego le pasas esos mismos casos al asistente y comparas lo que hace con lo que debería hacer. Donde no coincide, ahí tienes algo que arreglar.',
      analogia: 'Es el examen con la hoja de respuestas al lado: primero apuntas las soluciones buenas, después corriges y ves dónde falla.',
    },

    // 3) La regresión (la puerta de no-regresión).
    regresion: {
      titulo: 'Cada arreglo, vuelve a probar lo que ya iba bien',
      texto: 'Aquí está la parte que se olvida. Cuando arreglas algo que fallaba, vuelves a pasar también los casos que YA estaban bien, para asegurarte de que el arreglo no ha roto nada por otro lado. A esa comprobación se le llama no dejar que haya "regresión": que no se vaya hacia atrás.',
      remate: 'La regla es dura y vale la pena recordarla: un arreglo que rompe otra cosa no es un arreglo.',
      // Voz "nuestra experiencia" (#4): aterriza la no-regresión con un caso real del propio proyecto.
      experiencia: 'al mejorar el equipo de contabilidad de este proyecto, más de una vez un cambio que parecía bueno estropeó algo que ya funcionaba. Si no llegamos a repasar los casos de antes, lo habríamos descubierto tarde y mal.',
    },

    // 4) Los niveles / profundidad de una simulación, según el riesgo.
    niveles: {
      titulo: 'Cuánto probar depende de lo que te juegas',
      intro: 'No todo necesita el mismo rigor. Lo eliges según el riesgo de lo que estás dejando en manos del asistente:',
      items: [
        { b: 'Una comprobación rápida', span: 'Pruebas un caso o dos a mano y ves si la cosa va por buen camino. Suficiente para algo sin consecuencias, como un texto que de todas formas vas a releer.' },
        { b: 'Una tanda de casos variados', span: 'Preparas unos cuantos casos distintos, incluido alguno con trampa, y los pasas todos. Para cuando ya delegas algo con cierta responsabilidad.' },
        { b: 'Una batería completa, comparada al detalle', span: 'Muchos casos, cada respuesta comparada con su referencia, y se repite con cada cambio. Esto es para lo serio: tocar una contabilidad real, datos de clientes, dinero.' },
      ],
      remate: 'No es lo mismo equivocarse en un borrador de texto que en un número de una contabilidad. A más riesgo, más a fondo lo pruebas.',
    },

    // 5) El marco: guía + lo puedes hacer tú + lo que aportamos es criterio.
    marco: {
      titulo: 'Esto es una guía, y lo puedes hacer tú',
      texto: 'Nada de esto necesita ser un experto. Puedes montar tus propias pruebas con ayuda de la misma IA: pídele que te ayude a preparar casos, a anotar la respuesta correcta de cada uno y a comparar. Lo que aportamos aquí no es el código, es el <b>criterio</b>: saber qué conviene probar, cómo y cuándo, y cuándo basta con poco y cuándo no.',
      remate: 'Probarlo es lo que te deja fiarte de verdad, sabiendo por qué.',
    },
  },

  cierre: {
    texto: 'Si te encaja esta forma de hacer las cosas, puedes empezar por una tarea pequeña cuando quieras.',
    cta: 'Empezar por una tarea →',
    href: '/ejemplos',
  },
};
