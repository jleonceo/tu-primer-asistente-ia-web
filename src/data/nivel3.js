// Nivel 3 · Un sistema (un "enjambre de enjambres"): el director central, los
// tres tipos de equipo, la carga perezosa y el relevo, un recorrido de ejemplo
// y la pirámide. Material: Registro_Enjambres_TechAcces, skill
// orquestador-maestro (pasos 3 y 4, simulación de 31 casos) y el flujo del
// enjambre contable.
// 24/09/2026: reescrito con el registro de la guía del M6. Se corrige el cierre:
// la revisión del 23/09/2026 midió que el director no siempre se carga al
// empezar y que el reparto lo hace en la práctica un programa de apoyo.
export const nivel3 = {
  meta: {
    title: 'Nivel 3 · Un sistema · Tu primer asistente de IA',
    description: 'Un equipo de equipos, con un director central que envía cada encargo al equipo que corresponde. Cómo se reparte el trabajo y qué parte está aún sin terminar.',
  },
  n: '3',
  nombre: 'Un sistema',
  titulo: 'Con varios equipos hace falta un director que decida cuál atiende cada encargo',
  lead: 'Cuando hay varios equipos, alguien tiene que leer cada encargo y decidir cuál se ocupa. Ese es el nivel 3. Para empezar no hace falta, pero explica hacia dónde crece un sistema cuando se le añaden equipos.',
  bloques: [
    {
      tipo: 'intro',
      titulo: 'El director central reparte el trabajo entre los equipos',
      parrafos: [
        'En el nivel 2 cada equipo tiene su coordinador. En el nivel 3 hay además un <b>director central</b> por encima de todos, que es el primero en leer cada encargo.',
        'Su trabajo es decidir qué equipo corresponde y pasarle el encargo solo a ese. Los demás equipos no se cargan, de modo que Claude no tiene que leer las instrucciones de todos para atender una sola tarea.',
        'En el sistema de este proyecto, el director consulta un registro con todos los equipos y sus funciones para elegir el destino de cada encargo.',
      ],
    },
    {
      tipo: 'taxonomia',
      titulo: 'Los tres tipos de equipo que distingue el director',
      intro: 'Para repartir el trabajo, el director clasifica cada equipo según su función. Estos son los tres tipos que usa el sistema:',
      items: [
        { tipo: 'De proyecto', ejemplos: 'contabilidad · análisis de datos · marketing', texto: 'Llevan una línea de trabajo de principio a fin y tienen su propio contexto de negocio. El de contabilidad conoce las facturas y el cuadre. El de marketing conoce los textos y las campañas. Cada uno trabaja solo en su dominio.' },
        { tipo: 'De apoyo', ejemplos: 'programación · automatizaciones · verificadores', texto: 'No pertenecen a ningún proyecto y se llaman cuando hacen falta en cualquiera de ellos. Un verificador comprueba lo mismo lo pida quien lo pida.' },
        { tipo: 'De herramienta', ejemplos: 'crear un PDF, un Word o un PowerPoint', texto: 'Resuelven una tarea concreta, sin coordinador ni contexto de negocio. El director las llama directamente, sin montar un equipo alrededor.' },
      ],
    },
    {
      tipo: 'destacado',
      titulo: 'Todo el trabajo pasa por el director para que se pueda seguir',
      texto: 'Los equipos no se llaman entre sí. En Claude Code hay además una limitación técnica: <b>un subagente no puede lanzar otro subagente</b>. Si cada equipo pudiera llamar a los demás, el recorrido de un encargo sería imposible de seguir y de revisar. Por eso el trabajo entra y sale siempre por el director.',
    },
    {
      tipo: 'flujo',
      titulo: 'El recorrido de un encargo: «contabiliza esta factura»',
      intro: 'Así recorre el sistema un encargo contable. El director interviene al principio y una persona decide al final:',
      pasos: [
        { nombre: 'Llega el encargo', texto: '«Contabiliza esta factura.» Lo lee primero el director central.' },
        { nombre: 'El director elige el equipo', texto: 'Reconoce que es un encargo contable y se lo pasa solo al equipo de contabilidad. Los demás equipos no se cargan.' },
        { nombre: 'El equipo trabaja', texto: 'Dentro de ese equipo, una skill lee la factura, otra prepara el asiento y una tercera comprueba que cuadra al céntimo.' },
        { nombre: 'Queda en borrador', texto: 'El asiento espera en una tabla de borradores, sin tocar la contabilidad.' },
        { nombre: 'Una persona aprueba', texto: 'Revisa el borrador y, solo con su visto bueno, el asiento entra en la contabilidad. Lo que no se puede deshacer lo decide siempre una persona.' },
      ],
      cierre: 'El director reparte, el equipo propone y la persona aprueba.',
    },
    {
      tipo: 'intro',
      titulo: 'Cada equipo se carga solo cuando se necesita',
      parrafos: [
        'Los equipos <b>no se cargan todos a la vez</b>. El director carga solo el que va a usar y en el momento de usarlo. A esto se le llama carga perezosa. Es lo que permite añadir equipos sin que cada tarea obligue a leer más instrucciones.',
        'Cuando un equipo termina su parte y hace falta otro, no lo llama él. Al cerrar su trabajo indica qué equipo debe seguir, el director lee esa indicación y llama al siguiente. El relevo pasa siempre por el director.',
      ],
    },
    {
      tipo: 'intro',
      titulo: 'El sistema se construye de abajo arriba',
      parrafos: [
        'El conjunto tiene forma de pirámide. En la base está lo operativo: la conexión con los datos, la contabilidad y los informes. En el medio, los equipos que analizan, redactan y comprueban. Arriba, el análisis de cómo va la empresa y hacia dónde se dirige.',
        'Cada nivel se construye cuando el de abajo ya funciona, porque un análisis de la empresa solo es fiable si los datos de la base cuadran. Por la misma razón, esta guía empieza por una sola skill.',
      ],
    },
    {
      tipo: 'destacado',
      titulo: 'El director está probado con simulaciones y es la parte menos terminada',
      texto: 'El director se probó con 31 encargos preparados de antemano, cada uno con el equipo al que debía llegar. Después se comparó el destino real con el esperado. Preparar casos con su respuesta correcta y comprobar el resultado contra ella es el método que explica esta guía. Una revisión del 23 de septiembre de 2026 encontró, sin embargo, que el director no siempre se carga al empezar a trabajar y que el reparto lo hace en la práctica un programa de apoyo que indica qué instrucciones abrir en cada tarea. Es la parte del sistema que queda por terminar.',
    },
  ],
  prev: { href: '/nivel-2', texto: 'Un equipo' },
  next: { href: '/casos', texto: 'Tres casos de principio a fin' },
  cta: {
    titulo: 'Un sistema empieza por una skill',
    sub: 'Los equipos y el director se añaden cuando la base funciona. La base es la primera tarea bien resuelta.',
    texto: 'Empezar por el nivel 1',
    href: '/nivel-1',
  },
};
