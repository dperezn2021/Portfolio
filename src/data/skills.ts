// src/data/skills.ts

export interface Skill {
  name: string;
  level: number;
  icon?: string;
}

// ✅ HABILIDADES UNIFICADAS (sin separar el 3D)
export const skills: Skill[] = [
  { 
    name: 'Desarrollo Web', 
    level: 70, 
    icon: 'code' 
  },
  { 
    name: 'Diseño y Modelado 3D', 
    level: 65, 
    icon: '3d_rotation' 
  },
  { 
    name: 'UX/UI Design', 
    level: 60, 
    icon: 'design_services' 
  },
  { 
    name: 'Ilustración Digital', 
    level: 50, 
    icon: 'brush' 
  },
  { 
    name: 'Gestión de Proyectos', 
    level: 65, 
    icon: 'folder' 
  },
  { 
    name: 'Programación (C#, JS, Python)', 
    level: 40, 
    icon: 'terminal' 
  },
  
];