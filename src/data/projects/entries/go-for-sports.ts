// src/data/projects/entries/go-for-sports.ts
import { localizedText } from '../types';
import type { ProjectInput } from '../types';

const media = '/images/projects/2023-24/interaccion-persona-maquina-y-usabilidad/go-for-sports';

export const goForSports: ProjectInput = {
    slug: 'go-for-sports',
    year: 2024,
    academicYear: '2023-24',
    context: 'grado',
    type: 'Proyecto de la Universidad',
    title: 'Go For Sports',
    description: 'Prototipo individual en Figma de un juego educativo de preguntas sobre deportes. Combina un apartado de teoría con dos modos de juego, "Chut a portería" y "Cuarto de partido", y se diseñó a partir de entrevistas y pruebas con seis usuarios.',
    challenges: 'Diseñar una experiencia accesible y fácil de seguir para perfiles de usuario distintos, con feedback claro al acertar y al fallar.',
    solution: 'Entrevisté y probé el prototipo con seis usuarios y usé sus respuestas para tomar decisiones de diseño. Construí dos modos de juego con navegación interactiva, reintentos tras cada fallo y transiciones entre pantallas.',
    highlights: [
      localizedText('🎨 Prototipo interactivo completo en Figma', '🎨 Complete interactive prototype in Figma'),
      localizedText('👥 Entrevistas y pruebas con seis usuarios', '👥 Interviews and testing with six users'),
      localizedText('🎯 Dos modos de juego: "Chut a portería" y "Cuarto de partido"', '🎯 Two game modes: "Shot on goal" and "Game quarter"'),
      localizedText('📚 Apartado de teoría previo a las preguntas', '📚 Theory section before the questions'),
      localizedText('♿ Opciones de volumen, brillo y modo oscuro', '♿ Volume, brightness and dark mode options'),
    ],
    story: [
      {
        kind: 'context',
        icon: 'school',
        text: localizedText(
          'Práctica extraordinaria de Interacción Persona-Máquina y Usabilidad, realizada en solitario. Consistía en diseñar y prototipar una aplicación centrada en el usuario, y fue mi primer trabajo con Figma.',
          'Retake assignment for the Human-Computer Interaction and Usability course, done on my own. It consisted of designing and prototyping a user-centered application, and it was my first project with Figma.'
        ),
      },
      {
        kind: 'objective',
        icon: 'target',
        text: localizedText(
          'Crear un juego de preguntas sobre deportes que ayudara a ampliar el conocimiento deportivo, con una parte de teoría previa a las preguntas y una interfaz comprensible para distintos perfiles de usuario.',
          'Create a sports quiz game that helps users expand their sports knowledge, with a theory section before the questions and an interface understandable to different user profiles.'
        ),
      },
      {
        kind: 'implementation',
        icon: 'deployed_code',
        text: localizedText(
          'Preparé unos apuntes de deportes que sirvieron de base para la teoría y las preguntas, y diseñé en Figma todas las pantallas y las interacciones. En "Chut a portería" se responde entre cuatro opciones frente a una portería; en "Cuarto de partido" hay que acertar entre dos opciones en un tiempo limitado lanzando a canasta. Entrevisté y probé el prototipo con seis usuarios y recogí todo el proceso en una memoria de más de 80 páginas.',
          'I prepared sports notes that served as the basis for the theory and the questions, and designed all the screens and interactions in Figma. In "Shot on goal" you answer among four options in front of a goal; in "Game quarter" you must pick between two options within a time limit by shooting at a basket. I interviewed and tested the prototype with six users and documented the whole process in a report of more than 80 pages.'
        ),
      },
      {
        kind: 'learning',
        icon: 'insights',
        text: localizedText(
          'Al ser mi primer proyecto con Figma, tuve que aprender desde cero el prototipado interactivo, el uso de plugins y la exportación de recursos.',
          'As my first project with Figma, I had to learn interactive prototyping, plugin usage and asset export from scratch.'
        ),
      },
    ],
    skillGains: [
      localizedText('Prototipado interactivo en Figma', 'Interactive prototyping in Figma'),
      localizedText('Plugins y exportación de recursos en Figma', 'Figma plugins and asset export'),
      localizedText('Entrevistas y pruebas con usuarios', 'User interviews and testing'),
      localizedText('Principios de usabilidad y accesibilidad', 'Usability and accessibility principles'),
    ],
    en: {
      title: 'Go For Sports',
      description: 'Individual Figma prototype of an educational sports quiz game. It combines a theory section with two game modes, "Shot on goal" and "Game quarter", and was designed from interviews and tests with six users.',
      challenges: 'Designing an accessible, easy-to-follow experience for different user profiles, with clear feedback on right and wrong answers.',
      solution: 'I interviewed and tested the prototype with six users and used their answers to make design decisions. I built two game modes with interactive navigation, retries after every miss and transitions between screens.',
      role: 'UX/UI Designer',
      team: 'Personal academic project - Individual',
      duration: '3 months',
      learnings: 'It was my first project with Figma: I learned to prototype interactions, use plugins and export assets. I also interviewed and tested the prototype with six users.',
    },
    tags: ['UX', 'UI', 'Figma'],
    subjects: ['Interacción Persona-Máquina y Usabilidad'],
    disciplines: ['ux-ui', 'videojuegos'],
    technologies: [
      { name: 'Figma', level: 'principal' },
      { name: 'UX Research', level: 'secundaria' },
      { name: 'Prototyping', level: 'secundaria' },
    ],
    featured: false,
    status: 'completado',
    coverImage: `${media}/goforsports_portada.webp`,
    gallery: [
      { type: 'image', src: `${media}/goforsports1.webp`, alt: 'Menú principal de Go For Sports con las opciones Jugar, Teoría, Conócenos y Salir' },
      { type: 'image', src: `${media}/goforsports2.webp`, alt: 'Selección de modo de juego: Chut a portería o Cuarto de partido' },
      { type: 'image', src: `${media}/goforsports3.webp`, alt: 'Pantalla para elegir tema: deportes clásicos u otros deportes' },
      { type: 'image', src: `${media}/deportes-clasicos.webp`, alt: 'Pantalla de la categoría de deportes clásicos' },
      { type: 'image', src: `${media}/deportes-poco-comunes.webp`, alt: 'Pantalla de la categoría de deportes poco comunes' },
      { type: 'image', src: `${media}/aprendizaje.webp`, alt: 'Pantalla del apartado de aprendizaje' },
      { type: 'image', src: `${media}/teoria-baloncesto.webp`, alt: 'Ficha de teoría de baloncesto' },
      { type: 'image', src: `${media}/teoria-boxeo.webp`, alt: 'Ficha de teoría de boxeo' },
      { type: 'image', src: `${media}/teoria-karate.webp`, alt: 'Ficha de teoría de kárate' },
      { type: 'image', src: `${media}/teoria-natacion.webp`, alt: 'Ficha de teoría de natación' },
      { type: 'image', src: `${media}/chut-a-porteria-info.webp`, alt: 'Pantalla informativa con las reglas del modo Chut a portería' },
      { type: 'image', src: `${media}/goforsports6.webp`, alt: 'Pregunta con cuatro opciones frente a la portería en el modo Chut a portería' },
      { type: 'image', src: `${media}/juego-r1-1.webp`, alt: 'El portero detiene el balón en el modo Chut a portería' },
      { type: 'image', src: `${media}/juego-p1-rm-1.webp`, alt: 'Mensaje de ánimo para reintentar la pregunta tras un fallo' },
      { type: 'image', src: `${media}/cuarto-de-partido-info.webp`, alt: 'Pantalla informativa con las reglas del modo Cuarto de partido' },
      { type: 'image', src: `${media}/goforsports5.webp`, alt: 'Pregunta con dos canastas y marcador en el modo Cuarto de partido, con el balón entrando en la canasta' },
      { type: 'image', src: `${media}/juego-e1.webp`, alt: 'Fallo en Cuarto de partido: el balón no entra y el marcador indica error' },
      { type: 'image', src: `${media}/juego-c1.webp`, alt: 'Mensaje de acierto con acceso a una explicación en Cuarto de partido' },
      { type: 'image', src: `${media}/evaluacion.webp`, alt: 'Pantalla de evaluación' },
      { type: 'image', src: `${media}/fueradetiempo.webp`, alt: 'Pantalla de tiempo agotado' },
      { type: 'image', src: `${media}/goforsports4.webp`, alt: 'Menú de opciones con volumen, anotaciones, modo oscuro y brillo' },
      { type: 'image', src: `${media}/desktop---1.webp`, alt: 'Ajuste de volumen con cuatro niveles, incluido silencio' },
      { type: 'image', src: `${media}/opciones-brillo.webp`, alt: 'Ajuste del brillo de la aplicación' },
      { type: 'image', src: `${media}/opciones-noche.webp`, alt: 'Opciones con el modo oscuro activado' },
    ],
    galleryConfig: { columns: 3, layout: 'masonry' },
    resources: [
      { type: 'link', url: 'https://www.figma.com/proto/DNh3kjMxe65IOn76iNjAn7/GoForSports-IPM-V2.0?page-id=0%3A1&node-id=13-24&starting-point-node-id=13%3A24&t=PuG1OyKWfUUYBTge-1', title: 'Prototipo' },
    ],
    role: 'Diseñador UX/UI',
    team: 'Proyecto académico personal - Individual',
    duration: '3 meses',
    learnings: 'Fue mi primer proyecto con Figma: aprendí a prototipar interacciones, usar plugins y exportar recursos. También entrevisté y probé el prototipo con seis usuarios.',
  };
