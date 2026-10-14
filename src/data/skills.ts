export interface LocalizedLabel {
  es: string;
  en: string;
}

// Áreas de trabajo: cada una se respalda con proyectos reales del portfolio.
export interface Skill {
  id: string;
  name: LocalizedLabel;
  description: LocalizedLabel;
  icon: string;
  projectSlugs: string[];
  // Evidencia sin ficha de proyecto (experiencia profesional, este portfolio...)
  extras?: LocalizedLabel[];
  // Por defecto "Proyectos relacionados"; úsalo cuando la evidencia no sean proyectos
  evidenceLabel?: LocalizedLabel;
}

export const skills: Skill[] = [
  {
    id: 'visual-art',
    name: { es: 'Diseño visual y arte digital', en: 'Visual design and digital art' },
    description: {
      es: 'Ilustración, concept art, diseño gráfico, personajes y composición visual.',
      en: 'Illustration, concept art, graphic design, characters and visual composition.',
    },
    icon: 'brush',
    projectSlugs: ['gorobeia', 'yumala', 'si-senor-oscuro', 'whispers-of-shadows'],
  },
  {
    id: '3d-art',
    name: { es: 'Modelado y animación 3D', en: '3D modeling and animation' },
    description: {
      es: 'Diseño y modelado de escenarios y personajes, materiales, iluminación y animación.',
      en: 'Design and modeling of environments and characters, materials, lighting and animation.',
    },
    icon: '3d_rotation',
    projectSlugs: ['fantasy-island', 'raki', 'raki-animacion'],
  },
  {
    id: 'game-design',
    name: { es: 'Diseño de videojuegos y experiencias interactivas', en: 'Game design and interactive experiences' },
    description: {
      es: 'Mecánicas, progresión, diseño de niveles, interfaces e integración de sistemas.',
      en: 'Mechanics, progression, level design, interfaces and systems integration.',
    },
    icon: 'sports_esports',
    projectSlugs: ['histeria', 'astrofury', 'bonk', 'alien-rush'],
  },
  {
    id: 'ux-ui',
    name: { es: 'UX/UI y prototipado', en: 'UX/UI and prototyping' },
    description: {
      es: 'Diseño de interfaces, prototipos interactivos, investigación y pruebas con usuarios.',
      en: 'Interface design, interactive prototypes, research and user testing.',
    },
    icon: 'design_services',
    projectSlugs: ['go-for-sports', 'menteando'],
  },
  {
    id: 'technical-support',
    name: { es: 'Análisis técnico y soporte de aplicaciones', en: 'Technical analysis and application support' },
    description: {
      es: 'Investigación de incidencias, bases de datos, logs, monitorización y documentación.',
      en: 'Incident investigation, databases, logs, monitoring and documentation.',
    },
    icon: 'support_agent',
    projectSlugs: [],
    evidenceLabel: { es: 'Experiencia relacionada', en: 'Related experience' },
    extras: [
      {
        es: 'Experiencia profesional en EPAM Systems / Atresmedia',
        en: 'Professional experience at EPAM Systems / Atresmedia',
      },
    ],
  },
  {
    id: 'ai-products',
    name: { es: 'Desarrollo de productos con IA', en: 'AI-assisted product development' },
    description: {
      es: 'Conceptualización, desarrollo asistido, coordinación de agentes, automatización y validación.',
      en: 'Conceptualization, assisted development, agent coordination, automation and validation.',
    },
    icon: 'neurology',
    projectSlugs: ['bonk', 'menteando'],
    extras: [{ es: 'Este portfolio', en: 'This portfolio' }],
  },
];
