// ============================================================
// CONTENIDO DE LA PÁGINA EJEMPLOS: fuente única de verdad.
// Las demos (demoEntrada / demoSalida) son texto ESTÁTICO redactado a mano.
// No llaman a ninguna IA: muestran lo que puede hacer un asistente bien
// configurado, sin exagerar.
// 24/09/2026: reescrito. Esta página abre los pasos, así que va en tú.
// ============================================================

export const ejemplos = {

  intro: {
    k:     'Primer paso · elige una tarea',
    titulo: 'Crea tu asistente a partir de una tarea',
    sub:   'Para no empezar con la hoja en blanco, elige la tarea que más se parezca a la tuya. En el paso siguiente la adaptas a tu caso o la cambias entera. <b>Si ninguna se parece</b>, empieza desde cero.',
    // Resumen de las tres piezas, para quien llega aquí sin pasar por el nivel 1.
    primer: 'Tu asistente se monta en tres pasos, uno por pieza: <b>la tarea</b> (qué hace), <b>las normas</b> (cómo se comporta) y <b>la memoria</b> (qué datos tuyos tiene en cuenta). Se empieza por la tarea.',
    primerLink: { texto: 'Si es la primera vez, aquí se explica cómo funciona. Lo que hayas rellenado se conserva', href: '/nivel-1' },
  },

  // Aviso temprano de cuenta, para que no aparezca por sorpresa al final.
  avisoCuenta: 'Para guardar y usar el asistente necesitarás una cuenta en claude.ai. Sirve la gratuita.',

  tarjetas: [
    {
      perfil:      'Comercio · tienda online',
      titulo:      'Responder reseñas',
      descripcion: 'Convierte una reseña, buena o mala, en una respuesta con tu tono y sin fórmulas de plantilla.',
      demoEntrada: 'El producto llegó tarde y el embalaje estaba golpeado. Decepcionante.',
      demoSalida:  'Hola Marta, gracias por avisarnos. Tienes razón: el retraso y el estado del embalaje no son aceptables y lo sentimos. Ya hemos hablado con el transportista. Si el producto llegó dañado, escríbenos y te lo resolvemos hoy mismo.',
    },
    {
      perfil:      'Comercio · tienda online',
      titulo:      'Fichas de producto',
      descripcion: 'Convierte las características de un producto en una ficha clara para la tienda.',
      demoEntrada: 'Mochila 22 L, tela reciclada, impermeable, bolsillo para portátil de 15", peso 680 g.',
      demoSalida:  'Una mochila ligera que aguanta la lluvia. Tiene 22 litros de capacidad, un bolsillo acolchado para portátiles de hasta 15" y una tela reciclada e impermeable. Pesa 680 gramos, así que se lleva todo el día sin cansarse.',
    },
    {
      perfil:      'Inmobiliaria',
      titulo:      'Descripciones de inmuebles',
      descripcion: 'Convierte tus notas sueltas de un piso en un anuncio que anime a visitarlo.',
      demoEntrada: 'Piso 80 m², 3 habitaciones, reformado 2022, 4ª planta con ascensor, terraza 8 m², barrio tranquilo, metro a 5 min.',
      demoSalida:  'Piso reformado de 80 m² en una cuarta planta con ascensor y terraza propia. Tres habitaciones, cocina nueva y baño reformado en 2022. Está en un barrio tranquilo, a cinco minutos del metro, y se puede entrar a vivir sin obras.',
    },
    {
      perfil:      'Legal · asesoría',
      titulo:      'Resumir documentos',
      descripcion: 'Resume un documento largo en sus puntos importantes y los riesgos que conviene vigilar.',
      demoEntrada: 'Contrato de arrendamiento de 18 páginas con cláusulas de penalización, IPC y obras.',
      demoSalida:  'Lo importante: alquiler de 950 € al mes, revisable cada año con el IPC. Duración de 3 años con prórroga automática.\nA vigilar: según la cláusula 7, cualquier obra, aunque sea pequeña, necesita permiso escrito del propietario. Salir antes de tiempo tiene una penalización de 2 meses de alquiler.',
    },
    {
      perfil:      'Asesoría · contable',
      titulo:      'Explicar sin tecnicismos',
      descripcion: 'Explica un término técnico o fiscal de forma que lo entienda alguien sin formación.',
      demoEntrada: '¿Qué es la prorrata de IVA y para qué sirve?',
      demoSalida:  'Si tu negocio hace unas ventas con IVA y otras sin IVA, por ejemplo formación y consultoría, Hacienda no te deja recuperar todo el IVA de tus gastos, solo una parte. La prorrata es ese porcentaje. Si el 70 % de tus ventas lleva IVA, recuperas el 70 % del IVA que pagas y el resto lo asumes como gasto.',
    },
    {
      perfil:      'Marketing',
      titulo:      'Textos publicitarios',
      descripcion: 'Convierte una idea corta en varias versiones del texto para elegir una.',
      demoEntrada: 'App de meditación guiada para adultos con poco tiempo. Mensaje: sin excusas, 5 minutos bastan.',
      demoSalida:  'Versión A (directa): «5 minutos. Es todo lo que necesitas.»\nVersión B (beneficio): «Menos estrés y más concentración, sin buscar una hora libre.»\nVersión C (reto): «¿No tienes tiempo para meditar? Pruébalo cinco minutos al día durante una semana.»',
    },
    {
      perfil:      'Educación',
      titulo:      'Adaptar al nivel',
      descripcion: 'Adapta un texto al nivel de lectura de quien lo va a leer.',
      demoEntrada: 'La fotosíntesis es el proceso mediante el cual las plantas sintetizan glucosa a partir de CO₂ y H₂O usando energía solar.',
      demoSalida:  'Las plantas fabrican su propio alimento con la luz del sol. Toman agua del suelo y un gas del aire, el dióxido de carbono. Con la energía de la luz los convierten en azúcar. Ese azúcar es su alimento.',
    },
    {
      perfil:      'Marketing · redes',
      titulo:      'Ideas de contenido',
      descripcion: 'Prepara un calendario de ideas de publicación para tu sector.',
      demoEntrada: 'Fisioterapeuta con clínica propia. Quiero publicar 3 veces por semana en Instagram.',
      demoSalida:  'Lunes, consejo rápido: «Por qué te duele el cuello aunque no hayas hecho ningún esfuerzo»\nMiércoles, un mito falso: «Crujirse los dedos no provoca artritis»\nViernes, pregunta a tus seguidores: «¿Cuántas horas al día pasas sentado?»',
    },
  ],

  desdeCero: {
    texto: '¿Tu tarea no está aquí?',
    cta:   'Empieza desde cero →',
    href:  '/paso1',
  },

};
