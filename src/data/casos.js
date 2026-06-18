// ============================================================
// CONTENIDO "CASOS REALES" — fuente única de verdad.
// Tres recorridos COMPLETOS (no tarjetas sueltas): problema → 4 decisiones →
// normas → entrada/salida → cómo mejora con el uso. Demos estáticas, honestas.
// ============================================================

export const casos = {
  meta: {
    title: 'Casos reales — Tu primer asistente de IA',
    description:
      'Tres recorridos completos, de principio a fin: el problema, las decisiones que tomas, la skill —la tarea— que sale y cómo mejora con el uso.',
  },

  hero: {
    k: 'Casos reales',
    titulo: 'De un problema real a un asistente que funciona',
    lead: 'No es una lista para elegir y empezar (eso son los ejemplos): aquí ves tres asistentes construidos enteros, de principio a fin — el problema, las cuatro decisiones que tomas, la skill —la tarea— que sale y cómo mejora con el uso.',
  },

  items: [
    {
      perfil: 'Comercio · tienda online',
      titulo: 'Responder reseñas sin sonar a robot',
      problema: 'Cada semana llegan reseñas (buenas y malas) y responderlas bien lleva tiempo. Si tardas, parece que no te importa; si copias y pegas, se nota a la legua.',
      decisiones: [
        { q: '¿Qué hace?', a: 'Convierte una reseña en una respuesta con mi tono.' },
        { q: '¿Para quién?', a: 'Para el cliente que la escribió… y para todo el que la lea después.' },
        { q: 'Un ejemplo bueno y uno malo', a: 'Bueno: una respuesta que reconoce el problema, se disculpa con sinceridad y ofrece una salida. Malo: "Lamentamos las molestias, contacte con atención al cliente". Frío y vacío.' },
        { q: 'Nunca', a: 'Prometer reembolsos ni plazos que no puedo cumplir.' },
      ],
      normas: [
        'Tono cercano pero profesional.',
        'Nunca sonar a plantilla.',
        'Si la reseña es injusta, defenderse con educación, sin entrar al trapo.',
      ],
      entrada: 'El pedido llegó tarde y la caja estaba aplastada. Una pena, porque el producto parece bueno.',
      salida: 'Hola Marta, gracias por contárnoslo y perdona el destrozo del envío. Tienes toda la razón, así no debería llegar. Ya lo hemos hablado con la empresa de transporte. Si el producto tiene cualquier daño, escríbenos y te lo solucionamos. Y gracias por lo del producto: nos importa que lo disfrutes como toca.',
      mejora: 'A las pocas semanas le añades: "firma siempre con mi nombre" y "no uses la palabra incidencia". Cada corrección, una vez. Y va ajustándose poco a poco a tu forma de responder.',
    },
    {
      perfil: 'Inmobiliaria',
      titulo: 'De notas sueltas a un anuncio que invita a visitarlo',
      problema: 'Tienes los datos del piso en una libreta, pero pasarlos a un anuncio atractivo cuesta cada vez, y todos acaban sonando igual de sosos.',
      decisiones: [
        { q: '¿Qué hace?', a: 'Convierte mis notas de un inmueble en una descripción para el anuncio.' },
        { q: '¿Para quién?', a: 'Para alguien buscando piso, que ve veinte anuncios al día.' },
        { q: 'Un ejemplo bueno y uno malo', a: 'Bueno: un anuncio que cuenta cómo se vive en la casa, no solo los metros. Malo: "Piso 80 m², 3 hab, exterior". Una ficha técnica, no un anuncio.' },
        { q: 'Nunca', a: 'Exagerar ni inventar lo que no le he dicho (ni decir "reformado" si no lo está).' },
      ],
      normas: [
        'Honesto: solo lo que está en mis notas.',
        'Cercano, sin palabrería de agencia.',
        'Terminar siempre con una frase que invite a visitarlo.',
      ],
      entrada: '80 m², 3 hab, reformado 2022, 4ª con ascensor, terraza 8 m², barrio tranquilo, metro a 5 min.',
      salida: 'Piso reformado de 80 m² en una cuarta planta luminosa, con terraza propia de 8 m² para el café de la mañana. Tres habitaciones, cocina y baño a estrenar (2022) y edificio con ascensor. Barrio tranquilo y metro a cinco minutos. Listo para entrar a vivir. Ven a verlo y lo entenderás.',
      mejora: 'Le enseñas que en tu zona la gente valora la luz y los colegios cerca. Lo recuerda, y empieza a mencionarlo cuando encaja. Tú solo revisas.',
    },
    {
      perfil: 'Asesoría · contable',
      titulo: 'Explicar lo difícil, dicho fácil',
      problema: 'Tus clientes preguntan lo mismo una y otra vez (IVA, retenciones, plazos) y explicarlo claro, sin que se agobien, te come la mañana.',
      decisiones: [
        { q: '¿Qué hace?', a: 'Explica un término fiscal o contable en lenguaje que cualquiera entiende.' },
        { q: '¿Para quién?', a: 'Para un autónomo o una pyme sin formación contable.' },
        { q: 'Un ejemplo bueno y uno malo', a: 'Bueno: una explicación con un ejemplo de su día a día, sin jerga. Malo: copiar la definición de la ley. Correcta y completamente inútil.' },
        { q: 'Nunca', a: 'Dar el dato como seguro si depende del caso; siempre avisar de que conviene confirmarlo.' },
      ],
      normas: [
        'Cero jerga; si una palabra técnica es inevitable, la explico.',
        'Siempre un ejemplo concreto.',
        'Avisar cuando algo depende del caso y hay que mirarlo.',
      ],
      entrada: '¿Qué es la prorrata de IVA?',
      salida: 'Si tu negocio hace unas ventas con IVA y otras sin él (por ejemplo, formación), Hacienda no te deja recuperar todo el IVA de tus gastos: solo una parte. Esa parte es la prorrata. Si el 70 % de tus ventas llevan IVA, recuperas el 70 % del IVA que pagas; el resto lo asumes como gasto. Ojo: el porcentaje exacto depende de tus números, conviene confirmarlo con tu caso.',
      mejora: 'Le dices que tus clientes son sobre todo de hostelería. Empieza a poner ejemplos de bares y restaurantes. Lo recuerda para la próxima.',
    },
  ],

  cierre: {
    texto: 'Estos recorridos empiezan todos igual: con cuatro respuestas tuyas. Cuando quieras probar con lo tuyo, la guía te acompaña.',
    cta: 'Empezar la guía →',
    href: '/ejemplos',
  },
};
