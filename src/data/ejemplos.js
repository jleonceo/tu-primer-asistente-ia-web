// ============================================================
// CONTENIDO DE LA PÁGINA EJEMPLOS — fuente única de verdad.
// Las demos (demoEntrada / demoSalida) son texto ESTÁTICO redactado a mano.
// No llaman a ninguna IA. Son honestas: muestran lo que un asistente bien
// configurado puede hacer, sin exagerar.
// ============================================================

export const ejemplos = {

  intro: {
    k:     'Empezamos · elige por dónde',
    titulo: 'Vamos a crear tu asistente',
    sub:   'Para no arrancar con la hoja en blanco, el primer paso es coger una tarea parecida a la tuya y afinarla a lo tuyo (luego la puedes cambiar entera). Son tareas reales que la gente delega cada día. <b>Elige la que más se te parezca</b>, o empieza desde cero.',
    // Micro-paso conceptual (#5): el camino rápido se saltaba la explicación de
    // las 3 piezas que sí está en Nivel 1. Aquí va el resumen + la puerta a Nivel 1.
    primer: 'Lo vas a montar en tres piezas, una en cada paso: <b>una tarea</b> (qué hace), <b>unas normas</b> (cómo se comporta) y <b>una memoria</b> (lo que recuerda de ti). Empiezas por la tarea.',
    primerLink: { texto: '¿Primera vez con esto? Mira cómo funciona — vuelves aquí cuando quieras, no pierdes nada', href: '/nivel-1' },
  },

  // F5 — aviso temprano de cuenta (coste 0, sin sorpresas al final)
  avisoCuenta: 'Necesitarás una cuenta gratuita en claude.ai para guardar y usar tu asistente.',

  tarjetas: [
    {
      perfil:      'Comercio · e-commerce',
      titulo:      'Responder reseñas',
      descripcion: 'Convierte una reseña (buena o mala) en una respuesta con tu tono, sin sonar a plantilla.',
      // F3 — demo precomputada estática: entrada real → lo que haría tu asistente
      demoEntrada: 'El producto llegó tarde y el embalaje estaba golpeado. Decepcionante.',
      demoSalida:  'Hola Marta, gracias por avisarnos. Tienes razón: ese retraso y el estado del embalaje no están bien, y lo sentimos. Ya hemos avisado al transportista. Si el producto llegó dañado, escríbenos y te lo resolvemos hoy mismo.',
    },
    {
      perfil:      'Comercio · e-commerce',
      titulo:      'Fichas de producto',
      descripcion: 'De las características de un producto a una ficha clara y atractiva para la tienda.',
      demoEntrada: 'Mochila 22L, tela reciclada, impermeable, bolsillo para portátil de 15", peso 680g.',
      demoSalida:  'La mochila que no te pesa ni cuando llueve. 22 litros de espacio bien organizado, bolsillo acolchado para el portátil (hasta 15") y tela reciclada que aguanta el chaparrón de camino a la oficina. Solo 680 gramos: te cabe el día entero y casi no la notas.',
    },
    {
      perfil:      'Inmobiliaria',
      titulo:      'Descripciones de inmuebles',
      descripcion: 'De tus notas sueltas de un piso a un anuncio que invita a visitarlo.',
      demoEntrada: 'Piso 80m², 3 habitaciones, reformado 2022, 4ª planta con ascensor, terraza 8m², barrio tranquilo, metro a 5 min.',
      demoSalida:  'Piso reformado de 80 m² en planta alta con terraza propia. Tres habitaciones, cocina nueva y baño actualizado en 2022. Edificio con ascensor, barrio tranquilo y metro a cinco minutos. Perfecto para quien quiere entrar a vivir sin obras.',
    },
    {
      perfil:      'Legal · asesoría',
      titulo:      'Resumir documentos',
      descripcion: 'De un documento largo a sus puntos importantes y los riesgos a vigilar.',
      demoEntrada: 'Contrato de arrendamiento de 18 páginas con cláusulas de penalización, IPC y obras.',
      demoSalida:  'Lo importante: alquiler de 950 €/mes, revisable con IPC cada año. Duración 3 años con prórroga automática.\nVigila: cláusula 7, cualquier obra, aunque sea pequeña, necesita permiso escrito del propietario. La penalización por salida anticipada es de 2 meses.',
    },
    {
      perfil:      'Asesoría · contable',
      titulo:      'Explicar en llano',
      descripcion: 'De un término técnico o fiscal a una explicación que cualquiera entiende.',
      demoEntrada: '¿Qué es la prorrata de IVA y para qué sirve?',
      demoSalida:  'Si tu negocio hace algunas ventas con IVA y otras sin IVA (por ejemplo, formación y consultoría), Hacienda no te deja recuperar todo el IVA de tus gastos: solo una parte. La prorrata es ese porcentaje. Si el 70% de tus ventas llevan IVA, podrás recuperar el 70% del IVA que pagas. El resto lo asumes tú como gasto.',
    },
    {
      perfil:      'Marketing',
      titulo:      'Textos publicitarios',
      descripcion: 'De una idea corta a varias versiones del texto entre las que elegir.',
      demoEntrada: 'App de meditación guiada para adultos con poco tiempo. Mensaje: sin excusas, 5 minutos bastan.',
      demoSalida:  'Versión A (directa): «5 minutos. Eso es todo lo que necesitas.»\nVersión B (beneficio): «Menos estrés, más foco. Sin necesitar una hora libre.»\nVersión C (reto): «¿No tienes tiempo para meditar? Prueba esto durante una semana.»',
    },
    {
      perfil:      'Educación',
      titulo:      'Adaptar al nivel',
      descripcion: 'De un texto a la versión adecuada para cada nivel de lectura.',
      demoEntrada: 'La fotosíntesis es el proceso mediante el cual las plantas sintetizan glucosa a partir de CO₂ y H₂O usando energía solar.',
      demoSalida:  'Las plantas fabrican su propio alimento con la luz del sol. Toman agua del suelo y un gas del aire (dióxido de carbono) y, con la ayuda de la luz, los convierten en azúcar, que es su comida. Como si tuvieran una pequeña fábrica dentro de cada hoja.',
    },
    {
      perfil:      'Marketing · redes',
      titulo:      'Ideas de contenido',
      descripcion: 'De tu sector a un calendario de ideas listo para empezar a publicar.',
      demoEntrada: 'Fisioterapeuta con clínica propia. Quiero publicar 3 veces por semana en Instagram.',
      demoSalida:  'Lunes — Tip rápido: «Por qué te duele el cuello aunque no hayas hecho nada especial»\nMiércoles — Desmontando un mito: «Crujirse los dedos no da artritis»\nViernes — Pregunta a tu comunidad: «¿Cuántas horas al día llevas sentado?»',
    },
  ],

  desdeCero: {
    texto: '¿Tu tarea no está aquí?',
    cta:   'Empieza desde cero →',
    href:  '/paso1',
  },

};
