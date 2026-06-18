// Nivel 2 — Un equipo de skills (un "enjambre"). Coordinador + verificador,
// el flujo de un documento a un asiento, y los 5 equipos reales con su prueba.
export const nivel2 = {
  meta: {
    title: 'Nivel 2 · Un equipo — Tu primer asistente de IA',
    description: 'Cuando una sola skill se queda corta: varias trabajando juntas, con un coordinador que reparte y un verificador que comprueba. Cinco equipos reales.',
  },
  n: '2',
  nombre: 'Un equipo',
  titulo: 'Cuando una skill se queda corta: un equipo',
  lead: 'Esto es un peldaño más arriba: <b>no te hace falta para empezar</b>. Algunas tareas son demasiado grandes para una sola skill. Entonces montas varias, cada una experta en su parte, con alguien que reparte el trabajo y alguien que lo revisa antes de darlo por bueno. A eso lo llamamos un <b>enjambre</b> (un equipo de skills encadenadas).',
  bloques: [
    {
      tipo: 'intro',
      titulo: 'De una skill a varias',
      parrafos: [
        'Una skill responde reseñas. Pero, ¿y procesar una factura entera? Eso son varios pasos distintos: leer el documento, sacar los datos, montar el apunte contable, comprobar que cuadra. Pedirle todo eso a una sola skill es como pedirle a una persona que sea a la vez recepcionista, contable y auditor.',
        'La alternativa es un equipo: <b>varias skills encadenadas</b>, cada una buena en lo suyo, pasándose el trabajo. Y dos papeles que no pueden faltar cuando las cosas importan.',
      ],
    },
    {
      tipo: 'piezas',
      titulo: 'Los dos papeles que no pueden faltar',
      items: [
        {
          etiqueta: 'El coordinador',
          pregunta: '¿a quién le toca esto?',
          cristiano: 'el que reparte el trabajo',
          detalle: 'Recibe el encargo y decide a qué especialista mandarlo. No hace el trabajo: lo enruta. Como la centralita de una clínica, que te pasa a traumatología y no a cardiología según lo que cuentas.',
        },
        {
          etiqueta: 'El verificador',
          pregunta: '¿esto está bien?',
          cristiano: 'el segundo par de ojos',
          detalle: 'Su único trabajo es <b>intentar refutar</b> lo que dijo el primero: buscar el error, no aprobar por cortesía. Es el contrapeso obligatorio. Más manos van más rápido, pero también se equivocan más; sin verificador, no se actúa.',
        },
      ],
    },
    {
      tipo: 'flujo',
      titulo: 'Cómo fluye el trabajo: de una factura a un apunte',
      intro: 'Este es el equipo de contabilidad, paso a paso. Cada eslabón hace solo lo suyo y le pasa el testigo al siguiente:',
      pasos: [
        { nombre: 'Llega un documento', texto: 'Una factura, una nómina, un extracto del banco.' },
        { nombre: 'El extractor', texto: 'Lo lee y saca los datos en limpio: fechas, importes, conceptos.' },
        { nombre: 'El generador', texto: 'Con esos datos monta el apunte contable, con sus cuentas.' },
        { nombre: 'El validador', texto: 'Comprueba que cuadra al céntimo y que no hay errores raros.' },
        { nombre: 'El borrador', texto: 'Queda en espera, sin tocar nada todavía.' },
        { nombre: 'La persona decide', texto: 'Lo revisa y aprueba. Solo entonces entra en la base de datos real.' },
      ],
      cierre: 'El sistema <b>propone</b>. La persona aprueba antes de que se toque nada definitivo. Lo que no se puede deshacer, no lo decide la máquina.',
    },
    {
      tipo: 'destacado',
      titulo: 'Por qué el verificador no sobra',
      texto: 'Esto pasó montando el equipo de contabilidad de este proyecto: unos revisores automáticos auditaron el sistema y señalaron varios problemas. Se lanzó otro, independiente, solo para intentar tumbarlos. <b>Uno de los problemas señalados resultó falso.</b> Sin ese par de ojos extra, se habría corregido algo que ya estaba bien. En contabilidad, eso es un problema serio.',
    },
    {
      tipo: 'equipos',
      titulo: 'Cinco equipos, a modo de ejemplo',
      intro: 'Para que se vea que no es teoría: estos cinco equipos están montados sobre la contabilidad y los datos de una empresa. Cada uno se encarga de una cosa distinta.',
      items: [
        { nombre: 'Contabilidad', frase: 'Lee una factura o una nómina, monta el apunte y comprueba que cuadra al céntimo antes de tocar la base de datos.', prueba: 'El cuadre lo recalcula un programa, no la IA.' },
        { nombre: 'Análisis de datos', frase: 'Coge un montón de datos, los explora, encuentra lo que llama la atención y lo cuenta en lenguaje de negocio.', prueba: 'Un segundo revisor comprueba las cuentas antes de darlas por buenas.' },
        { nombre: 'Marketing', frase: 'Revisa lo que ya tienes (web, campaña) o escribe textos, siempre con un objetivo claro.', prueba: 'Propone; nunca publica ni gasta por su cuenta.' },
        { nombre: 'Programación', frase: 'Escribe o arregla software con disciplina: primero las pruebas, luego el código, luego un verificador.', prueba: 'El código se prueba antes de darlo por terminado.' },
        { nombre: 'Audiencias', frase: 'Convierte objetivos en cifras medibles y analiza datos de visitas, búsquedas y redes.', prueba: 'Parte de datos medibles, no de impresiones.' },
      ],
    },
  ],
  prev: { href: '/nivel-1', texto: 'Una skill' },
  next: { href: '/nivel-3', texto: 'Un sistema' },
  cta: {
    titulo: 'Pero esto empieza por lo de abajo',
    sub: 'Un equipo se monta sobre skills que ya funcionan. Por eso lo primero es una skill.',
    texto: 'Empezar por una skill',
    href: '/ejemplos',
  },
};
