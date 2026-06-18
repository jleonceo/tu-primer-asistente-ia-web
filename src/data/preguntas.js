// ============================================================
// CONTENIDO "PREGUNTAS" (FAQ) — fuente única de verdad.
// Preguntas reales de gente no técnica, agrupadas por tema y respondidas
// con honestidad. Material de la mina interna (GUIA v0.12 + informes de sesión).
// ============================================================

export const preguntas = {
  meta: {
    title: 'Preguntas claras — Tu primer asistente de IA',
    description: 'Lo que todo el mundo pregunta antes de empezar: si hace falta programar, qué pasa con tus datos, cómo mejora y dónde están los límites. Sin letra pequeña.',
  },

  hero: {
    k: 'Preguntas claras',
    titulo: 'Lo que todo el mundo pregunta',
    lead: 'Sin letra pequeña ni rodeos. Están agrupadas por tema. Si te falta alguna, la añadimos.',
  },

  grupos: [
    {
      titulo: '¿Esto es para mí?',
      items: [
        { q: '¿Necesito saber programar?', a: 'No. Todo es texto en lenguaje normal. Si sabes explicarle tu trabajo a un compañero nuevo, sabes hacer esto.' },
        { q: '¿Cuánto tardo en tener algo funcionando?', a: 'Las cuatro preguntas del paso 1 te dejan un borrador en una sentada. Tener un asistente afinado de verdad lleva más: se mejora con el uso, poco a poco, sin terminarlo todo de una vez.' },
        { q: '¿Cuánto cuesta?', a: 'Esta web no tiene coste. Para guardar tu asistente hace falta una cuenta en claude.ai; el plan gratuito es suficiente para lo que se explica aquí.' },
        { q: '¿Tengo que instalar algo?', a: 'No. Se hace entero en el navegador, dentro de tu Claude. Nada que descargar.' },
      ],
    },
    {
      titulo: 'Tus datos y tus miedos',
      items: [
        { q: '¿Qué pasa con mis datos?', a: 'Mientras rellenas esta web, lo que escribes se queda en tu navegador y no lo enviamos a ningún sitio. Cuando luego pegues tu asistente en Claude, lo que escribas ahí pasa por los servidores de Anthropic. Por eso: no metas contraseñas ni datos muy sensibles.' },
        { q: '¿Me pueden copiar el asistente que cree?', a: 'El texto vive en tu cuenta y no es público salvo que tú lo compartas. Tu forma de hacer las cosas, los ejemplos que le pusiste, no se copian con solo leer un archivo.' },
        { q: '¿La IA aprende de lo mío y se lo pasa a otro?', a: 'Lo que escribes en una conversación no se le muestra a otros usuarios. Pero conviene saberlo: en el plan gratuito, Anthropic puede usar tus conversaciones para mejorar sus modelos, salvo que lo desactives en los ajustes de privacidad de tu cuenta. Por eso, los datos confidenciales de terceros (clientes con nombre, contratos firmados) mejor no los escribas.' },
      ],
    },
    {
      titulo: 'Cómo funciona, por dentro',
      items: [
        { q: '¿Qué diferencia hay entre la skill, las normas y la memoria?', a: 'La skill es la tarea que le encargas. Las normas son cómo se comporta siempre, en cualquier tarea (en los archivos eso tiene un nombre técnico —CLAUDE.md— que no necesitas si usas claude.ai). La memoria es lo que recuerda de ti. Puedes tener solo la skill y ya funciona; las otras dos la hacen más tuya.' },
        { q: '¿Cómo tiene en cuenta la IA lo que le he enseñado?', a: 'Porque al abrir una conversación dentro de tu Proyecto, Claude lee tus instrucciones antes de responderte. A eso lo llamamos "anclarlo": están siempre activas sin que las repitas.' },
        { q: '¿En qué se diferencia de pedirle cosas a la IA como siempre?', a: 'Cuando le pides algo suelto, mañana lo ha olvidado y empiezas de cero. Un asistente guarda tu tarea, tus normas y lo que sabe de ti, y lo aplica sin que se lo repitas. Esa es toda la diferencia.' },
        { q: '¿Puedo tener varios asistentes?', a: 'Sí. Con la cuenta gratuita puedes tener varios Proyectos, cada uno con su propio asistente para una tarea distinta (el número exacto lo fija claude.ai y puede cambiar).' },
        { q: '¿Y si no me aparece "Proyectos" en Claude?', a: 'Búscalo en el menú de la izquierda o en claude.ai/projects. Si aun así no lo tienes, puedes guardar tu asistente en un archivo de texto y pegarlo al empezar cada conversación: más manual, pero funciona igual.' },
      ],
    },
    {
      titulo: 'Cómo mejora con el tiempo',
      items: [
        { q: '¿Mejora solo o tengo que hacer algo?', a: 'No mejora solo. Mejora cuando le dices qué hizo mal: vuelves al texto, añades una regla que lo impida, y deja de pasar. La primera versión es un borrador; las siguientes son tuyas.' },
        { q: '¿Cuándo se nota que el asistente es "mío"?', a: 'Cuando le has puesto ejemplos reales de tu trabajo y le has dicho qué no puede hacer nunca. Eso tarda un par de vueltas, no se consigue al primer intento.' },
        { q: '¿Si actualizan Claude, pierdo mi asistente?', a: 'No. Son instrucciones de texto, no dependen de una versión del motor. Si el modelo nuevo las interpreta algo distinto, afinas el texto, pero no empiezas de cero.' },
      ],
    },
    {
      titulo: 'Los límites, sin maquillar',
      items: [
        { q: '¿Y si se equivoca?', a: 'Pasa: reduce errores, no los elimina. Por eso lo que importa de verdad —un dato, una cifra, una fecha— lo revisas tú antes de enviarlo. El asistente hace el trabajo pesado; la última mirada es tuya.' },
        { q: '¿Esto me convierte en experto en IA?', a: 'No. Te da un asistente que funciona para una tarea concreta. Es la diferencia entre saber conducir y ser mecánico: útil y suficiente, pero otra cosa es el fondo técnico.' },
        { q: '¿Puedo fiarme de que no inventa cosas?', a: 'Puedes reducir mucho las invenciones con una norma ("si no estás seguro, dilo") y contrastando lo que importa con la fuente real. Ayuda bastante, pero no es una garantía.' },
        { q: '¿Sirve para cualquier trabajo?', a: 'Va muy bien para tareas de texto repetitivas: responder mensajes, resumir, explicar, dar formato. Para cálculos al céntimo, usa una hoja de cálculo; para temas legales o médicos, que lo revise un profesional.' },
        { q: '¿Esto es de Anthropic o de Claude?', a: 'No. Es un proyecto independiente, no afiliado a Anthropic. "Claude" es su marca; aquí solo te enseñamos a sacarle partido.' },
      ],
    },
  ],

  cta: { texto: 'Empezar la guía →', href: '/ejemplos' },
};
