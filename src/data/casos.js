// ============================================================
// CONTENIDO "CASOS": fuente única de verdad.
// Tres recorridos COMPLETOS (no tarjetas sueltas): problema → 4 decisiones →
// normas → entrada/salida → cómo mejora con el uso. Textos escritos a mano.
// 24/09/2026: revisada desde lo que el lector necesita entender (títulos, causas, antítesis y remates).
// 24/09/2026: reescrito con el registro de la guía de estilo del proyecto. Deja de llamarse
// «Casos reales»: son casos de ejemplo, redactados para la guía.
// ============================================================

export const casos = {
  meta: {
    title: 'Casos · Tu primer asistente de IA',
    description:
      'Tres asistentes montados de principio a fin: el problema, las cuatro decisiones, las normas, la respuesta que dan y cómo mejoran con el uso.',
  },

  hero: {
    k: 'Tres casos completos',
    titulo: 'Tres asistentes montados de principio a fin',
    lead: 'La página de ejemplos sirve para elegir una tarea y empezar. Esta muestra tres asistentes ya terminados, con el problema que resuelven, las cuatro decisiones que se tomaron, las normas, una respuesta de muestra y lo que se les añadió con el uso. Los textos están escritos para la guía.',
  },

  items: [
    {
      perfil: 'Comercio · tienda online',
      titulo: 'Responder reseñas sin fórmulas de plantilla',
      problema: 'Cada semana llegan reseñas buenas y malas y responderlas bien lleva tiempo. Si la respuesta tarda días, el cliente la lee como desinterés. Si está copiada de otra, lo nota enseguida.',
      decisiones: [
        { q: '¿Qué hace?', a: 'Convierte una reseña en una respuesta con mi tono.' },
        { q: '¿Para quién?', a: 'Para el cliente que la escribió y para quien la lea después.' },
        { q: 'Un ejemplo bueno y uno malo', a: 'Bueno: una respuesta que reconoce el problema, pide disculpas y ofrece una solución. Malo: «Lamentamos las molestias, contacte con atención al cliente», que no reconoce nada ni ofrece nada.' },
        { q: 'Nunca', a: 'Prometer reembolsos o plazos que no puedo cumplir.' },
      ],
      normas: [
        'Tono cercano y profesional.',
        'Ninguna fórmula de plantilla.',
        'Si la reseña es injusta, responder con educación y sin discutir.',
      ],
      entrada: 'El pedido llegó tarde y la caja estaba aplastada. Una pena, porque el producto parece bueno.',
      salida: 'Hola Marta, gracias por contárnoslo y perdona el estado del envío. Tienes razón, así no debería llegar. Ya lo hemos hablado con la empresa de transporte. Si el producto tiene algún daño, escríbenos y te lo solucionamos. Y gracias por lo que dices del producto: esperamos que lo disfrutes.',
      mejora: 'Después de unas semanas se añaden dos normas: «firma siempre con mi nombre» y «no uses la palabra incidencia». Cada corrección se escribe una sola vez en las instrucciones y a partir de ahí se aplica en todas las respuestas.',
    },
    {
      perfil: 'Inmobiliaria',
      titulo: 'Convertir notas sueltas en un anuncio que anime a visitar el piso',
      problema: 'Los datos del piso están en unas notas, pero redactar un anuncio con ellas cuesta cada vez y los anuncios acaban pareciéndose todos.',
      decisiones: [
        { q: '¿Qué hace?', a: 'Convierte mis notas de un inmueble en la descripción del anuncio.' },
        { q: '¿Para quién?', a: 'Para alguien que busca piso y ve veinte anuncios al día.' },
        { q: 'Un ejemplo bueno y uno malo', a: 'Bueno: un anuncio que cuenta cómo es vivir en la casa además de los metros. Malo: «Piso 80 m², 3 hab, exterior», que es una ficha técnica.' },
        { q: 'Nunca', a: 'Exagerar ni añadir lo que no está en mis notas, como decir «reformado» si no lo está.' },
      ],
      normas: [
        'Solo lo que está en mis notas.',
        'Tono cercano, sin las fórmulas habituales de agencia.',
        'Terminar siempre con una frase que invite a visitarlo.',
      ],
      entrada: '80 m², 3 hab, reformado 2022, 4ª con ascensor, terraza 8 m², barrio tranquilo, metro a 5 min.',
      salida: 'Piso reformado de 80 m² en una cuarta planta con ascensor y terraza propia de 8 m². Tres habitaciones, con cocina y baño reformados en 2022. Está en un barrio tranquilo, a cinco minutos del metro, y se puede entrar a vivir sin obras. Si quieres verlo, te lo enseñamos esta semana.',
      mejora: 'Se añade a las instrucciones que en esa zona los compradores valoran la luz y los colegios cercanos. Desde entonces el asistente lo menciona cuando las notas lo permiten. La agente solo revisa el texto.',
    },
    {
      perfil: 'Asesoría · contable',
      titulo: 'Explicar términos fiscales sin tecnicismos',
      problema: 'Los clientes preguntan a menudo lo mismo sobre el IVA, las retenciones o los plazos. Explicarlo con claridad a cada uno ocupa buena parte de la mañana.',
      decisiones: [
        { q: '¿Qué hace?', a: 'Explica un término fiscal o contable con palabras que entienda cualquiera.' },
        { q: '¿Para quién?', a: 'Para un autónomo o una pyme sin formación contable.' },
        { q: 'Un ejemplo bueno y uno malo', a: 'Bueno: una explicación con un ejemplo de su día a día y sin tecnicismos. Malo: copiar la definición de la ley, que es correcta pero no se entiende.' },
        { q: 'Nunca', a: 'Dar un dato como seguro si depende del caso. Hay que avisar siempre de que conviene confirmarlo.' },
      ],
      normas: [
        'Sin tecnicismos. Si una palabra técnica es inevitable, se explica.',
        'Siempre un ejemplo concreto.',
        'Avisar cuando algo depende del caso y hay que revisarlo.',
      ],
      entrada: '¿Qué es la prorrata de IVA?',
      salida: 'Si tu negocio hace unas ventas con IVA y otras sin él, por ejemplo formación, Hacienda no te deja recuperar todo el IVA de tus gastos, solo una parte. Esa parte es la prorrata. Si el 70 % de tus ventas lleva IVA, recuperas el 70 % del IVA que pagas y el resto lo asumes como gasto. El porcentaje exacto depende de tus números, así que conviene confirmarlo con tu caso.',
      mejora: 'Se añade a las instrucciones que la mayoría de los clientes son de hostelería. A partir de entonces los ejemplos hablan de bares y restaurantes.',
    },
  ],

  cierre: {
    texto: 'Los tres casos empiezan igual, con las respuestas a cuatro preguntas. La guía hace esas mismas preguntas para una tarea propia.',
    cta: 'Empezar la guía →',
    href: '/ejemplos',
  },
};
