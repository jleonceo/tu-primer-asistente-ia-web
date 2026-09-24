// ============================================================
// CONTENIDO "PREGUNTAS" (FAQ): fuente única de verdad.
// Preguntas habituales de gente no técnica, agrupadas por tema.
// Material: GUIA v0.12 + informes de sesión.
// 24/09/2026: revisada desde lo que el lector necesita entender (títulos, causas, antítesis y remates).
// 24/09/2026: reescrito con el registro de la guía de estilo del proyecto. Contrastado con la
// ayuda oficial de Claude: hasta cinco proyectos en el plan gratuito, memoria
// activada por defecto y el ajuste de entrenamiento en los planes gratuito,
// Pro y Max. Las preguntas van en primera persona porque son de quien lee;
// las respuestas, en impersonal.
// ============================================================

export const preguntas = {
  meta: {
    title: 'Preguntas · Tu primer asistente de IA',
    description: 'Las preguntas más habituales antes de empezar: si hace falta programar, qué pasa con los datos, cómo mejora un asistente y cuáles son sus límites.',
  },

  hero: {
    k: 'Preguntas',
    titulo: 'Las preguntas más habituales antes de empezar',
    lead: 'Están agrupadas por tema: a quién sirve la guía, qué pasa con los datos, cómo funciona un asistente por dentro, cómo mejora y qué límites tiene.',
  },

  grupos: [
    {
      titulo: '¿Me sirve esta guía?',
      items: [
        { q: '¿Necesito saber programar?', a: 'No. Todo se escribe en lenguaje normal. Quien sabe explicarle su trabajo a un compañero nuevo tiene lo necesario para escribir estas instrucciones.' },
        { q: '¿Cuánto se tarda en tener algo que funcione?', a: 'Con las cuatro preguntas del primer paso sale un borrador en una sola sesión. Un asistente que responda como quien lo usa lleva más tiempo, porque se ajusta con el uso.' },
        { q: '¿Cuánto cuesta?', a: 'Esta web es gratuita. Para guardar el asistente hace falta una cuenta en claude.ai. El plan gratuito basta para todo lo que se explica aquí.' },
        { q: '¿Hay que instalar algo?', a: 'No. Todo se hace en el navegador, primero en esta web y después en claude.ai.' },
      ],
    },
    {
      titulo: 'Los datos y la privacidad',
      items: [
        { q: '¿Qué pasa con mis datos?', a: 'Lo que se escribe en esta web se queda en el navegador y no se envía a ningún sitio. Lo que después se pega o se escribe en Claude pasa por los servidores de Anthropic. Por eso no conviene incluir contraseñas ni datos sensibles.' },
        { q: '¿Me pueden copiar el asistente?', a: 'Las instrucciones quedan en la cuenta de quien las crea y no son públicas salvo que se compartan.' },
        { q: '¿La IA aprende de lo que escribo y se lo enseña a otros?', a: 'Lo que se escribe en una conversación no se muestra a otros usuarios. En los planes gratuito, Pro y Max, Anthropic puede usar las conversaciones para mejorar sus modelos si ese ajuste está activado. Se puede desactivar en la configuración de privacidad de la cuenta. Aun así, los datos confidenciales de terceros, como clientes con nombre o contratos firmados, es mejor no escribirlos.' },
      ],
    },
    {
      titulo: 'Cómo funciona por dentro',
      items: [
        { q: '¿Qué diferencia hay entre la skill, las normas y la memoria?', a: 'La skill es la tarea que se le encarga. Las normas dicen cómo tiene que comportarse en cualquier tarea. La memoria son los datos de quien lo usa. Con la skill sola ya funciona. Las otras dos acercan las respuestas a su forma de trabajar.' },
        { q: '¿Cómo tiene en cuenta la IA lo que le he enseñado?', a: 'Al abrir una conversación dentro del proyecto, Claude lee las instrucciones del proyecto antes de responder. Por eso se aplican siempre sin tener que repetirlas.' },
        { q: '¿En qué se diferencia de pedirle cosas a la IA como siempre?', a: 'Una petición suelta solo lleva el contexto que se escribe en ese momento. Un asistente tiene guardadas la tarea, las normas y los datos de quien lo usa. Los aplica en cada conversación sin que haya que repetirlos.' },
        { q: '¿Puedo tener varios asistentes?', a: 'Sí. Cada proyecto de Claude puede tener su propio asistente para una tarea distinta. Con la cuenta gratuita se pueden crear hasta cinco proyectos, aunque esa cifra la fija Anthropic y puede cambiar.' },
        { q: '¿Puedo usar lo que preparo como una skill de Claude?', a: 'Sí. Al terminar el recorrido, la web descarga la tarea y las normas como skill, en un .zip que se sube en Personalizar > Skills con la ejecución de código activada. La skill se carga sola cuando lo que se pide encaja con su descripción. Los datos de quien la usa no van en ella, porque solo se carga con esa tarea y los datos hacen falta en todas.' },
        { q: '¿Y si no encuentro los proyectos en Claude?', a: 'Están en el menú de la izquierda y también en claude.ai/projects. Si aun así no aparecen, el texto del asistente se puede guardar en un archivo y pegarlo al principio de cada conversación. Es más manual, pero el resultado es el mismo.' },
      ],
    },
    {
      titulo: 'Cómo mejora con el tiempo',
      items: [
        { q: '¿Mejora solo o tengo que hacer algo?', a: 'Las instrucciones solo cambian cuando se editan. Cuando el asistente hace algo mal, se vuelve al texto, se añade una norma que lo evite y a partir de ahí se aplica en cada respuesta. Después de cada cambio conviene repetir las tres pruebas que propone la web al terminar, para comprobar que lo demás sigue bien. La memoria automática de Claude guarda además información de las conversaciones. Conviene revisar de vez en cuando lo que ha guardado.' },
        { q: '¿Cuándo se nota que el asistente responde como yo?', a: 'Cuando tiene ejemplos reales del trabajo de quien lo usa y sabe qué no puede hacer nunca. Suele hacer falta corregirlo un par de veces.' },
        { q: '¿Si actualizan Claude, pierdo mi asistente?', a: 'No. Son instrucciones de texto y no dependen de un modelo concreto. Si un modelo nuevo las interpreta de otra forma, se ajusta el texto sin empezar de cero.' },
      ],
    },
    {
      titulo: 'Los límites',
      items: [
        { q: '¿Y si se equivoca?', a: 'Se equivocará a veces: las instrucciones reducen los errores, pero no los eliminan. Por eso las cifras, los datos y las fechas que importan los revisa una persona antes de enviarlos.' },
        { q: '¿Esto me convierte en experto en IA?', a: 'No. Sirve para tener un asistente que funciona en una tarea concreta. Se parece a la diferencia entre saber conducir y saber reparar un motor.' },
        { q: '¿Puedo fiarme de que no inventa cosas?', a: 'Las invenciones se reducen mucho con una norma como «si no estás seguro, dilo» y comprobando lo importante en su fuente. Esa norma ayuda, aunque no garantiza que no invente nada.' },
        { q: '¿Sirve para cualquier trabajo?', a: 'Funciona bien en tareas de texto repetitivas: responder mensajes, resumir, explicar o dar formato. Los cálculos exactos se hacen mejor en una hoja de cálculo. Los temas legales o médicos tiene que revisarlos un profesional.' },
        { q: '¿Esta web es de Anthropic?', a: 'No. Es un proyecto independiente, sin relación con Anthropic. Claude es una marca de Anthropic. Esta web solo explica cómo usarlo.' },
      ],
    },
  ],

  cta: { texto: 'Empezar la guía →', href: '/ejemplos' },
};
