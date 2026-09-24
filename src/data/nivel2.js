// Nivel 2 · Un equipo de skills (un "enjambre"). Coordinador + verificador,
// el flujo de un documento a un asiento y los seis equipos del sistema.
// 24/09/2026: reescrito con el registro de la guía del M6. El flujo contable
// usa ya los nombres de los cinco agentes actuales y los equipos son los seis
// enjambres que declara el portfolio.
export const nivel2 = {
  meta: {
    title: 'Nivel 2 · Un equipo · Tu primer asistente de IA',
    description: 'Cuando una skill no basta: varias skills que trabajan juntas, con un coordinador que reparte el trabajo y un verificador que lo revisa. Con los seis equipos del sistema como ejemplo.',
  },
  n: '2',
  nombre: 'Un equipo',
  titulo: 'Cuando una tarea tiene varios pasos distintos, se reparte entre varias skills',
  lead: 'Este nivel <b>no hace falta para empezar</b>. Sirve cuando una tarea tiene varios pasos tan distintos que una sola skill los hace mal. Entonces se monta una skill para cada paso, con un coordinador que reparte el trabajo y un verificador que lo revisa antes de darlo por bueno. A ese conjunto se le llama <b>enjambre</b>.',
  bloques: [
    {
      tipo: 'intro',
      titulo: 'Por qué una factura necesita más de una skill',
      parrafos: [
        'Responder reseñas es un solo tipo de trabajo. Contabilizar una factura son cuatro: leer el documento, sacar los datos, preparar el asiento contable y comprobar que cuadra. Si una sola skill hace los cuatro, sus instrucciones mezclan criterios distintos y un error en la lectura llega al asiento sin que nadie lo revise.',
        'Con un equipo, cada skill tiene unas instrucciones cortas para un solo paso y le entrega su resultado a la siguiente. Cuando lo que está en juego importa, hacen falta además dos papeles.',
      ],
    },
    {
      tipo: 'piezas',
      titulo: 'Los dos papeles que necesita un equipo',
      items: [
        {
          etiqueta: 'El coordinador',
          pregunta: '¿a quién le corresponde este encargo?',
          cristiano: 'el que reparte el trabajo',
          detalle: 'Recibe el encargo y decide a qué especialista enviarlo. No hace el trabajo, solo lo dirige. Funciona como la centralita de una clínica, que según el motivo de la llamada la pasa a traumatología o a cardiología.',
        },
        {
          etiqueta: 'El verificador',
          pregunta: '¿el resultado es correcto?',
          cristiano: 'el que revisa sin haber hecho el trabajo',
          detalle: 'Su único trabajo es <b>buscar errores</b> en lo que ha hecho otra skill, sin haber participado en hacerlo. Hace falta porque cada skill que se añade es un punto más donde puede entrar un error. Sin su aprobación, el resultado no pasa al paso siguiente.',
        },
      ],
    },
    {
      tipo: 'flujo',
      titulo: 'De una factura a un asiento, paso a paso',
      intro: 'Este es el recorrido del equipo de contabilidad. Cada paso lo hace una skill distinta, que le entrega su resultado a la siguiente:',
      pasos: [
        { nombre: 'Llega un documento', texto: 'Una factura, una nómina o un extracto del banco.' },
        { nombre: 'El extractor', texto: 'Lee el documento y saca los datos: fechas, importes y conceptos. Es el único que ve el original.' },
        { nombre: 'El generador', texto: 'Con esos datos prepara el asiento contable y elige las cuentas.' },
        { nombre: 'El verificador', texto: 'Comprueba que el asiento cuadra al céntimo y que no está repetido. No tiene permiso para escribir en ninguna tabla.' },
        { nombre: 'El escribano', texto: 'Guarda el asiento aprobado en una tabla de borradores, que se puede deshacer sin tocar la contabilidad.' },
        { nombre: 'La persona decide', texto: 'Revisa el borrador y lo aprueba. Solo entonces entra en la contabilidad.' },
      ],
      cierre: 'El sistema <b>propone</b> y una persona aprueba antes de cualquier cambio definitivo. Lo que no se puede deshacer lo decide siempre una persona.',
    },
    {
      tipo: 'destacado',
      titulo: 'Un verificador evitó corregir algo que estaba bien',
      texto: 'Al montar el equipo de contabilidad, unos revisores automáticos auditaron el sistema y señalaron varios problemas. Después se lanzó un verificador independiente con un único encargo: intentar demostrar que esos problemas no existían. <b>Uno de ellos resultó falso.</b> Sin esa segunda revisión se habría cambiado algo que funcionaba. En contabilidad, un cambio así puede descuadrar las cuentas.',
    },
    {
      tipo: 'equipos',
      titulo: 'Seis equipos montados sobre la misma empresa simulada',
      intro: 'El mismo método se ha aplicado a seis dominios distintos, todos sobre la contabilidad y los datos de una empresa simulada. Cada equipo se ocupa de una cosa:',
      items: [
        { nombre: 'Contabilidad', frase: 'Lee una factura o una nómina, prepara el asiento y comprueba que cuadra al céntimo antes de guardarlo como borrador.', prueba: 'El cuadre lo recalcula un programa, no la IA.' },
        { nombre: 'Análisis de datos', frase: 'Explora un conjunto de datos, localiza lo que se sale de lo normal y lo explica en términos de negocio.', prueba: 'Un segundo revisor comprueba los cálculos antes de darlos por buenos.' },
        { nombre: 'Marketing', frase: 'Escribe textos, revisa campañas y analiza datos de visitas, búsquedas y redes, siempre con un objetivo medible.', prueba: 'Propone, pero no publica ni gasta nada por su cuenta.' },
        { nombre: 'Tesorería', frase: 'Calcula ratios, antigüedad de los cobros pendientes y la previsión de caja de los meses siguientes.', prueba: 'La previsión se contrasta con meses pasados cuyo resultado ya se conoce.' },
        { nombre: 'Programación', frase: 'Escribe o corrige programas con un orden fijo: primero la prueba que reproduce el fallo, después el código y al final un verificador.', prueba: 'El código no se da por terminado hasta que pasa sus pruebas.' },
        { nombre: 'Recursos humanos', frase: 'Resuelve las cuestiones laborales, como una indemnización, una cotización o el convenio aplicable.', prueba: 'El criterio laboral lo pone este equipo y el asiento lo prepara el de contabilidad.' },
      ],
    },
  ],
  prev: { href: '/nivel-1', texto: 'Una skill' },
  next: { href: '/nivel-3', texto: 'Un sistema' },
  cta: {
    titulo: 'Un equipo se monta sobre skills que ya funcionan',
    sub: 'Cada skill del equipo se escribe y se prueba igual que la primera. Por eso se empieza por una sola.',
    texto: 'Empezar por una skill',
    href: '/ejemplos',
  },
};
