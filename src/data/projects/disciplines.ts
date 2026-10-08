// src/data/projects/disciplines.ts
import type { DisciplineKey, DisciplineInfo } from './types';

export const DISCIPLINE_MAP: Record<DisciplineKey, DisciplineInfo> = {
  'videojuegos': { emoji: '🎮', label: 'Videojuegos', label_en: 'Video Games' },
  'red': { emoji: '🌐', label: 'Red', label_en: 'Network' },
  'aplicaciones': { emoji: '📱', label: 'Aplicaciones Móviles', label_en: 'Mobile Apps' },
  'desarrollo-web': { emoji: '💻', label: 'Desarrollo Web', label_en: 'Web Development' },
  'modelado-3d': { emoji: '🧊', label: 'Modelado 3D', label_en: '3D Modeling' },
  'animacion-2d': { emoji: '🔵', label: 'Animación 2D', label_en: '2D Animation' },
  'animacion-3d': { emoji: '🎬', label: 'Animación 3D', label_en: '3D Animation' },
  'ia': { emoji: '🤖', label: 'Inteligencia Artificial', label_en: 'Artificial Intelligence' },
  'ilustracion': { emoji: '🎨', label: 'Ilustración / Concept Art', label_en: 'Illustration / Concept Art' },
  'diseño-2d': { emoji: '🖌️', label: 'Diseño Gráfico', label_en: 'Graphic Design' },
  'ux-ui': { emoji: '🎯', label: 'UX/UI', label_en: 'UX/UI' },
  'arquitectura': { emoji: '🏗️', label: 'Arquitectura de Software', label_en: 'Software Architecture' },
  'bases-datos': { emoji: '🗄️', label: 'Bases de Datos', label_en: 'Databases' },
  'devops': { emoji: '🔧', label: 'DevOps / Infraestructura', label_en: 'DevOps / Infrastructure' },
  'analisis-datos': { emoji: '📊', label: 'Análisis de Datos', label_en: 'Data Analysis' },
  'documentacion': { emoji: '📝', label: 'Documentación Técnica', label_en: 'Technical Documentation' },
};

export function getDisciplineLabel(discipline: string, lang: 'es' | 'en' = 'es'): string {
  const info = DISCIPLINE_MAP[discipline as DisciplineKey];
  if (!info) return discipline;
  return lang === 'es' ? info.label : info.label_en;
}
