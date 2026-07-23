export interface Education {
  id: string;
  title: string;
  institution: string;
  startDate: string;
  endDate: string;
  current: boolean;
  description: string;
  location?: string;
  type: 'degree' | 'course' | 'certification';
  skills?: string[];
}

export interface Experience {
  id: string;
  position: string;
  company: string;
  startDate: string;
  endDate: string;
  current: boolean;
  description: string;
  location?: string;
  achievements?: string[];
  technologies?: string[];
}

// Formación Académica
export const education: Education[] = [
  {
    id: 'degree-gamedev',
    title: 'Grado en Diseño y Desarrollo de Videojuegos',
    institution: 'Universidad Complutense de Madrid',
    startDate: '2021-09',
    endDate: '2026-07',
    current: false,
    description: 'Formación integral en todas las áreas del desarrollo de videojuegos: programación, diseño de niveles, modelado 3D, animación, narrativa y producción.',
    location: 'Madrid, España',
    type: 'degree',
    skills: ['Unity', 'C#', '3ds Max', 'Photoshop', 'Diseño de Niveles', 'Game Design'],
  },
  {
    id: 'degree-3d-animation',
    title: 'Especialización en Animación 3D',
    institution: 'Escuela de Arte y Tecnología',
    startDate: '2023-01',
    endDate: '2023-12',
    current: false,
    description: 'Formación especializada en animación de personajes y escenarios, rigging, motion capture y técnicas avanzadas de animación 3D.',
    location: 'Madrid, España',
    type: 'course',
    skills: ['3ds Max', 'Animation', 'Rigging', 'Motion Capture', 'Maya'],
  },
];

// Cursos y Certificaciones
export const courses: Education[] = [
  {
    id: 'course-ux-ui',
    title: 'Diseño UX/UI para Videojuegos',
    institution: 'Google / Coursera',
    startDate: '2023-03',
    endDate: '2023-08',
    current: false,
    description: 'Curso especializado en diseño de interfaces para videojuegos, con enfoque en usabilidad, accesibilidad y experiencia de usuario en entornos interactivos.',
    type: 'certification',
    skills: ['Figma', 'UX Research', 'Prototyping', 'User Testing'],
  },
  {
    id: 'course-react',
    title: 'Desarrollo Web con React y TypeScript',
    institution: 'Platzi',
    startDate: '2024-01',
    endDate: '2024-04',
    current: false,
    description: 'Formación en desarrollo frontend moderno con React, TypeScript y Tailwind CSS, incluyendo hooks, estado global y buenas prácticas.',
    type: 'course',
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'Hooks'],
  },
  {
    id: 'course-shaders',
    title: 'Programación de Shaders para Videojuegos',
    institution: 'Udemy',
    startDate: '2023-09',
    endDate: '2023-11',
    current: false,
    description: 'Curso avanzado sobre creación de shaders para efectos visuales en videojuegos usando Unity Shader Graph y HLSL.',
    type: 'course',
    skills: ['Shader Graph', 'HLSL', 'Unity', 'Efectos Visuales'],
  },
  {
    id: 'course-english',
    title: 'Certificado de Inglés C1 Avanzado',
    institution: 'Cambridge English',
    startDate: '2022-06',
    endDate: '2023-01',
    current: false,
    description: 'Certificación oficial de nivel C1 en inglés, con habilidades avanzadas en comunicación profesional y técnica.',
    type: 'certification',
    skills: ['Inglés Técnico', 'Comunicación Profesional'],
  },
];