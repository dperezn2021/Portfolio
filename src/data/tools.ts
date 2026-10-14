// Herramientas y tecnologías mostradas en Sobre mí (y consultables desde el buscador).

export interface Tool {
  name: string;
  icon: string;
  // Otros nombres con los que aparece en los datos de proyectos (para relacionarlos)
  aliases?: string[];
  // Habilidad del inventario (Trayectoria) a la que equivale; el buscador no duplica el resultado
  skillId?: string;
}

export const toolSlug = (name: string): string =>
  name
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/\+/g, 'plus')
    .replace(/#/g, 'sharp')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

export const mainToolGroups: { id: string; label: { es: string; en: string }; tools: Tool[] }[] = [
  {
    id: 'art',
    label: { es: 'Diseño y arte', en: 'Design and art' },
    tools: [
      { name: 'Photoshop', icon: 'brush' },
      { name: 'Figma', icon: 'design_services' },
      { name: 'Canva', icon: 'palette' },
    ],
  },
  {
    id: 'games-3d',
    label: { es: 'Videojuegos y 3D', en: 'Games and 3D' },
    tools: [
      { name: 'Unity', icon: 'sports_esports' },
      { name: '3ds Max', icon: '3d_rotation' },
      { name: 'SketchUp', icon: '3d_rotation' },
    ],
  },
  {
    id: 'dev',
    label: { es: 'Desarrollo', en: 'Development' },
    tools: [
      { name: 'Visual Studio Code', icon: 'code', aliases: ['VS Code'] },
      { name: 'Visual Studio 2022', icon: 'terminal' },
      { name: 'GitHub', icon: 'terminal', skillId: 'git' },
    ],
  },
  {
    id: 'ai',
    label: { es: 'IA', en: 'AI' },
    tools: [
      { name: 'ChatGPT', icon: 'chat' },
      { name: 'Claude Code', icon: 'neurology', skillId: 'claude' },
      { name: 'GitHub Copilot', icon: 'smart_toy' },
    ],
  },
  {
    id: 'data-ops',
    label: { es: 'Datos y operaciones', en: 'Data and operations' },
    tools: [
      { name: 'MongoDB Compass', icon: 'storage', skillId: 'mongodb' },
      { name: 'DBeaver', icon: 'storage' },
      { name: 'Grafana', icon: 'monitoring' },
      { name: 'Elastic', icon: 'manage_search' },
    ],
  },
  {
    id: 'management',
    label: { es: 'Gestión', en: 'Management' },
    tools: [
      { name: 'Jira', icon: 'assignment' },
      { name: 'Confluence', icon: 'description' },
    ],
  },
];

export const otherTools: Tool[] = [
  { name: 'CMS', icon: 'storage' },
  { name: 'Postman', icon: 'assignment' },
  { name: 'Robo-3T', icon: 'storage' },
  { name: 'Blender', icon: '3d_rotation' },
  { name: 'MOBA', icon: 'terminal' },
  { name: 'Substance Painter', icon: 'brush' },
  { name: 'DaVinci Resolve', icon: 'video_library' },
  { name: 'Miro', icon: 'groups' },
  { name: 'Android Studio', icon: 'android' },
  { name: 'IntelliJ IDEA', icon: 'terminal' },
  { name: 'WinSCP', icon: 'sync_alt' },
  { name: 'VLC', icon: 'video_library' },
];

export const languages: Tool[] = [
  { name: 'HTML5', icon: 'html', aliases: ['HTML'], skillId: 'html-css' },
  { name: 'CSS3', icon: 'css', aliases: ['CSS'], skillId: 'html-css' },
  { name: 'JavaScript', icon: 'javascript' },
  { name: 'C#', icon: 'code' },
  { name: 'C++', icon: 'data_array' },
  { name: 'SQL', icon: 'database' },
];

export const otherLanguages: Tool[] = [
  { name: 'Python', icon: 'terminal' },
  { name: 'Kotlin', icon: 'android' },
  { name: 'Java', icon: 'data_array' },
  { name: 'Spring Boot', icon: 'terminal', aliases: ['SpringBoot'] },
];
