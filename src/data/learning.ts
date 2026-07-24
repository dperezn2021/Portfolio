// src/data/learning.ts

export interface Credential {
  id: string;
  type: string;
  issuer: string;
  year: string;
  icon?: string;
}

export interface SkillItem {
  id: string;
  name: string;
  category: string; // ← CLAVE para traducción
  level?: number;
  sources: string[];
}

// ============================================
// CERTIFICACIONES
// ============================================
export const credentials: Credential[] = [
  {
    id: 'degree-game-design',
    type: 'degree',
    issuer: 'Universidad Rey Juan Carlos',
    year: '2021 - 2026',
    icon: 'school',
  },
 // {
 //   id: 'specialization-3d-animation',
 //   type: 'specialization',
 //   issuer: 'Universidad Rey Juan Carlos',
 //   year: '2024',
 //   icon: 'movie',
 // },
];

// ============================================
// HABILIDADES - CON CATEGORÍAS COMO CLAVES
// ============================================
export const skillsInventory: SkillItem[] = [
  // ==========================================
  // game_development
  // ==========================================
  {
    id: 'game-development',
    name: 'Desarrollo de Videojuegos',
    category: 'game_development',
    level: 4,
    sources: ['Universidad'],
  },
  {
    id: '3d-modeling',
    name: 'Modelado 3D',
    category: 'game_development',
    level: 4,
    sources: ['Universidad'],
  },
  {
    id: '3d-animation',
    name: 'Animación 3D',
    category: 'game_development',
    level: 4,
    sources: ['Universidad'],
  },
  {
    id: 'pbr-texturing',
    name: 'Texturizado PBR',
    category: 'game_development',
    level: 4,
    sources: ['Universidad'],
  },
  {
    id: '3d-lighting',
    name: 'Iluminación 3D',
    category: 'game_development',
    level: 3,
    sources: ['Universidad'],
  },
  {
    id: 'level-design',
    name: 'Diseño de Niveles',
    category: 'game_development',
    level: 3,
    sources: ['Universidad'],
  },
  {
    id: 'character-design',
    name: 'Diseño de Personajes',
    category: 'game_development',
    level: 3,
    sources: ['Universidad'],
  },
  {
    id: 'design-patterns',
    name: 'Patrones de Diseño',
    category: 'game_development',
    level: 4,
    sources: ['Universidad'],
  },
  {
    id: 'pixel-art',
    name: 'Pixel Art',
    category: 'game_development',
    level: 3,
    sources: ['Universidad'],
  },

  // ==========================================
  // web_development
  // ==========================================
  {
    id: 'html5',
    name: 'HTML5',
    category: 'web_development',
    level: 4,
    sources: ['Personal'],
  },
  {
    id: 'css3',
    name: 'CSS3',
    category: 'web_development',
    level: 4,
    sources: ['Personal'],
  },
  {
    id: 'tailwind-css',
    name: 'Tailwind CSS',
    category: 'web_development',
    level: 4,
    sources: ['Personal'],
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    category: 'web_development',
    level: 4,
    sources: ['Personal'],
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    category: 'web_development',
    level: 3,
    sources: ['Personal'],
  },
  {
    id: 'frontend',
    name: 'Frontend',
    category: 'web_development',
    level: 4,
    sources: ['Personal'],
  },
  {
    id: 'rest-apis',
    name: 'Consumo de APIs REST',
    category: 'web_development',
    level: 4,
    sources: ['Personal'],
  },
  {
    id: 'http-requests',
    name: 'Peticiones HTTP',
    category: 'web_development',
    level: 4,
    sources: ['Personal'],
  },

  // ==========================================
  // design
  // ==========================================
  {
    id: 'digital-illustration',
    name: 'Ilustración Digital',
    category: 'design',
    level: 4,
    sources: ['Universidad'],
  },
  {
    id: 'ux-ui-design',
    name: 'UX/UI Design',
    category: 'design',
    level: 3,
    sources: ['Universidad'],
  },
  {
    id: 'prototyping',
    name: 'Prototipado',
    category: 'design',
    level: 3,
    sources: ['Universidad'],
  },
  {
    id: 'digital-collage',
    name: 'Collage Digital',
    category: 'design',
    level: 3,
    sources: ['Universidad'],
  },
  {
    id: 'branding',
    name: 'Branding',
    category: 'design',
    level: 3,
    sources: ['Personal'],
  },
  {
    id: 'graphic-design',
    name: 'Diseño Gráfico',
    category: 'design',
    level: 3,
    sources: ['Personal'],
  },

  // ==========================================
  // programming
  // ==========================================
  {
    id: 'csharp',
    name: 'C#',
    category: 'programming',
    level: 4,
    sources: ['Universidad'],
  },
  {
    id: 'javascript-lang',
    name: 'JavaScript',
    category: 'programming',
    level: 4,
    sources: ['Personal'],
  },
  {
    id: 'typescript-lang',
    name: 'TypeScript',
    category: 'programming',
    level: 3,
    sources: ['Personal'],
  },
  {
    id: 'python',
    name: 'Python',
    category: 'programming',
    level: 3,
    sources: ['Universidad'],
  },
  {
    id: 'kotlin',
    name: 'Kotlin',
    category: 'programming',
    level: 3,
    sources: ['Universidad'],
  },
  {
    id: 'sql-lang',
    name: 'SQL',
    category: 'programming',
    level: 3,
    sources: ['Trabajo'],
  },
  {
    id: 'java',
    name: 'Java',
    category: 'programming',
    level: 2,
    sources: ['Universidad'],
  },
  {
    id: 'php',
    name: 'PHP',
    category: 'programming',
    level: 2,
    sources: ['Personal'],
  },
  {
    id: 'cpp',
    name: 'C++',
    category: 'programming',
    level: 2,
    sources: ['Universidad'],
  },

  // ==========================================
  // databases
  // ==========================================
  {
    id: 'sql-db',
    name: 'SQL',
    category: 'databases',
    level: 3,
    sources: ['Trabajo'],
  },
  {
    id: 'mongodb',
    name: 'MongoDB',
    category: 'databases',
    level: 2,
    sources: ['Trabajo'],
  },
  {
    id: 'postgresql',
    name: 'PostgreSQL',
    category: 'databases',
    level: 2,
    sources: ['Trabajo'],
  },
  {
    id: 'oracle',
    name: 'Oracle',
    category: 'databases',
    level: 2,
    sources: ['Trabajo'],
  },

  // ==========================================
  // cloud
  // ==========================================
  {
    id: 'aws',
    name: 'AWS',
    category: 'cloud',
    level: 3,
    sources: ['Trabajo'],
  },
  {
    id: 'aws-lambda',
    name: 'AWS Lambda',
    category: 'cloud',
    level: 3,
    sources: ['Trabajo'],
  },
  {
    id: 'aws-dynamodb',
    name: 'AWS DynamoDB',
    category: 'cloud',
    level: 3,
    sources: ['Trabajo'],
  },
  {
    id: 'aws-cognito',
    name: 'AWS Cognito',
    category: 'cloud',
    level: 2,
    sources: ['Trabajo'],
  },
  {
    id: 'aws-cloudfront',
    name: 'Amazon CloudFront',
    category: 'cloud',
    level: 3,
    sources: ['Trabajo'],
  },
  {
    id: 'azure',
    name: 'Microsoft Azure',
    category: 'cloud',
    level: 2,
    sources: ['Trabajo'],
  },
  {
    id: 'azure-portal',
    name: 'Azure Portal',
    category: 'cloud',
    level: 2,
    sources: ['Trabajo'],
  },
  {
    id: 'cloud-storage',
    name: 'Almacenamiento Cloud',
    category: 'cloud',
    level: 3,
    sources: ['Trabajo'],
  },

  // ==========================================
  // devops
  // ==========================================
  {
    id: 'git',
    name: 'Git',
    category: 'devops',
    level: 4,
    sources: ['Personal'],
  },
  {
    id: 'github',
    name: 'GitHub',
    category: 'devops',
    level: 4,
    sources: ['Personal'],
  },
  {
    id: 'docker',
    name: 'Docker',
    category: 'devops',
    level: 2,
    sources: ['Trabajo'],
  },
  {
    id: 'deployments',
    name: 'Despliegues',
    category: 'devops',
    level: 3,
    sources: ['Trabajo'],
  },
  {
    id: 'rollback',
    name: 'Rollback',
    category: 'devops',
    level: 3,
    sources: ['Trabajo'],
  },
  {
    id: 'argocd',
    name: 'ArgoCD',
    category: 'devops',
    level: 2,
    sources: ['Trabajo'],
  },
  {
    id: 'gitlab-ci',
    name: 'GitLab CI/CD',
    category: 'devops',
    level: 2,
    sources: ['Trabajo'],
  },
  {
    id: 'release-validation',
    name: 'Validación de releases',
    category: 'devops',
    level: 3,
    sources: ['Trabajo'],
  },
  {
    id: 'deployment-validation',
    name: 'Deployment Validation',
    category: 'devops',
    level: 3,
    sources: ['Trabajo'],
  },

  // ==========================================
  // observability
  // ==========================================
  {
    id: 'log-analysis',
    name: 'Análisis de Logs',
    category: 'observability',
    level: 4,
    sources: ['Trabajo'],
  },
  {
    id: 'kibana',
    name: 'Kibana',
    category: 'observability',
    level: 3,
    sources: ['Trabajo'],
  },
  {
    id: 'grafana',
    name: 'Grafana',
    category: 'observability',
    level: 3,
    sources: ['Trabajo'],
  },
  {
    id: 'elastic',
    name: 'Elastic',
    category: 'observability',
    level: 3,
    sources: ['Trabajo'],
  },
  {
    id: 'monitoring',
    name: 'Monitorización',
    category: 'observability',
    level: 4,
    sources: ['Trabajo'],
  },
  {
    id: 'metrics-analysis',
    name: 'Análisis de Métricas',
    category: 'observability',
    level: 3,
    sources: ['Trabajo'],
  },
  {
    id: 'event-correlation',
    name: 'Correlación de Eventos',
    category: 'observability',
    level: 3,
    sources: ['Trabajo'],
  },
  {
    id: 'conviva',
    name: 'Conviva',
    category: 'observability',
    level: 2,
    sources: ['Trabajo'],
  },
  {
    id: 'marfeel',
    name: 'Marfeel',
    category: 'observability',
    level: 2,
    sources: ['Trabajo'],
  },

  // ==========================================
  // streaming
  // ==========================================
  {
    id: 'hls',
    name: 'HLS',
    category: 'streaming',
    level: 3,
    sources: ['Trabajo'],
  },
  {
    id: 'mpeg-dash',
    name: 'MPEG-DASH',
    category: 'streaming',
    level: 3,
    sources: ['Trabajo'],
  },
  {
    id: 'video-transcoding',
    name: 'Transcodificación de Vídeo',
    category: 'streaming',
    level: 3,
    sources: ['Trabajo'],
  },
  {
    id: 'vod',
    name: 'VOD',
    category: 'streaming',
    level: 3,
    sources: ['Trabajo'],
  },
  {
    id: 'live-streaming',
    name: 'Streaming en Directo',
    category: 'streaming',
    level: 3,
    sources: ['Trabajo'],
  },
  {
    id: 'cdn-management',
    name: 'Gestión CDN',
    category: 'streaming',
    level: 3,
    sources: ['Trabajo'],
  },
  {
    id: 'fastly',
    name: 'Fastly',
    category: 'streaming',
    level: 2,
    sources: ['Trabajo'],
  },
  {
    id: 'cloudfront-streaming',
    name: 'Amazon CloudFront',
    category: 'streaming',
    level: 3,
    sources: ['Trabajo'],
  },
  {
    id: 'geoblocking',
    name: 'Geobloqueo',
    category: 'streaming',
    level: 3,
    sources: ['Trabajo'],
  },
  {
    id: 'content-ingestion',
    name: 'Ingesta de Contenidos',
    category: 'streaming',
    level: 3,
    sources: ['Trabajo'],
  },
  {
    id: 'playback-validation',
    name: 'Validación de Reproducción',
    category: 'streaming',
    level: 3,
    sources: ['Trabajo'],
  },
  {
    id: 'subtitle-validation',
    name: 'Validación de Subtítulos',
    category: 'streaming',
    level: 3,
    sources: ['Trabajo'],
  },
  {
    id: 'incident-resolution',
    name: 'Resolución de Incidencias',
    category: 'streaming',
    level: 4,
    sources: ['Trabajo'],
  },

  // ==========================================
  // support
  // ==========================================
  {
    id: 'troubleshooting',
    name: 'Troubleshooting',
    category: 'support',
    level: 4,
    sources: ['Trabajo'],
  },
  {
    id: 'root-cause-analysis',
    name: 'Root Cause Analysis',
    category: 'support',
    level: 4,
    sources: ['Trabajo'],
  },
  {
    id: 'incident-management',
    name: 'Incident Management',
    category: 'support',
    level: 4,
    sources: ['Trabajo'],
  },
  {
    id: 'production-support',
    name: 'Production Support',
    category: 'support',
    level: 4,
    sources: ['Trabajo'],
  },
  {
    id: 'operational-support',
    name: 'Operational Support',
    category: 'support',
    level: 4,
    sources: ['Trabajo'],
  },
  {
    id: 'ticket-management',
    name: 'Ticket Management',
    category: 'support',
    level: 4,
    sources: ['Trabajo'],
  },
  {
    id: 'technical-documentation',
    name: 'Documentación Técnica',
    category: 'support',
    level: 3,
    sources: ['Trabajo'],
  },
  {
    id: 'runbooks',
    name: 'Runbooks',
    category: 'support',
    level: 3,
    sources: ['Trabajo'],
  },
  {
    id: 'daily-checks',
    name: 'Daily Checks',
    category: 'support',
    level: 3,
    sources: ['Trabajo'],
  },
  {
    id: 'functional-analysis',
    name: 'Análisis Funcional',
    category: 'support',
    level: 3,
    sources: ['Trabajo'],
  },

  // ==========================================
  // ai
  // ==========================================
  {
    id: 'prompt-engineering',
    name: 'Prompt Engineering',
    category: 'ai',
    level: 4,
    sources: ['Personal'],
  },
  {
    id: 'chatgpt',
    name: 'ChatGPT',
    category: 'ai',
    level: 4,
    sources: ['Personal'],
  },
  {
    id: 'claude',
    name: 'Claude',
    category: 'ai',
    level: 3,
    sources: ['Personal'],
  },
  {
    id: 'github-copilot',
    name: 'GitHub Copilot',
    category: 'ai',
    level: 3,
    sources: ['Personal'],
  },
  {
    id: 'gemini',
    name: 'Gemini',
    category: 'ai',
    level: 2,
    sources: ['Personal'],
  },

  // ==========================================
  // tools
  // ==========================================
  {
    id: 'jira',
    name: 'Jira',
    category: 'tools',
    level: 4,
    sources: ['Trabajo'],
  },
  {
    id: 'confluence',
    name: 'Confluence',
    category: 'tools',
    level: 3,
    sources: ['Trabajo'],
  },
  {
    id: 'postman',
    name: 'Postman',
    category: 'tools',
    level: 3,
    sources: ['Trabajo'],
  },
  {
    id: 'miro',
    name: 'Miro',
    category: 'tools',
    level: 2,
    sources: ['Universidad'],
  },
  {
    id: 'vscode',
    name: 'Visual Studio Code',
    category: 'tools',
    level: 4,
    sources: ['Personal'],
  },
  {
    id: 'visual-studio',
    name: 'Visual Studio 2022',
    category: 'tools',
    level: 3,
    sources: ['Universidad'],
  },
];