// src/data/projects/entries/go-for-sports.ts
import { localizedText } from '../types';
import type { ProjectInput } from '../types';

export const goForSports: ProjectInput = {
    slug: 'go-for-sports',
    year: 2024,
    academicYear: '2023-24',
    context: 'grado',
    type: 'Proyecto de la Universidad',
    title: 'Go For Sports',
    description: 'Videojuego de preguntas sobre deportes creado con Figma. Diseñado con enfoque en accesibilidad y usabilidad, basado en entrevistas y pruebas con usuarios reales.',
    challenges: 'Diseñar una experiencia accesible para diferentes perfiles de usuario. Implementar un sistema de preguntas dinámico y atractivo que combine aprendizaje y evaluación.',
    solution: 'Realicé entrevistas y pruebas con usuarios de diferentes edades y niveles de conocimiento. Diseñé un sistema de preguntas con dos modos de juego: "Chut a portería" y "Cuarto de partido", garantizando accesibilidad en todo momento.',
    highlights: [
      localizedText('🎨 Prototipado en Figma con testing real', '🎨 Figma prototyping with real user testing'),
      localizedText('📱 Diseño responsive para móvil y escritorio', '📱 Responsive design for mobile and desktop'),
      localizedText('🎯 Dos modos de juego: Chut y Cuarto', '🎯 Two game modes: Shot and Quarter'),
      localizedText('♿ Enfoque en accesibilidad y usabilidad', '♿ Focus on accessibility and usability'),
    ],
    story: [
      {
        kind: 'context',
        icon: 'school',
        text: localizedText(
          'Proyecto para la asignatura Interacción Persona-Máquina y Usabilidad. La idea era crear un prototipo de aplicación tipo quiz con enfoque en accesibilidad. Tras suspender en ordinaria, lo desarrollé en individual para extraordinaria.',
          'Project for the Human-Computer Interaction and Usability course. The idea was to create a quiz-style application prototype with a focus on accessibility. After failing the regular exam, I developed it individually for the extraordinary exam.'
        ),
      },
      {
        kind: 'objective',
        icon: 'target',
        text: localizedText(
          'Crear un videojuego de preguntas sobre deportes que fuera accesible para todos los públicos, con un sistema de aprendizaje previo a la evaluación. Diseñar dos modos de juego dinámicos y atractivos.',
          'Create a sports quiz video game that was accessible to all audiences, with a learning system prior to evaluation. Design two dynamic and engaging game modes.'
        ),
      },
      {
        kind: 'implementation',
        icon: 'deployed_code',
        text: localizedText(
          'Diseñé el prototipo en Figma, realicé pruebas con usuarios y apliqué principios de usabilidad. Desarrollé dos modos de juego: "Chut a portería" (preguntas con 4 opciones) y "Cuarto de partido" (contrarreloj con tiros a canasta).',
          'I designed the prototype in Figma, conducted user testing and applied usability principles. I developed two game modes: "Shot on goal" (4-option questions) and "Game quarter" (timed with basketball shots).'
        ),
      },
      {
        kind: 'learning',
        icon: 'insights',
        text: localizedText(
          'Aprendí a realizar investigación de usuarios y a aplicar principios de accesibilidad. Mejoré mis habilidades en Figma y prototipado. Descubrí la importancia del diseño centrado en el usuario y cómo adaptar una experiencia a diferentes perfiles.',
          'I learned to conduct user research and apply accessibility principles. I improved my Figma and prototyping skills. I discovered the importance of user-centered design and how to adapt an experience to different profiles.'
        ),
      },
    ],
    skillGains: [
      localizedText('Investigación de usuarios', 'User research'),
      localizedText('Diseño en Figma', 'Figma design'),
      localizedText('Principios de accesibilidad', 'Accessibility principles'),
      localizedText('Prototipado interactivo', 'Interactive prototyping'),
    ],
    tags: ['UX', 'UI', 'Figma'],
    subjects: ['Interacción Persona-Máquina y Usabilidad'],
    coverImage: '/images/projects/2023-24/interaccion-persona-maquina-y-usabilidad/go-for-sports/goforsports_portada.png',
    galleryImages: [
      '/images/projects/2023-24/interaccion-persona-maquina-y-usabilidad/go-for-sports/goforsports1.png',
      '/images/projects/2023-24/interaccion-persona-maquina-y-usabilidad/go-for-sports/goforsports2.png',
      '/images/projects/2023-24/interaccion-persona-maquina-y-usabilidad/go-for-sports/goforsports3.png',
      '/images/projects/2023-24/interaccion-persona-maquina-y-usabilidad/go-for-sports/goforsports4.png',
      '/images/projects/2023-24/interaccion-persona-maquina-y-usabilidad/go-for-sports/goforsports5.png',
      '/images/projects/2023-24/interaccion-persona-maquina-y-usabilidad/go-for-sports/goforsports6.png',
    ],
    galleryConfig: { columns: 3, layout: 'masonry' },
    featured: false,
    links: [
      { label: 'Prototipo', url: 'https://www.figma.com/proto/DNh3kjMxe65IOn76iNjAn7/GoForSports-IPM-V2.0?page-id=0%3A1&node-id=13-24&starting-point-node-id=13%3A24&t=PuG1OyKWfUUYBTge-1' },
      { label: 'Memoria PDF', url: 'https://drive.google.com/uc?export=download&id=1vPIxjVVV_J-wlNxr6CigIUlY7ocMf11r' },
    ],
    role: 'Diseñador UX/UI',
    team: 'Proyecto académico personal - Individual',
    duration: '3 meses',
    learnings: 'Aprendí a realizar investigación de usuarios y a aplicar principios de accesibilidad. Mejoré mis habilidades en Figma y prototipado. Descubrí la importancia del diseño centrado en el usuario.',
    status: 'completado',
    technologies: [
      { name: 'Figma', level: 'principal' },
      { name: 'UX Research', level: 'secundaria' },
      { name: 'Prototyping', level: 'secundaria' },
    ],
    disciplines: ['ux-ui', 'videojuegos'],
  };
