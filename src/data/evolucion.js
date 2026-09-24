// ============================================================
// CONTENIDO DE LA PÁGINA EVOLUCIÓN: fuente única de verdad.
// Editar los textos AQUÍ; evolucion.astro solo los coloca.
// 24/09/2026: reescrito. Sigue al resultado, así que va en tú. Se corrige la
// memoria automática: según la ayuda de Claude viene activada por defecto
// también en el plan gratuito, y cada proyecto tiene la suya.
// ============================================================

export const evolucion = {
  meta: {
    title: 'Mejorar con el uso · Tu primer asistente de IA',
    description:
      'Cómo se mejora un asistente después de crearlo: usarlo con casos reales, anotar lo que falla, corregir una cosa cada vez y comprobar que lo demás sigue bien.',
  },

  hero: {
    k: 'Mejorarlo con el uso',
    titulo: 'Tu asistente ya funciona y mejora a medida que lo corriges',
    lead: 'Lo que has creado <b>ya se puede usar</b>. Para que responda cada vez más como tú, hay que <b>usarlo y corregirlo</b> poco a poco. Es la parte que más tiempo lleva y la que más cambia el resultado.',
  },

  lazo: {
    intro: 'El ciclo de mejora',
    eslabones: [
      {
        n: 1,
        titulo: 'Úsalo con casos reales',
        texto: 'Los fallos aparecen al usarlo en tu trabajo diario, no antes.',
      },
      {
        n: 2,
        titulo: 'Anota lo que no te convence',
        texto: '«Esto lo diría de otra forma», «aquí se ha excedido». Apunta el caso y lo que esperabas.',
      },
      {
        n: 3,
        titulo: 'Corrige la instrucción',
        texto: 'Cambia la norma o el ejemplo que provocó la respuesta, o pídele a Claude que te ayude a redactar el cambio.',
      },
      {
        n: 4,
        titulo: 'Comprueba que lo demás sigue bien',
        texto: 'Repite las tres pruebas que te dio la guía al terminar y algún caso que ya funcionaba. Así confirmas que el cambio no ha estropeado nada.',
      },
    ],
    bucle: 'Y el ciclo se repite. Cada vuelta acerca un poco más las respuestas a tu forma de trabajar.',
  },

  notaHonesta: {
    titulo: 'Lleva semanas:',
    texto:
      'Un asistente que responde como tú se consigue en semanas o meses de uso, no en una tarde. Cada corrección que añades se aplica desde ese momento en todas las conversaciones del proyecto.',
  },

  practica: {
    k: 'En la práctica',
    titulo: 'Cómo se corrige un asistente, paso a paso',
    pasos: [
      {
        b: 'Abre tu proyecto en Claude',
        texto: 'Entra en claude.ai, abre el proyecto donde pegaste tu asistente y busca sus instrucciones.',
      },
      {
        b: 'Cambia lo que falló',
        texto: 'Edita en las instrucciones la norma o el ejemplo que no te convenció y guarda. Haz un solo cambio cada vez, porque así sabes cuál de ellos arregló el problema.',
      },
      {
        b: 'Abre una conversación nueva dentro del proyecto',
        texto: 'Repite el mismo caso. Si la respuesta ha mejorado, sigue usándolo. Si no, prueba otro cambio.',
      },
      {
        b: '¿Quieres que tenga en cuenta un dato nuevo?',
        texto:
          'Añádelo a las <b>instrucciones del proyecto</b>. Así queda fijo y lo puedes corregir cuando quieras. Claude tiene además una <b>memoria automática</b>, activada por defecto también en el plan gratuito, que guarda información de las conversaciones y es distinta en cada proyecto. Puedes pedirle «recuerda esto» o revisar lo que guarda en el apartado Memoria de la configuración. Lo que está en las instrucciones, en cambio, solo cambia cuando lo editas tú.',
      },
    ],
  },

  notaAyuda: {
    inicio: '¿Te atascas en algún paso?',
    b: 'Pide ayuda a Claude:',
    texto: 'pégale las instrucciones de tu asistente, explícale qué respuesta no te convence y pídele una propuesta de cambio.',
  },

  // Cierre: recoge las tres piezas y da un primer paso concreto.
  recap: {
    titulo: 'Lo que has construido',
    texto: 'Tu asistente tiene <b>una tarea</b> (qué hace), <b>unas normas</b> (cómo se comporta) y <b>una memoria</b> (qué datos tuyos tiene en cuenta). Mejora cada vez que lo usas y corriges lo que falla.',
    accion: 'Para esta semana: úsalo en un caso real y corrige una sola cosa. Con eso ya has hecho la primera vuelta del ciclo.',
  },

  // Experiencia del proyecto: los ficheros de instrucciones crecen con el uso.
  experiencia: {
    titulo: 'Lo que pasó al montar este proyecto',
    texto: 'Las instrucciones y la memoria de este proyecto empezaron siendo unas pocas líneas. Han crecido con el uso: cada error corregido y cada cosa que no se quería repetir se añadió por escrito. Ninguna versión fue perfecta al principio y no hizo falta que lo fuera.',
  },

  cierre: {
    nota: 'Con el asistente creado y la primera corrección hecha, el nivel 1 está completo. El nivel 2 explica qué hacer cuando una tarea tiene pasos tan distintos que una sola skill los hace mal.',
    btnAtras: { href: '/resultado', texto: '← Atrás' },
    btnInicio: { href: '/', texto: 'Volver al inicio' },
    btnSiguiente: { href: '/nivel-2', texto: 'Siguiente nivel: un enjambre de skills →' },
  },
};
