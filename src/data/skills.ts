export interface Skill {
  id: string;
  name: { es: string; en: string };
  icon: string;
  projectSlugs: string[];
}

export const skills: Skill[] = [
  {
    id: 'web-development',
    name: { es: 'Desarrollo web', en: 'Web development' },
    icon: 'code',
    projectSlugs: ['menteando', 'international-warfare'],
  },
  {
    id: '3d-art',
    name: { es: 'Modelado y arte 3D', en: '3D modeling and art' },
    icon: '3d_rotation',
    projectSlugs: ['fantasy-island', 'raki', 'whispers-of-shadows'],
  },
  {
    id: 'ux-ui',
    name: { es: 'UX/UI e investigación de usuarios', en: 'UX/UI and user research' },
    icon: 'design_services',
    projectSlugs: ['go-for-sports'],
  },
  {
    id: 'illustration',
    name: { es: 'Ilustración y concept art', en: 'Illustration and concept art' },
    icon: 'brush',
    projectSlugs: ['gorobeia', 'si-senor-oscuro', 'yumala'],
  },
  {
    id: 'project-management',
    name: { es: 'Trabajo en equipo y gestión de proyectos', en: 'Teamwork and project management' },
    icon: 'folder',
    projectSlugs: ['histeria', 'si-senor-oscuro'],
  },
  {
    id: 'programming',
    name: { es: 'Programación y sistemas interactivos', en: 'Programming and interactive systems' },
    icon: 'terminal',
    projectSlugs: ['alien-rush', 'astrofury', 'flappy-chef', 'histeria'],
  },
];