// src/data/projects/entries/gorobeia.ts
import { localizedText } from '../types';
import type { ProjectInput } from '../types';

const media = '/images/projects/2023-24/personajes-y-escenarios/gorobeia';

export const gorobeia: ProjectInput = {
    slug: 'gorobeia',
    year: 2024,
    academicYear: '2023-24',
    context: 'grado',
    type: 'Proyecto de la Universidad',
    title: 'Gorobeia',
    description: 'Concept art individual de un videojuego ficticio en el que Gorak defiende a su tribu. Incluye el diseño del personaje y de dos escenarios, con siluetas, color, expresiones, props y el proceso de layouts y thumbnails.',
    challenges: 'Representar con claridad las expresiones faciales y las emociones del protagonista, y mantener un estilo coherente entre personaje y escenarios.',
    solution: 'Partí de referencias y pruebas, trabajé el personaje desde las siluetas hasta el color y las expresiones, y construí los escenarios a partir de un layout y thumbnails, estudiando la profundidad con valores antes de pasar a color.',
    highlights: [
      localizedText('🧌 Diseño completo del protagonista: siluetas, color, turnarounds y expresiones', '🧌 Complete protagonist design: silhouettes, color, turnarounds and expressions'),
      localizedText('🏘️ Dos escenarios: Ruinas y Pueblo, con props y hoja de callouts', '🏘️ Two environments: Ruins and Village, with props and a callouts sheet'),
      localizedText('🎬 Proceso visible: layouts, thumbnails y estudios de valores', '🎬 Visible process: layouts, thumbnails and value studies'),
      localizedText('📄 Dos documentos de concept art: personaje y escenario', '📄 Two concept art documents: character and environment'),
    ],
    story: [
      {
        kind: 'context',
        icon: 'school',
        text: localizedText(
          'Trabajo individual de la asignatura Personajes y Escenarios: el concept art de un videojuego ficticio. La idea, el personaje, los escenarios y el arte son míos.',
          'Individual project for the Characters and Scenarios course: concept art for a fictional video game. The idea, the character, the environments and the art are all mine.'
        ),
      },
      {
        kind: 'objective',
        icon: 'flag',
        text: localizedText(
          'Diseñar el concepto visual de Gorobeia, un mundo de fantasía en el que Gorak defiende a su tribu: un protagonista reconocible y escenarios que refuercen su ambientación.',
          'Design the visual concept of Gorobeia, a fantasy world where Gorak defends his tribe: a recognizable protagonist and environments that reinforce its setting.'
        ),
      },
      {
        kind: 'implementation',
        icon: 'deployed_code',
        text: localizedText(
          'Recopilé referencias, hice pruebas y dibujé en Photoshop con tableta Huion. Con Gorak empecé por siluetas y proporciones y pasé al color, los turnarounds y las expresiones. Los escenarios parten de un layout y siete thumbnails, con estudios de profundidad mediante valores, un mapa y zonas detalladas, y acaban en dos ilustraciones finales, Ruinas y Pueblo, más una hoja de callouts.',
          'I gathered references, ran tests and drew in Photoshop with a Huion tablet. With Gorak I started from silhouettes and proportions and moved on to color, turnarounds and expressions. The environments start from a layout and seven thumbnails, with depth studies using values, a map and detailed zones, and end in two final illustrations, Ruins and Village, plus a callouts sheet.'
        ),
      },
      {
        kind: 'learning',
        icon: 'insights',
        text: localizedText(
          'Lo más difícil fueron las expresiones faciales: transmitir emociones distintas con un personaje de rasgos simples exigió muchas pruebas.',
          'The hardest part was facial expressions: conveying different emotions with a character of simple features took many tests.'
        ),
      },
    ],
    skillGains: [
      localizedText('Ilustración digital en Photoshop con tableta', 'Digital illustration in Photoshop with a drawing tablet'),
      localizedText('Diseño de personajes: siluetas, color y expresiones', 'Character design: silhouettes, color and expressions'),
      localizedText('Diseño de escenarios: layouts, thumbnails y valores', 'Environment design: layouts, thumbnails and values'),
      localizedText('Documentación de concept art', 'Concept art documentation'),
    ],
    tags: ['Ilustración', 'Concept Art', 'Photoshop'],
    subjects: ['Personajes y Escenarios'],
    disciplines: ['ilustracion'],
    technologies: [
      { name: 'Photoshop', level: 'principal' },
      { name: 'Tableta Huion', level: 'secundaria' },
    ],
    featured: false,
    status: 'completado',
    coverImage: `${media}/gorobeia_portada.png`,
    gallery: [
      { type: 'image', src: `${media}/gorobeia1.png`, alt: 'Ilustración final de Gorak, un trasgo verde con maillot rojo de halterofilia, flexionando los brazos ante una barra' },
      { type: 'image', src: `${media}/personaje-beauty.png`, alt: 'Concept art "beauty" del personaje Gorak' },
      { type: 'image', src: `${media}/personaje-pose.png`, alt: 'Estudio de pose de Gorak' },
      { type: 'image', src: `${media}/personaje-acciones.png`, alt: 'Hoja de acciones de Gorak' },
      { type: 'image', src: `${media}/escenario-beauty_p1.png`, alt: 'Concept art del escenario Ruinas' },
      { type: 'image', src: `${media}/escenario-beauty_p2.png`, alt: 'Concept art del escenario Pueblo' },
      { type: 'image', src: `${media}/gorobeia6.png`, alt: 'Ilustración del pueblo con casas de madera y piedra, un pozo, un horno y montañas al fondo' },
      { type: 'image', src: `${media}/escenario-props.png`, alt: 'Hoja de props del escenario' },
      { type: 'image', src: `${media}/escenario-layout-1.png`, alt: 'Layout del escenario Selva de Gorbeia' },
      { type: 'image', src: `${media}/escenario-layout-1-leyenda.png`, alt: 'Layout del escenario con leyenda de zonas' },
      { type: 'image', src: `${media}/escenario-thumbnail1.png`, alt: 'Thumbnail 1 del escenario' },
      { type: 'image', src: `${media}/escenario-thumbnail3.png`, alt: 'Thumbnail 3 del escenario' },
      { type: 'image', src: `${media}/escenario-thumbnail5.png`, alt: 'Thumbnail 5 del escenario' },
      { type: 'image', src: `${media}/escenario-thumbnail7.png`, alt: 'Thumbnail 7 del escenario' },
      { type: 'image', src: `${media}/gorobeia8.png`, alt: 'Turnaround de Gorak: vista frontal, lateral y trasera' },
      { type: 'image', src: `${media}/personaje-turnaroundvestimenta.png`, alt: 'Turnaround de Gorak con vestimenta' },
      { type: 'image', src: `${media}/personaje-turnarounddesnudo.png`, alt: 'Turnaround de Gorak sin vestimenta, para estudiar las proporciones' },
      { type: 'image', src: `${media}/gorobeia4.png`, alt: 'Estudio en blanco y negro del rostro de Gorak con expresión neutra' },
      { type: 'image', src: `${media}/gorobeia5.png`, alt: 'Estudio en blanco y negro del rostro de Gorak enfadado' },
      { type: 'image', src: `${media}/personaje-felicidad.png`, alt: 'Expresión de felicidad de Gorak' },
      { type: 'image', src: `${media}/personaje-enfado.png`, alt: 'Expresión de enfado de Gorak' },
      { type: 'image', src: `${media}/personaje-triste.png`, alt: 'Expresión de tristeza de Gorak' },
      { type: 'image', src: `${media}/personaje-preocupacion.png`, alt: 'Expresión de preocupación de Gorak' },
      { type: 'image', src: `${media}/gorobeia2.png`, alt: 'Gorak con piel azul grisácea y maillot azul, variante de color' },
      { type: 'image', src: `${media}/gorobeia3.png`, alt: 'Gorak con piel marrón y maillot turquesa, variante de color' },
      { type: 'image', src: `${media}/personaje-opc1.png`, alt: 'Opción de color 1 de Gorak' },
      { type: 'image', src: `${media}/personaje-opc3.png`, alt: 'Opción de color 3 de Gorak' },
      { type: 'image', src: `${media}/personaje-sombras1.png`, alt: 'Estudio de sombras de Gorak, versión 1' },
      { type: 'image', src: `${media}/personaje-sombras3.png`, alt: 'Estudio de sombras de Gorak, versión 3' },
    ],
    galleryConfig: { columns: 3, layout: 'masonry' },
    resources: [
      { type: 'pdf', url: `${media}/concept-art-escenario.pdf`, title: 'Concept art de escenario (PDF)' },
      { type: 'pdf', url: `${media}/concept-personaje.pdf`, title: 'Concept art de personaje (PDF)' },
    ],
    role: 'Ilustrador y diseñador conceptual',
    team: 'Proyecto académico personal - Individual',
    duration: '2 meses',
    learnings: 'Lo más difícil fueron las expresiones faciales y las emociones del protagonista. Trabajé el diseño desde las siluetas hasta el color y estudié la profundidad de los escenarios con valores.',
  };
