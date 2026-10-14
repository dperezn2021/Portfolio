// src/data/learning.ts

export interface Credential {
  id: string;
  type: string;
  issuer: string;
  year: string;
  icon?: string;
  url?: string;
  credentialId?: string;
  pending?: boolean;
  inProgress?: boolean;
}

export type SkillLevel = 1 | 2 | 3 | 4 | 5;

export type SkillKind = 'skill' | 'tool';

export interface SkillItem {
  id: string;
  name: string;
  category: SkillCategory;
  // 'skill' = capacidad; 'tool' = herramienta o tecnología concreta
  kind: SkillKind;
  // Sin level = nivel pendiente de evaluar: se muestra sin puntuación (nunca se asume un nivel).
  level?: SkillLevel;
  sources: string[];
  // Proyectos que respaldan la habilidad (los no publicados se ignoran al mostrarlos).
  projectSlugs?: string[];
}

export interface FeaturedSkill {
  id: string;
  skillId: string;
  icon: string;
}

// ============================================
// CATEGORÍAS (claves de traducción: category.<key>)
// ============================================
export const skillCategories = [
  'game_development',
  'design',
  'programming',
  'databases',
  'support',
  'streaming',
  'ai',
  'cloud_devops',
] as const;

export type SkillCategory = (typeof skillCategories)[number];

// Autoevaluación de autonomía actual (no es una acreditación externa).
// Claves de traducción: level.<n>.name y level.<n>.desc
export const skillLevels: SkillLevel[] = [1, 2, 3, 4, 5];

// Nivel por debajo del cual una tecnología se muestra como "conocimiento introductorio".
export const INTRO_LEVEL: SkillLevel = 1;

// ============================================
// TITULACIONES
// ============================================
export const credentials: Credential[] = [
  {
    id: 'degree-game-design',
    type: 'degree',
    issuer: 'URJC · Universidad Rey Juan Carlos',
    year: '2021 - 2026',
    icon: 'school',
    inProgress: false,
  },
  {
    id: 'master-3d-animation',
    type: 'master',
    issuer: 'UNIR · Universidad Internacional de La Rioja',
    year: '2026',
    icon: 'movie',
    inProgress: true,
  },
];

// ============================================
// COMPETENCIAS DESTACADAS
// Selección representativa. El nivel NO se duplica aquí: se toma de la
// habilidad del inventario a la que apunta skillId.
// Claves de traducción: featured.<id>
// ============================================
export const featuredSkills: FeaturedSkill[] = [
  { id: 'game-design', skillId: 'game-design', icon: 'sports_esports' },
  { id: 'digital-illustration', skillId: 'digital-illustration', icon: 'brush' },
  { id: 'graphic-design', skillId: 'graphic-design', icon: 'palette' },
  { id: 'mongodb-data', skillId: 'mongodb', icon: 'database' },
  { id: 'log-rca', skillId: 'log-analysis', icon: 'manage_search' },
  { id: 'incident-management', skillId: 'incident-management', icon: 'support_agent' },
  { id: 'prompt-engineering', skillId: 'prompt-engineering', icon: 'neurology' },
  { id: 'ticket-management', skillId: 'ticket-management', icon: 'confirmation_number' },
];

// ============================================
// INVENTARIO DE HABILIDADES
// ============================================
export const skillsInventory: SkillItem[] = [
  // game_development — Videojuegos y experiencias interactivas
  { id: 'game-design', name: 'Diseño de Videojuegos', category: 'game_development', kind: 'skill', level: 4, sources: ['Universidad'], projectSlugs: ['histeria', 'astrofury', 'bonk', 'alien-rush'] },
  { id: 'game-programming', name: 'Programación de Videojuegos', category: 'game_development', kind: 'skill', level: 2, sources: ['Universidad'], projectSlugs: ['astrofury', 'histeria'] },
  { id: 'level-design', name: 'Diseño de Niveles', category: 'game_development', kind: 'skill', level: 3, sources: ['Universidad'] },
  { id: 'scenario-design', name: 'Diseño de Escenarios', category: 'game_development', kind: 'skill', level: 3, sources: ['Universidad'], projectSlugs: ['fantasy-island', 'gorobeia', 'terra-trolls', 'michael-soffield-the-rescue', 'whispers-of-shadows'] },
  { id: 'character-design', name: 'Diseño de Personajes', category: 'game_development', kind: 'skill', level: 3, sources: ['Universidad'] },
  { id: 'pixel-art', name: 'Pixel Art', category: 'game_development', kind: 'skill', level: 3, sources: ['Universidad'] },

  // design — Arte digital y UX/UI
  { id: 'digital-illustration', name: 'Ilustración Digital', category: 'design', kind: 'skill', level: 4, sources: ['Universidad'], projectSlugs: ['gorobeia', 'yumala', 'terra-trolls', 'si-senor-oscuro'] },
  { id: 'graphic-design', name: 'Diseño Gráfico y Composición', category: 'design', kind: 'skill', level: 4, sources: ['Personal'], projectSlugs: ['redes-sociales'] },
  { id: 'digital-collage', name: 'Collage Digital', category: 'design', kind: 'skill', level: 3, sources: ['Universidad'] },
  { id: 'branding', name: 'Branding', category: 'design', kind: 'skill', level: 3, sources: ['Personal'] },
  { id: '3d-modeling', name: 'Modelado 3D', category: 'design', kind: 'skill', level: 3, sources: ['Universidad'], projectSlugs: ['fantasy-island', 'raki', 'whispers-of-shadows'] },
  { id: '3d-animation', name: 'Animación 3D', category: 'design', kind: 'skill', level: 2, sources: ['Universidad'], projectSlugs: ['raki-animacion'] },
  { id: 'pbr-texturing', name: 'Texturizado PBR', category: 'design', kind: 'skill', level: 1, sources: ['Universidad'], projectSlugs: ['raki'] },
  { id: '3d-lighting', name: 'Iluminación 3D', category: 'design', kind: 'skill', level: 2, sources: ['Universidad'] },
  { id: 'ux-ui-design', name: 'UX/UI Design', category: 'design', kind: 'skill', level: 3, sources: ['Universidad'], projectSlugs: ['go-for-sports'] },
  { id: 'prototyping', name: 'Prototipado', category: 'design', kind: 'skill', level: 3, sources: ['Universidad'], projectSlugs: ['go-for-sports'] },

  // programming — Programación y desarrollo
  { id: 'csharp', name: 'C#', category: 'programming', kind: 'skill', level: 2, sources: ['Universidad'], projectSlugs: ['astrofury', 'histeria', 'menteando'] },
  { id: 'javascript', name: 'JavaScript', category: 'programming', kind: 'skill', level: 2, sources: ['Universidad', 'Personal'], projectSlugs: ['alien-rush', 'hit-and-ufo', 'bonk', 'menteando'] },
  { id: 'html-css', name: 'HTML y CSS', category: 'programming', kind: 'skill', level: 2, sources: ['Universidad', 'Personal'], projectSlugs: ['international-warfare', 'menteando'] },
  { id: 'typescript', name: 'TypeScript', category: 'programming', kind: 'skill', level: 1, sources: ['Personal'] },
  { id: 'sql', name: 'SQL', category: 'programming', kind: 'skill', level: 2, sources: ['Universidad', 'Trabajo'] },
  { id: 'java', name: 'Java', category: 'programming', kind: 'skill', level: 2, sources: ['Universidad'] },
  { id: 'cpp', name: 'C++', category: 'programming', kind: 'skill', level: 2, sources: ['Universidad'], projectSlugs: ['zombierush'] },
  { id: 'python', name: 'Python', category: 'programming', kind: 'skill', level: 1, sources: ['Universidad'] },
  { id: 'kotlin', name: 'Kotlin', category: 'programming', kind: 'skill', level: 1, sources: ['Universidad'], projectSlugs: ['flappy-chef'] },
  { id: 'react', name: 'React', category: 'programming', kind: 'skill', level: 1, sources: ['Personal'] },
  { id: 'nodejs', name: 'Node.js', category: 'programming', kind: 'skill', level: 1, sources: ['Personal'] },
  { id: 'astro', name: 'Astro', category: 'programming', kind: 'skill', level: 1, sources: ['Personal'] },

  // databases — Bases de datos
  { id: 'mongodb', name: 'MongoDB', category: 'databases', kind: 'tool', level: 4, sources: ['Universidad', 'Trabajo'], projectSlugs: ['proyecto-valorant-datos'] },
  { id: 'postgresql', name: 'PostgreSQL', category: 'databases', kind: 'tool', level: 2, sources: ['Trabajo'] },
  { id: 'oracle', name: 'Oracle', category: 'databases', kind: 'tool', level: 1, sources: ['Trabajo'] },
  { id: 'data-modeling', name: 'Modelado y Comprensión de Datos', category: 'databases', kind: 'skill', level: 3, sources: ['Universidad', 'Trabajo'], projectSlugs: ['proyecto-valorant-datos'] },

  // support — Soporte y observabilidad
  { id: 'ticket-management', name: 'Gestión de Tickets', category: 'support', kind: 'skill', level: 5, sources: ['Trabajo'] },
  { id: 'incident-management', name: 'Gestión de Incidencias', category: 'support', kind: 'skill', level: 4, sources: ['Trabajo'] },
  { id: 'root-cause-analysis', name: 'Análisis de Causa Raíz', category: 'support', kind: 'skill', level: 4, sources: ['Trabajo'] },
  { id: 'log-analysis', name: 'Análisis de Logs', category: 'support', kind: 'skill', level: 4, sources: ['Trabajo'] },
  { id: 'technical-documentation', name: 'Documentación Técnica y Runbooks', category: 'support', kind: 'skill', level: 4, sources: ['Trabajo'] },
  { id: 'troubleshooting', name: 'Troubleshooting', category: 'support', kind: 'skill', level: 3, sources: ['Trabajo'] },
  { id: 'production-support', name: 'Soporte de Producción', category: 'support', kind: 'skill', level: 3, sources: ['Trabajo'] },
  { id: 'monitoring', name: 'Monitorización', category: 'support', kind: 'skill', level: 3, sources: ['Trabajo'] },
  { id: 'daily-checks', name: 'Daily Checks', category: 'support', kind: 'skill', level: 3, sources: ['Trabajo'] },
  { id: 'functional-analysis', name: 'Análisis Funcional', category: 'support', kind: 'skill', level: 3, sources: ['Trabajo'] },
  { id: 'metrics-analysis', name: 'Análisis de Métricas', category: 'support', kind: 'skill', level: 3, sources: ['Trabajo'] },
  { id: 'event-correlation', name: 'Correlación de Eventos', category: 'support', kind: 'skill', level: 2, sources: ['Trabajo'] },
  { id: 'grafana', name: 'Grafana', category: 'support', kind: 'tool', level: 3, sources: ['Trabajo'] },
  { id: 'elastic', name: 'Elastic', category: 'support', kind: 'tool', level: 3, sources: ['Trabajo'] },
  { id: 'conviva', name: 'Conviva', category: 'support', kind: 'tool', level: 3, sources: ['Trabajo'] },
  { id: 'kibana', name: 'Kibana', category: 'support', kind: 'tool', level: 2, sources: ['Trabajo'] },
  { id: 'marfeel', name: 'Marfeel', category: 'support', kind: 'tool', level: 1, sources: ['Trabajo'] },
  { id: 'promql', name: 'PromQL', category: 'support', kind: 'tool', level: 1, sources: ['Trabajo'] },

  // streaming — Streaming y plataformas audiovisuales
  { id: 'vod', name: 'VOD', category: 'streaming', kind: 'skill', level: 3, sources: ['Trabajo'] },
  { id: 'content-ingestion', name: 'Ingesta de Contenidos', category: 'streaming', kind: 'skill', level: 3, sources: ['Trabajo'] },
  { id: 'playback-validation', name: 'Validación de Reproducción', category: 'streaming', kind: 'skill', level: 3, sources: ['Trabajo'] },
  { id: 'subtitle-validation', name: 'Validación de Subtítulos', category: 'streaming', kind: 'skill', level: 3, sources: ['Trabajo'] },
  { id: 'geoblocking', name: 'Geobloqueo', category: 'streaming', kind: 'skill', level: 3, sources: ['Trabajo'] },
  { id: 'cdn', name: 'CDN y Distribución de Contenido', category: 'streaming', kind: 'skill', level: 3, sources: ['Trabajo'] },
  { id: 'live-streaming', name: 'Streaming en Directo', category: 'streaming', kind: 'skill', level: 2, sources: ['Trabajo'] },
  { id: 'hls', name: 'HLS', category: 'streaming', kind: 'tool', level: 2, sources: ['Trabajo'] },
  { id: 'cloudfront-streaming', name: 'Amazon CloudFront', category: 'streaming', kind: 'tool', level: 2, sources: ['Trabajo'] },
  { id: 'fastly', name: 'Fastly', category: 'streaming', kind: 'tool', level: 2, sources: ['Trabajo'] },
  { id: 'mpeg-dash', name: 'MPEG-DASH', category: 'streaming', kind: 'tool', level: 1, sources: ['Trabajo'] },
  { id: 'video-transcoding', name: 'Transcodificación de Vídeo', category: 'streaming', kind: 'skill', level: 1, sources: ['Trabajo'] },

  // ai — IA y automatización
  { id: 'prompt-engineering', name: 'Prompt Engineering', category: 'ai', kind: 'skill', level: 4, sources: ['Personal'], projectSlugs: ['bonk', 'menteando'] },
  { id: 'ai-assisted-dev', name: 'Desarrollo Asistido por IA', category: 'ai', kind: 'skill', level: 4, sources: ['Personal'], projectSlugs: ['bonk', 'menteando'] },
  { id: 'ai-agents', name: 'Orquestación de Agentes de IA', category: 'ai', kind: 'skill', level: 3, sources: ['Personal'] },
  { id: 'ai-code-validation', name: 'Validación de Código Generado por IA', category: 'ai', kind: 'skill', level: 3, sources: ['Personal'] },
  { id: 'task-automation', name: 'Automatización de Tareas', category: 'ai', kind: 'skill', level: 3, sources: ['Personal'] },
  { id: 'chatgpt', name: 'ChatGPT', category: 'ai', kind: 'tool', level: 4, sources: ['Personal'] },
  { id: 'claude', name: 'Claude', category: 'ai', kind: 'tool', level: 3, sources: ['Personal'] },
  { id: 'github-copilot', name: 'GitHub Copilot', category: 'ai', kind: 'tool', level: 3, sources: ['Personal'] },
  { id: 'gemini', name: 'Gemini', category: 'ai', kind: 'tool', level: 3, sources: ['Personal'] },

  // cloud_devops — Cloud, DevOps y herramientas
  { id: 'cloudflare-workers', name: 'Cloudflare Workers', category: 'cloud_devops', kind: 'tool', level: 3, sources: ['Universidad'], projectSlugs: ['menteando'] },
  { id: 'deployment-validation', name: 'Validación de Despliegues y Releases', category: 'cloud_devops', kind: 'skill', level: 3, sources: ['Trabajo'] },
  { id: 'deployments', name: 'Despliegues', category: 'cloud_devops', kind: 'skill', level: 3, sources: ['Trabajo'] },
  { id: 'rollback', name: 'Rollback', category: 'cloud_devops', kind: 'skill', level: 3, sources: ['Trabajo'] },
  { id: 'cloud-storage', name: 'Almacenamiento Cloud', category: 'cloud_devops', kind: 'skill', level: 3, sources: ['Trabajo'] },
  { id: 'git', name: 'Git y GitHub', category: 'cloud_devops', kind: 'tool', level: 2, sources: ['Universidad', 'Personal'] },
  { id: 'jira', name: 'Jira', category: 'cloud_devops', kind: 'tool', level: 4, sources: ['Universidad', 'Trabajo'], projectSlugs: ['si-senor-oscuro'] },
  { id: 'confluence', name: 'Confluence', category: 'cloud_devops', kind: 'tool', level: 4, sources: ['Trabajo'] },
  { id: 'vscode', name: 'Visual Studio Code', category: 'cloud_devops', kind: 'tool', level: 4, sources: ['Personal'] },
  { id: 'visual-studio', name: 'Visual Studio 2022', category: 'cloud_devops', kind: 'tool', level: 3, sources: ['Universidad'] },
  { id: 'miro', name: 'Miro', category: 'cloud_devops', kind: 'tool', level: 2, sources: ['Universidad'], projectSlugs: ['si-senor-oscuro'] },
  { id: 'postman', name: 'Postman', category: 'cloud_devops', kind: 'tool', level: 2, sources: ['Universidad', 'Trabajo'] },
  { id: 'aws', name: 'AWS', category: 'cloud_devops', kind: 'tool', level: 2, sources: ['Trabajo'] },
  { id: 'argocd', name: 'ArgoCD', category: 'cloud_devops', kind: 'tool', level: 2, sources: ['Trabajo'] },
  { id: 'aws-cognito', name: 'AWS Cognito', category: 'cloud_devops', kind: 'tool', level: 1, sources: ['Trabajo'] },
  { id: 'aws-lambda', name: 'AWS Lambda', category: 'cloud_devops', kind: 'tool', level: 1, sources: ['Trabajo'] },
  { id: 'aws-dynamodb', name: 'AWS DynamoDB', category: 'cloud_devops', kind: 'tool', level: 1, sources: ['Trabajo'] },
  { id: 'azure', name: 'Microsoft Azure', category: 'cloud_devops', kind: 'tool', level: 1, sources: ['Trabajo'] },
  { id: 'docker', name: 'Docker', category: 'cloud_devops', kind: 'tool', level: 1, sources: ['Trabajo'] },
  { id: 'gitlab-ci', name: 'GitLab CI/CD', category: 'cloud_devops', kind: 'tool', level: 1, sources: ['Trabajo'] },
];

// ============================================
// CURSOS COMPLETADOS
// ============================================
export const shortCourses: Credential[] = [
  { id: 'claude-101', type: 'short_course', issuer: 'Anthropic', year: 'Ago. 2026', credentialId: 'qxyb66akd34i', icon: 'neurology', url: 'https://verify.skilljar.com/c/qxyb66akd34i' },
  { id: 'claude-api', type: 'short_course', issuer: 'Anthropic', year: 'Ago. 2026', credentialId: 'p68chv87qxdr', icon: 'code', url: 'https://verify.skilljar.com/c/p68chv87qxdr' },
  { id: 'ai-fluency', type: 'short_course', issuer: 'Anthropic', year: 'Ago. 2026', credentialId: 'gdgcz8hpgjpw', icon: 'psychology', url: 'https://verify.skilljar.com/c/gdgcz8hpgjpw' },
  { id: 'claude-code-action', type: 'short_course', issuer: 'Anthropic', year: 'Ago. 2026', credentialId: 'zkyogwdggb2g', icon: 'terminal', url: 'https://verify.skilljar.com/c/zkyogwdggb2g' },
];

// ============================================
// CERTIFICACIONES EN PREPARACIÓN
// ============================================
export const pendingCredentials: Credential[] = [
  { id: 'claude-architect-foundations', type: 'pending', issuer: 'Anthropic', year: '', icon: 'pending_actions' },
];

export const currentLearning = ['Maya', 'Astro', 'Node.js', 'React'];
