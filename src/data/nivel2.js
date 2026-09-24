// Nivel 2 · Un enjambre de skills: por qué una tarea con varios pasos se reparte,
// los dos papeles que necesita el enjambre, el recorrido de una factura, un caso
// en que el verificador evitó un error y los seis enjambres del proyecto.
// Material: el flujo del enjambre contable con sus cinco agentes actuales y los
// seis enjambres que declara el portfolio.
// 24/09/2026: reescrita desde lo que el lector necesita entender. El nivel pasa a
// llamarse «un enjambre de skills» en lugar de «un equipo».
export const nivel2 = {
  meta: {
    title: 'Nivel 2 · Un enjambre de skills · Tu primer asistente de IA',
    description: 'Un enjambre reparte una tarea de varios pasos entre varias skills, con un coordinador que asigna el trabajo y un verificador que lo revisa. Con el recorrido de una factura y los seis enjambres de este proyecto.',
  },
  n: '2',
  nombre: 'Un enjambre de skills',
  titulo: 'Una tarea con varios pasos distintos se reparte entre varias skills que forman un enjambre',
  lead: 'El nivel 1 resuelve una tarea con una sola skill. Algunas tareas tienen pasos tan distintos que una sola skill los hace mal. En ese caso se escribe una skill para cada paso y se añaden un coordinador que reparte el trabajo y un verificador que lo revisa. A ese conjunto se le llama <b>enjambre</b>. Para crear el primer asistente no hace falta.',
  bloques: [
    {
      tipo: 'intro',
      titulo: 'Una factura necesita más de una skill porque contabilizarla son cuatro trabajos distintos',
      parrafos: [
        'Responder reseñas es un solo tipo de trabajo. Contabilizar una factura son cuatro: leer el documento, sacar los datos, preparar el asiento contable y comprobar que cuadra. Si una sola skill los hace todos, sus instrucciones mezclan criterios distintos y un error de lectura llega al asiento sin que nadie lo revise.',
        'En un enjambre, cada skill tiene unas instrucciones cortas para un solo paso y entrega su resultado a la siguiente. Cuando un error sale caro, como en la contabilidad, el enjambre necesita además dos papeles que no hacen el trabajo de ningún paso.',
      ],
    },
    {
      tipo: 'piezas',
      titulo: 'Un enjambre necesita alguien que reparta el trabajo y alguien que lo revise',
      items: [
        {
          etiqueta: 'El coordinador',
          pregunta: '¿a quién le corresponde este encargo?',
          cristiano: 'el que reparte el trabajo',
          detalle: 'Recibe el encargo y decide a qué skill del enjambre se lo envía. No hace ninguno de los pasos, porque su trabajo es que cada uno llegue a la skill que lo sabe hacer. Funciona como la centralita de una clínica, que según el motivo de la llamada la pasa a una consulta o a otra.',
        },
        {
          etiqueta: 'El verificador',
          pregunta: '¿el resultado es correcto?',
          cristiano: 'el que revisa sin haber hecho el trabajo',
          detalle: 'Su único trabajo es <b>buscar errores</b> en lo que ha hecho otra skill, sin haber participado en hacerlo. Hace falta porque cada skill que se añade es un punto más por el que puede entrar un error. Sin su aprobación, el resultado no pasa al paso siguiente.',
        },
      ],
    },
    {
      tipo: 'flujo',
      titulo: 'El enjambre de contabilidad convierte una factura en un asiento en seis pasos',
      intro: 'Cada paso lo hace una skill distinta, que entrega su resultado a la siguiente. El último lo da una persona:',
      pasos: [
        { nombre: 'Llega un documento', texto: 'Una factura, una nómina o un extracto del banco.' },
        { nombre: 'El extractor', texto: 'Lee el documento y saca los datos: fechas, importes y conceptos. Es el único que ve el original, de modo que los demás trabajan siempre con los mismos datos.' },
        { nombre: 'El generador', texto: 'Con esos datos prepara el asiento contable y elige las cuentas.' },
        { nombre: 'El verificador', texto: 'Comprueba que el asiento cuadra al céntimo y que no está repetido. No tiene permiso para escribir en ninguna tabla, así que no puede cambiar lo que revisa.' },
        { nombre: 'El escribano', texto: 'Guarda el asiento aprobado en una tabla de borradores, separada de la contabilidad, para que un error no llegue a los libros.' },
        { nombre: 'La persona decide', texto: 'Revisa el borrador y lo aprueba. Solo entonces entra en la contabilidad.' },
      ],
      cierre: 'El enjambre <b>propone</b> el asiento y una persona decide si entra en la contabilidad, porque en este proyecto lo que no se puede deshacer lo decide siempre una persona.',
    },
    {
      tipo: 'destacado',
      titulo: 'Un verificador independiente evitó cambiar algo que funcionaba',
      texto: 'Al montar el enjambre de contabilidad, unos revisores automáticos lo auditaron y señalaron varios problemas. Después se lanzó un verificador independiente con un único encargo: intentar demostrar que esos problemas no existían. <b>Uno de ellos resultó falso.</b> Sin esa segunda revisión se habría cambiado algo que funcionaba bien. En contabilidad, un cambio así puede descuadrar las cuentas.',
    },
    {
      tipo: 'equipos',
      titulo: 'Este proyecto tiene seis enjambres montados sobre la misma empresa simulada',
      intro: 'El mismo método se ha aplicado a seis áreas distintas, todas sobre la contabilidad y los datos de una empresa simulada. Cada enjambre se ocupa de un área y cada uno tiene su propia forma de comprobar lo que hace:',
      items: [
        { nombre: 'Contabilidad', frase: 'Lee una factura o una nómina, prepara el asiento y comprueba que cuadra al céntimo antes de guardarlo como borrador.', prueba: 'El cuadre lo recalcula un programa, que da siempre el mismo resultado.' },
        { nombre: 'Análisis de datos', frase: 'Explora un conjunto de datos, localiza lo que se sale de lo normal y lo explica en términos de negocio.', prueba: 'Un segundo revisor comprueba los cálculos antes de darlos por buenos.' },
        { nombre: 'Marketing', frase: 'Escribe textos, revisa campañas y analiza datos de visitas, búsquedas y redes, siempre con un objetivo medible.', prueba: 'Propone cambios, pero no publica ni gasta nada por su cuenta.' },
        { nombre: 'Tesorería', frase: 'Calcula ratios, la antigüedad de los cobros pendientes y la previsión de caja de los meses siguientes.', prueba: 'La previsión se contrasta con meses pasados cuyo resultado ya se conoce.' },
        { nombre: 'Programación', frase: 'Escribe o corrige programas con un orden fijo: primero la prueba que reproduce el fallo, después el código y al final un verificador.', prueba: 'El código no se da por terminado hasta que pasa sus pruebas.' },
        { nombre: 'Recursos humanos', frase: 'Resuelve las cuestiones laborales, como una indemnización, una cotización o el convenio aplicable.', prueba: 'El criterio laboral lo pone este enjambre y el asiento lo prepara el de contabilidad.' },
      ],
    },
  ],
  prev: { href: '/nivel-1', texto: 'Una skill' },
  next: { href: '/nivel-3', texto: 'Un enjambre de enjambres' },
  cta: {
    titulo: 'Un enjambre se monta sobre skills que ya funcionan',
    sub: 'Cada skill del enjambre se escribe y se prueba igual que la primera, así que el primer paso es una sola skill bien resuelta.',
    texto: 'Empezar por una skill',
    href: '/ejemplos',
  },
};
