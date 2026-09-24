// ============================================================
// CONTENIDO "EL MÉTODO": fuente única de verdad.
// Lo que se suele creer que hace la IA frente a lo comprobado al montar el
// sistema, los principios de la guía y cómo se prueba un asistente.
// 24/09/2026: revisada desde lo que el lector necesita entender (títulos, causas, antítesis y remates).
// 24/09/2026: reescrito con el registro de la guía de estilo del proyecto. Deja de llamarse
// «el método honesto»: la honestidad se demuestra en el contenido, no en el
// título.
// ============================================================

export const metodo = {
  meta: {
    title: 'El método · Tu primer asistente de IA',
    description: 'Qué se suele creer que hace la IA y qué se ha comprobado al montar el sistema, los cuatro principios de la guía y cómo se prueba que un asistente funciona.',
  },

  hero: {
    k: 'El método',
    titulo: 'Lo que se suele creer de la IA y lo que se ha comprobado al usarla',
    lead: 'De la IA se oye que lo hace todo sola, que sustituye a un equipo o que basta un clic. Esta página recoge lo que se ha comprobado al montar asistentes para un sistema contable: el método de tres partes, en qué principios se basa y cómo se prueba que un asistente funciona antes de confiar en él.',
  },

  contraste: {
    k: 'Frente a las promesas',
    titulo: 'Seis ideas frecuentes sobre la IA, contrastadas',
    filas: [
      { otros: '«La IA lo hace todo sola.»', nosotros: 'El asistente lo monta quien lo va a usar, siguiendo esta guía. Por eso sabe qué hace y cómo corregirlo.' },
      { otros: '«Es un clic, sin esfuerzo.»', nosotros: 'Son tres partes y un rato de trabajo. De ese rato depende que las respuestas se ajusten a la tarea.' },
      { otros: '«Sustituye a un equipo.»', nosotros: 'Quita trabajo repetitivo. Las decisiones siguen siendo de las personas.' },
      { otros: '«Nunca se equivoca.»', nosotros: 'Comete menos errores con buenas instrucciones, pero sigue cometiéndolos. Lo que importa lo revisa una persona.' },
      { otros: '«Con los datos no hay de qué preocuparse.»', nosotros: 'La guía explica por dónde pasan los datos y qué no conviene escribir nunca.' },
      { otros: '«Mira estas cifras espectaculares.»', nosotros: 'Las cifras de este proyecto se pueden repetir y comprobar. Lo que no se ha comprobado se declara como no comprobado.' },
    ],
  },

  principios: {
    k: 'Los principios',
    titulo: 'Los cuatro principios de la guía',
    items: [
      { b: 'Quien lo monta sabe cómo funciona', span: 'Cada paso se explica en lenguaje normal, de modo que se sabe qué hace cada instrucción y por qué está ahí.' },
      { b: 'Decir lo que no funciona', span: 'Si algo no va a funcionar, la guía lo dice. Una sensación falsa de que todo va bien retrasa la corrección.' },
      { b: 'Empezar con poco y ampliar', span: 'Primero una tarea. Las normas y la memoria se completan con el uso, sin necesidad de tenerlo todo el primer día.' },
      { b: 'Las decisiones son de la persona', span: 'Cuanto más trabajo se delega en el asistente, más conviene revisar lo que hace. La autonomía se amplía poco a poco, a medida que se comprueba que responde bien.' },
    ],
  },

  honestidades: {
    titulo: 'Los dos riesgos que hay que conocer',
    items: [
      { b: 'La privacidad', span: 'Lo que se escribe a Claude pasa por los servidores de Anthropic, así que no conviene incluir contraseñas ni datos sensibles. El texto de las instrucciones pertenece a quien lo escribe y se puede guardar en un archivo propio.' },
      { b: 'La fiabilidad', span: 'Un asistente se equivoca a veces. Las cifras y las fechas que importan tiene que revisarlas siempre una persona.' },
    ],
  },

  // ============================================================
  // SECCIÓN-GUÍA: probar antes de confiar (simulaciones).
  // Por qué hay que probar un asistente, qué es una respuesta de referencia
  // (golden), qué es la no-regresión, cuánto probar según el riesgo y el marco:
  // cualquiera puede montar sus pruebas con ayuda de la propia IA.
  // Sin cifras ni casos concretos: a nivel de guía.
  // ============================================================
  simulaciones: {
    k: 'Comprobar antes de confiar',
    titulo: 'Un asistente se prueba con muchos casos antes de confiarle algo importante',
    lead: 'Esta parte es para quien quiera ir más allá de su primer asistente y se puede saltar. Una respuesta que parece buena no demuestra que el asistente funcione. Antes de confiarle algo que importa hay que probarlo de forma ordenada, porque solo así se sabe en qué casos acierta y en cuáles falla.',

    // 1) Por qué probar es imprescindible.
    porQue: {
      titulo: 'Una respuesta correcta no demuestra que el asistente funcione',
      texto: 'Una respuesta correcta a una pregunta demuestra que el asistente acierta en ese caso. No dice nada de los casos poco habituales, de los que tienen alguna trampa ni de los que no se habían previsto. Eso solo se sabe probándolo con muchos casos elegidos a propósito.',
      analogia: 'Con un coche nuevo pasa lo mismo: que arranque en el garaje no basta. Antes de fiarse de él hay que probarlo en carretera, en cuesta y con lluvia.',
    },

    // 2) La respuesta correcta de referencia (golden).
    referencia: {
      titulo: 'La respuesta de referencia: lo que tendría que salir en cada caso',
      texto: 'Se preparan varios casos y, para cada uno, se anota de antemano la respuesta correcta. Esa es la referencia. Después se le pasan los mismos casos al asistente y se compara lo que responde con lo anotado. Cada caso en el que no coinciden señala algo que hay que corregir.',
      analogia: 'Funciona como corregir un examen con la hoja de soluciones: primero se escriben las respuestas buenas y después se comprueba dónde falla.',
    },

    // 3) La regresión (la puerta de no-regresión).
    regresion: {
      titulo: 'Después de cada arreglo se repiten también los casos que ya funcionaban',
      texto: 'Es la comprobación que más se olvida. Al corregir algo que fallaba, se vuelven a pasar también los casos que ya estaban bien, para confirmar que el cambio no ha estropeado nada en otra parte. Un empeoramiento de lo que ya funcionaba se llama regresión.',
      remate: 'Por eso un arreglo solo se da por bueno cuando los casos anteriores siguen saliendo bien.',
      experiencia: 'más de una vez, al mejorar el enjambre de contabilidad de este proyecto, un cambio que parecía correcto estropeó algo que ya funcionaba. Se detectó porque se repitieron los casos anteriores. Sin esa repetición, el error habría aparecido más tarde y habría costado más localizarlo.',
    },

    // 4) Los niveles / profundidad de una simulación, según el riesgo.
    niveles: {
      titulo: 'Cuánto se prueba depende de lo que está en juego',
      intro: 'No todas las tareas necesitan el mismo rigor. El nivel se elige según el riesgo de lo que se deja en manos del asistente:',
      items: [
        { b: 'Una comprobación rápida', span: 'Se prueban uno o dos casos a mano para ver si las respuestas van bien encaminadas. Basta para algo sin consecuencias, como un texto que se va a releer de todas formas.' },
        { b: 'Una tanda de casos variados', span: 'Se preparan varios casos distintos, alguno con trampa. Después se pasan todos. Sirve cuando el asistente ya hace algo con cierta responsabilidad.' },
        { b: 'Una batería completa', span: 'Muchos casos, cada respuesta comparada con su referencia, repetidos con cada cambio. Es lo necesario cuando el asistente toca una contabilidad, datos de clientes o dinero.' },
      ],
      remate: 'Un error en un borrador de texto se corrige al releerlo. Un error en una cifra contable puede llegar a un informe. Por eso se prueba más a fondo.',
    },

    // 5) El marco: cualquiera puede montar sus pruebas; la guía aporta el criterio.
    marco: {
      titulo: 'Las pruebas se pueden montar con ayuda de la propia IA',
      texto: 'No hace falta ser experto para montar estas pruebas. Se le puede pedir a la propia IA que ayude a preparar los casos, a anotar la respuesta correcta de cada uno y a comparar los resultados. Lo que aporta esta guía es el <b>criterio</b>: qué conviene probar, cómo, cuándo basta con poco y cuándo hace falta más.',
      remate: 'Para empezar, al terminar el recorrido la web propone tres pruebas montadas con las respuestas de cada persona.',
    },
  },

  cierre: {
    texto: 'Para aplicar el método, lo más sencillo es empezar por una tarea pequeña.',
    cta: 'Empezar por una tarea →',
    href: '/ejemplos',
  },
};
