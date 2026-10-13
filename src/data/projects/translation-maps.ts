// src/data/projects/translation-maps.ts

const PROJECT_TYPE_KEYS: Record<string, string> = {
  'Proyecto de la Universidad': 'project.type.academic',
  'Trabajo de Fin de Grado': 'project.type.degree_project',
  'Personal': 'project.type.personal',
  'Freelance': 'project.type.freelance',
};

const TAG_KEYS: Record<string, string> = {
  'Patrones de diseño': 'project.tag.design_patterns',
  'Modelado 3D': 'project.tag.3d_modeling',
  'Exportación': 'project.tag.export',
  'Texturización': 'project.tag.texturing',
  'Ilustración': 'project.tag.illustration',
  'Desarrollo Cognitivo': 'project.tag.cognitive_development',
  'Gamificación': 'project.tag.gamification',
  'Narrativa': 'project.tag.narrative',
  'Diseño Gráfico': 'project.tag.graphic_design',
  'Animación 3D': 'project.tag.3d_animation',
  'Personajes': 'project.tag.characters',
  'Game Design': 'project.tag.game_design',
  'Videojuegos web': 'project.tag.web_games',
  'Desarrollo con IA': 'project.tag.ai_assisted',
  'Simulación física': 'project.tag.physics_simulation',
};

const LINK_KEYS: Record<string, string> = {
  'Jugar': 'project.link.play',
  'Vídeo Explicativo': 'project.link.explainer_video',
  'Prototipo': 'project.link.prototype',
  'Memoria PDF': 'project.link.report_pdf',
  'Web Sealy Studio': 'project.link.studio_website',
  'Ir a la web': 'project.link.visit_website',
  'Descargar Video Demo': 'project.link.demo_video',
  'Descargar Memoria PDF': 'project.link.report_pdf',
  'Código en GitHub': 'project.link.codigo_en_github',
  'Concept art de escenario (PDF)': 'project.link.concept_art_de_escenario_pdf',
  'Concept art de personaje (PDF)': 'project.link.concept_art_de_personaje_pdf',
  'GitHub': 'project.link.github',
  'Colección BONK en itch.io': 'project.link.bonk_itch',
};

export function getProjectTypeTranslationKey(type: string): string | undefined {
  return PROJECT_TYPE_KEYS[type];
}

export function getProjectTagTranslationKey(tag: string): string | undefined {
  return TAG_KEYS[tag];
}

export function getProjectLinkTranslationKey(label: string): string | undefined {
  return LINK_KEYS[label];
}
