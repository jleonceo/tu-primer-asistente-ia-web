// Nivel 3 — Un sistema (un "enjambre de enjambres"). Con profundidad real:
// el director central, la taxonomía de 3 tipos con ejemplos del ecosistema,
// el routing (carga perezosa + nota de relevo), un recorrido de ejemplo y la
// pirámide. Material verificado: Registro_Enjambres_TechAcces (39 piezas, 3
// tipos), conexion-enjambres-puntero, arquitectura-piramide, flujo del enjambre
// contable (extractor → generador → validador → borrador → persona).
export const nivel3 = {
  meta: {
    title: 'Nivel 3 · Un sistema — Tu primer asistente de IA',
    description: 'Un equipo de equipos, con un director central que enruta cada encargo al equipo correcto. La punta de la pirámide, explicada con ejemplos reales.',
  },
  n: '3',
  nombre: 'Un sistema',
  titulo: 'Un equipo de equipos, con un director',
  lead: 'Cuando ya no tienes un equipo sino varios, hace falta alguien que escuche lo que pides y decida cuál se ocupa. Ese es el nivel 3: la punta de la pirámide. Al empezar no lo necesitas, pero conviene saber que existe y hacia dónde lleva todo esto.',
  bloques: [
    {
      tipo: 'intro',
      titulo: 'El director que reparte el trabajo',
      parrafos: [
        'En el nivel 2, cada equipo tiene su coordinador. En el nivel 3 hay uno por encima de todos: un <b>director central</b> que es lo primero que entra cuando pides algo.',
        'Su papel es escuchar el encargo, decidir qué equipo encaja y pasárselo solo a ese. Así no tienes a toda la plantilla metida en la sala a la vez: llamas al especialista cuando toca y el resto ni se entera.',
        'En el sistema que enseñamos, ese director coordina hoy <b>decenas de piezas</b> repartidas en equipos. Cada vez que pides algo, lo primero que ocurre es que él lee tu encargo y elige a quién pasárselo.',
      ],
    },
    {
      tipo: 'taxonomia',
      titulo: 'Tres tipos de equipo, y cómo los distingue',
      intro: 'Para repartir bien, el director clasifica cada equipo por su papel. No es teoría: son los tres tipos reales del sistema.',
      items: [
        { tipo: 'De proyecto', ejemplos: 'contabilidad · análisis de datos · marketing', texto: 'Llevan una iniciativa de principio a fin y tienen su propio contexto de negocio. El de contabilidad sabe de facturas y cuadre; el de marketing, de copy y campañas. No se pisan.' },
        { tipo: 'De apoyo', ejemplos: 'programación · automatizaciones · verificadores', texto: 'Ayudantes transversales. No son de ningún proyecto en concreto: se llaman cuando hacen falta, para cualquier iniciativa. Un verificador comprueba lo mismo da igual quién lo pida.' },
        { tipo: 'De herramienta', ejemplos: 'abrir un PDF, un Word, un PowerPoint', texto: 'Una herramienta suelta para una cosa concreta, sin coordinador ni contexto. Se usa y se cierra. El director la llama directamente, sin montar un equipo entero alrededor.' },
      ],
    },
    {
      tipo: 'destacado',
      titulo: 'Por qué hay un director y no se llaman entre ellos',
      texto: 'Los equipos no se llaman unos a otros a lo loco. Hay una regla de diseño dura: <b>un ayudante no puede crear otro ayudante</b>. Si cada uno pudiera invocar a los demás, acabarías con una cadena imposible de seguir y de auditar. Por eso siempre reparte el director: es el único punto por el que entra y sale el trabajo.',
    },
    {
      tipo: 'flujo',
      titulo: 'Un encargo de principio a fin: «contabilízame esta factura»',
      intro: 'Así viaja un encargo real por el sistema. Fíjate en que el director aparece al principio y que la persona decide al final:',
      pasos: [
        { nombre: 'Tú pides algo', texto: '«Contabilízame esta factura.» El director central lo recibe primero.' },
        { nombre: 'El director enruta', texto: 'Reconoce que es contabilidad y se lo pasa al equipo de contabilidad, solo a ese. Los demás equipos ni se cargan.' },
        { nombre: 'El equipo trabaja por dentro', texto: 'Dentro de ese equipo, un especialista lee la factura, otro monta el apunte y un tercero comprueba que cuadra al céntimo.' },
        { nombre: 'Queda en borrador', texto: 'El resultado espera, sin tocar la base de datos real todavía.' },
        { nombre: 'Tú apruebas', texto: 'Lo revisas. Solo cuando das el visto bueno entra en la contabilidad real. Lo irreversible no lo decide la máquina.' },
      ],
      cierre: 'El director repartió, el equipo propuso y la persona aprobó. Cada uno en su sitio.',
    },
    {
      tipo: 'intro',
      titulo: 'Carga perezosa: nadie entra hasta que se le necesita',
      parrafos: [
        'Una pieza clave: los equipos <b>no están todos despiertos a la vez</b>. El director carga solo el que va a usar, justo cuando lo va a usar. Es lo que se llama carga perezosa, y es lo que mantiene el sistema ligero por mucho que crezca.',
        'Y cuando un equipo termina su parte y hace falta otro, no lo llama él directamente: deja una nota («ahora le toca a contabilidad»). El director lee esa nota y llama al siguiente. El relevo siempre pasa por arriba.',
      ],
    },
    {
      tipo: 'intro',
      titulo: 'La pirámide',
      parrafos: [
        'Todo esto tiene forma de pirámide. Abajo, lo operativo: la conexión con los datos, la contabilidad, los informes. En medio, los equipos que analizan, crean y comprueban. Arriba, la estrategia: cómo va la empresa y hacia dónde.',
        'Se construye de abajo hacia arriba. Primero los cimientos que funcionan, y solo después la punta. No se empieza por el tejado, igual que tú no empiezas por aquí: empiezas por una skill.',
      ],
    },
    {
      tipo: 'destacado',
      titulo: '¿Y esto funciona?',
      texto: 'El director central se probó con una simulación: un puñado de encargos distintos, a ver si cada uno acababa en el equipo correcto. La idea de esa prueba (preparar casos con su respuesta esperada y comprobar la realidad contra ella) es justo de lo que va el método. Es el peldaño más nuevo y el menos pulido del sistema, pero ya está en pie y reparte cada encargo de forma real.',
    },
  ],
  prev: { href: '/nivel-2', texto: 'Un equipo' },
  next: { href: '/casos', texto: 'Ver casos reales, de principio a fin' },
  cta: {
    titulo: 'Todo esto empieza por una skill',
    sub: 'La punta de la pirámide se sostiene sobre la base. Y la base es tu primera tarea bien hecha.',
    texto: 'Empezar por el nivel 1',
    href: '/nivel-1',
  },
};
