// Nivel 3 · Un enjambre de enjambres: qué es, la skill que reparte los encargos
// entre enjambres, las tres clases de destino, un recorrido de ejemplo, por qué
// todo pasa por ella, la carga perezosa, el orden de construcción y lo que falta.
// Material: la skill de reparto del proyecto (su función, la carga perezosa y que
// es la única que lanza subagentes), la simulación de 31 encargos y la revisión
// del 23/09/2026.
// 24/09/2026: reescrita desde lo que el lector necesita entender. Define el
// enjambre de enjambres antes de usarlo y dice la causa de cada afirmación.
export const nivel3 = {
  meta: {
    title: 'Nivel 3 · Un enjambre de enjambres · Tu primer asistente de IA',
    description: 'Un enjambre de enjambres reúne los enjambres de skills de una empresa, uno por área, y una skill que envía cada encargo al que corresponde. Qué problema resuelve, cómo recorre un encargo y qué parte falta por terminar.',
  },
  n: '3',
  nombre: 'Un enjambre de enjambres',
  titulo: 'Un enjambre de enjambres reúne los enjambres de una empresa y envía cada encargo al que corresponde',
  lead: 'El nivel 2 explica qué es un enjambre: varias skills que se reparten una tarea con varios pasos. Cuando una empresa monta un enjambre para cada área, como la contabilidad, el marketing o el análisis de datos, el conjunto de todos ellos forma un <b>enjambre de enjambres</b>. Esta página explica cómo funciona el de este proyecto. Para crear el primer asistente no hace falta nada de lo que cuenta.',
  bloques: [
    {
      tipo: 'intro',
      titulo: 'Sin reparto, cada tarea obligaría a leer las instrucciones de todos los enjambres',
      parrafos: [
        'Cada enjambre tiene sus propias instrucciones. Las del enjambre de contabilidad explican cómo se registra una factura y las del de marketing, cómo se escribe una campaña. Si todas estuvieran cargadas a la vez, Claude tendría que leerlas enteras antes de cada respuesta aunque el encargo fuera de una sola área. Eso alarga cada respuesta y aumenta el riesgo de que aplique a una factura una norma pensada para un anuncio.',
        'Por eso el enjambre de enjambres tiene una skill más, que no hace ningún trabajo de negocio. Su única función es leer cada encargo y cargar solo el enjambre que corresponde. Para elegirlo consulta una lista con todos los enjambres y la función de cada uno. En el proyecto esa skill se llama <b>orquestador maestro</b>. Dentro de cada enjambre sigue habiendo un coordinador, el del nivel 2, que reparte el trabajo entre sus skills.',
      ],
    },
    {
      tipo: 'taxonomia',
      titulo: 'El orquestador reparte entre tres clases de destino',
      intro: 'La lista que consulta el orquestador clasifica cada destino por la función que cumple, porque de esa clase depende cómo le entrega el encargo.',
      items: [
        { tipo: 'Enjambres de área', ejemplos: 'contabilidad · análisis de datos · marketing', texto: 'Llevan un área de trabajo de principio a fin y tienen sus propias instrucciones de negocio. Las del de contabilidad cubren las facturas, las cuentas y el cuadre; las del de marketing, los textos y las campañas. Cada uno trabaja solo dentro de su área, de modo que sus normas no se mezclan con las de otro.' },
        { tipo: 'De apoyo', ejemplos: 'programación · automatizaciones · verificadores', texto: 'No pertenecen a ningún área y cualquier enjambre puede necesitarlos. Un verificador, por ejemplo, comprueba un resultado con el mismo criterio tanto si viene de contabilidad como si viene de marketing.' },
        { tipo: 'Herramientas', ejemplos: 'crear un PDF, un Word o un PowerPoint', texto: 'Resuelven una tarea concreta sin instrucciones de negocio, como convertir un texto en un PDF. El orquestador las usa directamente, porque para crear un documento no hace falta ningún enjambre.' },
      ],
    },
    {
      tipo: 'flujo',
      titulo: 'El recorrido de un encargo contable, desde que llega hasta que se aprueba',
      intro: 'Este es el camino que sigue el encargo «contabiliza esta factura». El orquestador actúa al principio y una persona decide al final:',
      pasos: [
        { nombre: 'Llega el encargo', texto: 'El orquestador lee «contabiliza esta factura» antes que ningún enjambre.' },
        { nombre: 'El orquestador elige el enjambre', texto: 'Reconoce que el encargo es contable y carga solo el enjambre de contabilidad. Las instrucciones de los demás enjambres no se leen.' },
        { nombre: 'El enjambre hace el trabajo', texto: 'Dentro del enjambre, una skill extrae los datos de la factura, otra prepara el asiento y una tercera comprueba que el debe y el haber cuadran al céntimo.' },
        { nombre: 'El asiento queda en borrador', texto: 'El asiento se guarda en una tabla de borradores, separada de la contabilidad, para que un error no llegue a los libros.' },
        { nombre: 'Una persona lo aprueba', texto: 'Una persona revisa el borrador y, solo con su visto bueno, el asiento pasa a la contabilidad. En este proyecto, todo lo que no se puede deshacer lo decide una persona.' },
      ],
      cierre: 'Cada parte tiene una sola función: el orquestador elige el enjambre, el enjambre prepara el asiento y la persona decide si entra en la contabilidad.',
    },
    {
      tipo: 'destacado',
      titulo: 'El trabajo entra y sale siempre por el orquestador para poder revisarlo después',
      texto: 'Los enjambres no se llaman entre sí. Cuando uno termina su parte y el encargo necesita a otro, lo indica al cerrar su trabajo y es el orquestador quien carga al siguiente. Así el recorrido de cada encargo queda en un solo sitio y se puede revisar paso a paso. En Claude Code, la versión de Claude que trabaja con los archivos del ordenador, hay además un límite técnico que obliga a hacerlo así: <b>un subagente no puede lanzar otro subagente</b>. Un subagente es una copia de Claude que recibe un encargo aislado y devuelve solo el resultado.',
    },
    {
      tipo: 'intro',
      titulo: 'Cada enjambre se carga en el momento en que el encargo lo necesita',
      parrafos: [
        'El orquestador no carga todos los enjambres al empezar a trabajar. Carga cada uno cuando el encargo lo necesita. A esa forma de trabajar se le llama <b>carga perezosa</b>. Gracias a ella se pueden añadir enjambres nuevos sin que cada tarea obligue a leer más instrucciones, porque un enjambre que no interviene en el encargo no se llega a leer.',
      ],
    },
    {
      tipo: 'intro',
      titulo: 'El enjambre de enjambres se construye desde la base hacia arriba',
      parrafos: [
        'Los enjambres de este proyecto se ordenan en tres capas. En la de abajo está lo operativo: la conexión con los datos, la contabilidad y los informes. En la intermedia están los enjambres que analizan, redactan y comprueban. En la de arriba, el análisis de cómo va la empresa y hacia dónde se dirige.',
        'Cada capa se construye cuando la de abajo ya funciona, porque un análisis de la empresa solo es fiable si los datos de la base cuadran. Por la misma razón esta guía empieza por una sola skill: el orquestador solo tiene sentido cuando ya hay dos o más enjambres entre los que elegir.',
      ],
    },
    {
      tipo: 'destacado',
      titulo: 'El orquestador se probó con 31 encargos y el reparto todavía no está terminado',
      texto: 'Para probarlo se prepararon 31 encargos, cada uno con el enjambre al que debía llegar. Después se comparó el enjambre que eligió el orquestador con el esperado. Es el mismo método que esta guía propone para probar un asistente: casos preparados con su respuesta correcta. Una revisión del 23 de septiembre de 2026 encontró dos problemas que siguen abiertos. El primero es que el orquestador no siempre se carga al empezar a trabajar. El segundo, que en la práctica quien indica qué instrucciones abrir en cada tarea es un programa de apoyo.',
    },
  ],
  prev: { href: '/nivel-2', texto: 'Un enjambre de skills' },
  next: { href: '/casos', texto: 'Tres casos de principio a fin' },
  cta: {
    titulo: 'Un enjambre de enjambres empieza por una skill',
    sub: 'Los enjambres y el orquestador se añaden cuando la primera tarea ya está bien resuelta, porque todo lo demás se apoya en ella.',
    texto: 'Empezar por el nivel 1',
    href: '/nivel-1',
  },
};
