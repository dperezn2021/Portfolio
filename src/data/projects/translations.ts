import type { Project, ProjectTextField } from './types';

// Sufijo de la clave `project.<slug>.<sufijo>` en window.translations (el cambio de idioma en cliente las usa).
const KEY_SUFFIX: Record<ProjectTextField, string> = {
  title: 'title',
  description: 'desc',
  challenges: 'challenges',
  solution: 'solution',
  role: 'role',
  team: 'team',
  duration: 'duration',
  learnings: 'learnings',
};

export function buildProjectTranslations(projects: Project[]) {
  const es: Record<string, string> = {};
  const en: Record<string, string> = {};

  for (const project of projects) {
    for (const [field, suffix] of Object.entries(KEY_SUFFIX) as [ProjectTextField, string][]) {
      const spanish = project[field];
      if (!spanish) continue;
      const key = `project.${project.slug}.${suffix}`;
      es[key] = spanish;
      en[key] = project.en?.[field] ?? spanish;
    }
  }

  return { es, en };
}
