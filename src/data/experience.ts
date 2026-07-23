import type { Experience } from './education';

export const experience: Experience[] = [
  {
    id: 'exp-analyst',
    position: 'Application Junior Support Analyst',
    company: 'Banco Santander',
    startDate: '2024-07',
    endDate: '',
    current: true,
    description: 'Soporte y mantenimiento de aplicaciones bancarias, resolución de incidencias técnicas y mejora continua de procesos.',
    location: 'Madrid, España',
    achievements: [
      'Gestión y resolución de más de 50 incidencias técnicas mensuales',
      'Optimización de procesos de soporte reduciendo tiempos de respuesta en un 30%',
      'Colaboración con equipos de desarrollo para la implementación de mejoras',
    ],
    technologies: ['SQL', 'Jira', 'ITIL', 'Windows Server'],
  },
  {
    id: 'exp-freelance',
    position: 'Diseñador y Desarrollador Freelance',
    company: 'Freelance',
    startDate: '2022-01',
    endDate: '',
    current: true,
    description: 'Desarrollo de proyectos independientes en diseño 3D, animación, ilustración y desarrollo de videojuegos para clientes diversos.',
    location: 'Madrid, España',
    achievements: [
      'Desarrollo de 15+ proyectos de diseño 3D y animación',
      'Creación de assets para videojuegos independientes',
      'Diseño de interfaces y experiencia de usuario para aplicaciones',
    ],
    technologies: ['Unity', '3ds Max', 'Photoshop', 'Figma', 'JavaScript'],
  },
  {
    id: 'exp-intern',
    position: 'Desarrollador Junior (Prácticas)',
    company: 'Gameloft Madrid',
    startDate: '2023-06',
    endDate: '2023-09',
    current: false,
    description: 'Participación en el desarrollo de un juego móvil, implementación de mecánicas y optimización de rendimiento.',
    location: 'Madrid, España',
    achievements: [
      'Implementación de 5 mecánicas de juego principales',
      'Optimización de rendimiento reduciendo el tiempo de carga en un 25%',
      'Colaboración en el diseño de niveles y balancing',
    ],
    technologies: ['Unity', 'C#', 'Mobile Optimization', 'Git'],
  },
  {
    id: 'exp-game-jam',
    position: 'Game Jam Participant',
    company: 'Global Game Jam Madrid',
    startDate: '2023-01',
    endDate: '2023-01',
    current: false,
    description: 'Participación en Game Jam de 48 horas desarrollando un juego completo desde cero en equipo multidisciplinar.',
    location: 'Madrid, España',
    achievements: [
      'Desarrollo de un juego completo en 48 horas',
      'Implementación de la mecánica principal y sistema de puntuación',
      'Coordinación con equipo de 4 personas',
    ],
    technologies: ['Unity', 'C#', 'Git', 'Agile'],
  },
];

// Habilidades técnicas agrupadas para visualización
export const technicalSkills = {
  design: {
    label: 'Diseño y Arte',
    labelEn: 'Design & Art',
    skills: [
      { name: '3ds Max', level: 85 },
      { name: 'Photoshop', level: 90 },
      { name: 'Illustrator', level: 75 },
      { name: 'ZBrush', level: 70 },
      { name: 'Substance Painter', level: 75 },
    ],
  },
  development: {
    label: 'Desarrollo',
    labelEn: 'Development',
    skills: [
      { name: 'Unity 3D', level: 85 },
      { name: 'C#', level: 80 },
      { name: 'JavaScript', level: 75 },
      { name: 'TypeScript', level: 70 },
      { name: 'HTML/CSS', level: 80 },
      { name: 'React', level: 65 },
    ],
  },
  tools: {
    label: 'Herramientas',
    labelEn: 'Tools',
    skills: [
      { name: 'Figma', level: 70 },
      { name: 'Procreate', level: 65 },
      { name: 'After Effects', level: 60 },
      { name: 'Premiere Pro', level: 55 },
      { name: 'Canva', level: 85 },
    ],
  },
};