// ============================================================
// CONTENIDO DE LA PÁGINA GLOSARIO — fuente única de verdad.
// Dos capas: (1) la ESCALERA de cuatro palabras que todo el mundo mezcla
// (prompt → skill → asistente → agente), de menos a más; (2) "más palabras",
// para quien quiera bajar un peldaño técnico, cada una con su analogía.
// Lenguaje llano, honesto. Material de la mina interna (GUIA + registro de enjambres).
// ============================================================

export const glosario = {

  intro: {
    k: 'Cuatro palabras',
    titulo: 'Las palabras que vas a oír',
    sub: 'No hace falta que te las aprendas de memoria. Pero si las entiendes <b>una vez</b>, lo demás encaja. Van de menos a más: cada una contiene a la anterior.',
  },

  terminos: [
    {
      num: 1,
      palabra: 'Prompt',
      corto: 'Lo que le escribes a la IA',
      texto: 'Tu pregunta o tu encargo, escrito en el momento. Es la forma más básica de hablar con una IA, la que ya usa todo el mundo. El inconveniente: se lo tienes que explicar todo otra vez en cada conversación, porque no te recuerda de ayer.',
      frase: 'Le hablas hoy; mañana, vuelta a empezar.',
    },
    {
      num: 2,
      palabra: 'Skill',
      corto: 'Un encargo que escribes una vez y queda guardado',
      texto: 'En vez de repetir la misma instrucción cada día, la escribes <b>una sola vez</b> y la guardas. A partir de ahí, cada vez que abres una conversación en ese proyecto, la IA ya la tiene en cuenta, sin que se la repitas. Es la primera cosa que tu asistente sabe hacer, y es justo lo que vas a crear aquí.',
      frase: 'Lo explicas una vez y sirve siempre.',
    },
    {
      num: 3,
      palabra: 'Asistente',
      corto: 'Tus skills, tus normas y tu memoria',
      texto: 'Cuando a una o varias skills les sumas <b>tus normas</b> (cómo quieres que actúe, siempre) y <b>tu memoria</b> (lo que no quieres repetirle), se convierte en el tuyo. Es el libro que escribes tú, con tu forma de pensar dentro.',
      frase: 'Responde como tú le enseñaste.',
    },
    {
      num: 4,
      palabra: 'Agente',
      corto: 'Un asistente al que dejas dar varios pasos seguidos, dentro de lo que le marcas',
      texto: 'Un asistente responde a lo que le pides. Un agente, además, <b>encadena varios pasos solo</b>: usa herramientas, busca, va completando la tarea hasta el final. Pero no actúa a su aire: <b>lo que puede hacer y lo que no lo deciden su skill, sus normas y su memoria</b> — eso que le diste tú. Hace más cosas seguidas, sí, pero siempre dentro de los límites que le pusiste. Por eso, cuanta más autonomía le das, más importa haber dejado claras esas reglas… y revisar lo que hace.',
      frase: 'Da pasos solo, pero solo los que tú le dejas dar.',
    },
  ],

  // Segunda capa: para quien quiera entender el vocabulario de los niveles 2 y 3.
  mas: {
    titulo: 'Más palabras, por si te pica la curiosidad',
    sub: 'Aparecen cuando hablamos de equipos de skills. No las necesitas para empezar, pero aquí están, dicho fácil.',
    items: [
      { palabra: 'Markdown (.md)', def: 'Un archivo de texto normal con unas marcas muy simples para dar formato: una almohadilla (#) delante de un título, guiones para las listas, asteriscos para la negrita. Nada de Word ni botones, solo texto que se lee tal cual. Su terminación es .md, y es el formato en el que se escriben las instrucciones porque es el que la IA entiende mejor.', analogia: 'Como una nota a mano con guiones y subrayados: se entiende de un vistazo y la abre cualquiera, sin programas especiales.' },
      { palabra: 'CLAUDE.md', def: 'Las normas de siempre de tu asistente: cómo habla y qué no hace nunca, en cualquier tarea. Es un archivo Markdown (de ahí el .md). Solo te topas con este nombre si algún día usas la herramienta de ordenador; en claude.ai no te hace falta.', analogia: 'Las normas pegadas en la nevera: quien entra a trabajar contigo las ve desde el primer día.' },
      { palabra: 'Memoria', def: 'Lo que ya escribiste sobre ti en las instrucciones: el asistente lo lee en cada conversación y no te lo vuelve a preguntar. Crece cuando tú decides añadirle algo nuevo, no por su cuenta.', analogia: 'Como una ficha que rellenas tú y dejas sobre la mesa: quien la lee ya sabe quién eres, pero la escribiste tú; no se rellena sola.' },
      { palabra: 'Modelo (Opus · Sonnet · Haiku)', def: 'El motor que entiende lo que escribes y genera la respuesta. Hay tres tallas, de más potente a más ágil.', analogia: 'Motores de coche: uno de carreras, uno fiable para el día a día y uno ligero para recados.' },
      { palabra: 'Arnés (en inglés, «harness»)', def: 'Todo lo que rodea al modelo y hace que trabaje bien: la skill, las normas (CLAUDE.md), la memoria, un encargo bien escrito y la forma de usarlo. El modelo es solo el motor; el arnés es lo que lo dirige y lo sujeta. En la práctica marca más la diferencia que cambiar de motor: el mismo modelo, con un buen arnés alrededor, responde mucho mejor. Es, en el fondo, lo que montas aquí sin ponerle ese nombre.', analogia: 'Un motor de carreras suelto en el suelo no gana nada: hacen falta chasis, dirección, frenos y alguien que conduzca. El arnés es todo eso; el modelo, solo el motor.' },
      { palabra: 'Entrenar (no es lo que haces aquí)', def: 'Mejorar tu asistente no es «entrenar» a la IA. No tocas el motor (el modelo); lo que cambias son las instrucciones que él vuelve a leer en cada conversación. Por eso una mejora se nota al momento y la puedes deshacer cuando quieras: has cambiado una nota, no has reprogramado nada por dentro.', analogia: 'No es enseñar a un empleado durante meses; es reescribir la nota que tiene pegada en la mesa. La vuelve a leer cada mañana y actúa según lo que ponga.' },
      { palabra: 'Orquestador', def: 'La skill que recibe el encargo y lo manda al especialista que toca. Reparte el trabajo entre ellos.', analogia: 'La centralita de una clínica: escucha el problema y te pasa al médico correcto.' },
      { palabra: 'Enjambre', def: 'Un grupo de skills encadenadas que resuelven juntas algo que ninguna podría sola.', analogia: 'Una cadena de montaje: cada estación hace su parte y sale el producto acabado.' },
      { palabra: 'Verificador independiente', def: 'Un segundo agente cuyo único trabajo es buscar el error del primero antes de que alguien actúe.', analogia: 'El corrector de un periódico que no escribió el artículo: su trabajo es pillar lo que se le escapó.' },
      { palabra: 'Verificación por código', def: 'Una comprobación que hace un programa, no la IA, y que siempre da el mismo resultado: cuadra o no cuadra.', analogia: 'La báscula del mercado: no pregunta si parece 200 gramos, lo pesa.' },
      { palabra: 'Contexto', def: 'Todo lo que el asistente tiene delante en una conversación. Cuando se llena, lo primero empieza a difuminarse.', analogia: 'Tu memoria en una reunión larga: lo de hace cinco minutos lo tienes fresco; lo de hace dos horas, ya no tanto.' },
    ],
  },

  cierre: {
    negrita: 'Aquí empiezas por la base: una skill.',
    texto: ' Lo demás (el asistente, el equipo) se construye encima, con el tiempo y con tus respuestas. Por eso no necesitas entenderlo todo hoy.',
  },

  cta: {
    texto: 'Empezar por una skill →',
    sub: 'Por aquí se empieza: por tu primera skill.',
    href: '/ejemplos',
  },

};
