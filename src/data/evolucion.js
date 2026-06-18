// ============================================================
// CONTENIDO DE LA PÁGINA EVOLUCIÓN — fuente única de verdad.
// Editar los textos AQUÍ; evolucion.astro solo los coloca.
// ============================================================

export const evolucion = {
  meta: {
    title: 'Mejorar con el tiempo — Tu primer asistente de IA',
    description:
      'La parte más larga y la más importante: usar tu asistente, detectar lo que falla y hacerlo mejorar, poco a poco.',
  },

  hero: {
    k: 'La evolución',
    titulo: 'Ya lo tienes funcionando. Ahora, a mejorarlo',
    lead: 'Lo que tienes hoy <b>ya funciona</b>: puedes usarlo desde ya. Y si quieres que llegue a conocerte a fondo, eso se gana <b>usándolo y afinándolo</b> poco a poco, sin prisa. Es la parte más larga y la más importante.',
  },

  lazo: {
    intro: 'La cadena de mejora',
    eslabones: [
      {
        n: 1,
        titulo: 'Úsalo a diario',
        texto: 'En tu día a día, con casos reales. Ahí salen las cosas, no antes.',
      },
      {
        n: 2,
        titulo: 'Detecta lo que no te cuadra',
        texto: '"Esto lo diría de otra forma", "aquí se ha pasado". Apúntalo.',
      },
      {
        n: 3,
        titulo: 'Dile qué falló y por qué',
        texto: 'Vuelves, se lo explicas, y ajustáis la norma o el ejemplo.',
      },
      {
        n: 4,
        titulo: 'Comprueba que lo bueno sigue bien',
        texto: 'Al cambiar algo, mira que no se haya roto lo que ya iba fino.',
      },
    ],
    bucle: '↻ Y vuelta a empezar. Cada vuelta, un poco más tuyo.',
  },

  notaHonesta: {
    titulo: 'Esto va poco a poco:',
    // F9 corregido: la vía universal es "Instrucciones del proyecto"; la memoria automática solo como plus si el plan la tiene.
    texto:
      'Un asistente que te conoce bien se construye con el tiempo, semanas y meses, igual que una relación. No hay atajo: es dedicación. Pero cada rato que le dedicas cuenta.',
  },

  practica: {
    k: 'Cómo se hace, en la práctica',
    titulo: 'Mejorar tu asistente, paso a paso',
    // F9 corregido: paso 4 reescrito — vía universal = Instrucciones del proyecto; memoria automática solo como plus.
    pasos: [
      {
        b: 'Abre tu Proyecto en Claude',
        texto: 'Entra en "Instrucciones del proyecto" (donde pegaste tu asistente).',
      },
      {
        b: 'Edita lo que falló',
        texto: 'En claude.ai, abre tu Proyecto y entra en "Instrucciones del proyecto" (el campo donde pegaste tu asistente). Cambia ahí la norma o el ejemplo que no te cuadró y guarda. Un cambio cada vez: así sabes qué lo arregló.',
      },
      {
        b: 'Abre un chat nuevo dentro del Proyecto',
        texto: 'Vuelve a probar ese mismo caso. ¿Mejor? Sigue. ¿Igual? Prueba otro ajuste.',
      },
      {
        b: '¿Quieres que recuerde algo nuevo?',
        // F9 — vía universal: añadir a Instrucciones del proyecto (funciona siempre).
        // La memoria automática se menciona solo como plus, no como única vía.
        texto:
          'Añádelo directamente a las <b>Instrucciones del proyecto</b>: es la vía universal, funciona en todos los planes. Algunos planes de pago tienen además una "memoria automática" (Claude guarda recuerdos de tus conversaciones sin que los añadas a mano); si la tienes, úsala como complemento, pero lo que pones en las Instrucciones siempre está.',
      },
    ],
  },

  notaAyuda: {
    inicio: '¿Te atascas en algún momento?',
    b: 'Pídele ayuda a tu propia IA:',
    texto: 'pégale tu asistente, dile qué falla, y te ayuda a afinarlo. Para eso está.',
  },

  // Cierre consolidador (#7): el recorrido no recogía las 3 piezas al final.
  // Este recap recuerda qué se llevó el usuario y le da un primer paso concreto.
  recap: {
    titulo: 'Lo que te llevas',
    texto: 'Tu asistente tiene <b>una tarea</b> (qué hace), <b>unas normas</b> (cómo se comporta) y <b>una memoria</b> (lo que recuerda de ti). Y mejora cuando lo usas y le vas corrigiendo, poco a poco.',
    accion: 'Esta semana: úsalo en un caso real y ajústale una sola cosa. Con eso ya estás en la rueda de mejora.',
  },

  // Voz "nuestra experiencia" (#2): los archivos crecen con el uso; a este proyecto le pasó.
  experiencia: {
    titulo: 'Lo que vimos montándolo',
    texto: 'Las instrucciones y la memoria de este mismo proyecto empezaron siendo cuatro líneas. Hoy son bastante más: han ido creciendo a base de usarlas, corregir lo que fallaba y anotar lo que no queríamos repetir. No nacieron perfectas — ninguna nace así, y tampoco hace falta.',
  },

  cierre: {
    nota: 'Esta guía cubre el primer nivel. Si quieres ir más allá, los niveles 2 y 3 están en sus secciones.',
    btnAtras: { href: '/resultado', texto: '← Atrás' },
    btnInicio: { href: '/', texto: 'Volver al inicio →' },
  },
};
