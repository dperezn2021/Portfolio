import type { Project } from '../data/projects';

export type ReasonType = 'subject' | 'discipline' | 'year' | 'technologies' | 'languages' | 'default';

export interface RelatedProject {
  project: Project;
  reason: string;
  reasonType: ReasonType;
}

export function getRelatedProjects(
  currentProject: Project,
  allProjects: Project[],
  limit: number = 3
): RelatedProject[] {
  const candidates = allProjects.filter((p) => {
    if (p.slug === currentProject.slug) return false;
    if (!p.publicable) return false;
    return true;
  });

  const scored = candidates.map((project) => {
    let score = 0;
    let reason = '';
    let reasonType: ReasonType = 'default';

    // Asignaturas (prioridad 1)
    if (currentProject.subjects?.length && project.subjects?.length) {
      const commonSubjects = currentProject.subjects.filter((s) =>
        project.subjects?.includes(s)
      );
      if (commonSubjects.length > 0) {
        score += commonSubjects.length * 10;
        reason = `Misma asignatura: ${commonSubjects[0]}`;
        reasonType = 'subject';
      }
    }

    // Disciplinas/Áreas (prioridad 2)
    if (score === 0 && currentProject.disciplines?.length && project.disciplines?.length) {
      const commonDisciplines = currentProject.disciplines.filter((d) =>
        project.disciplines?.includes(d)
      );
      if (commonDisciplines.length > 0) {
        score += commonDisciplines.length * 5;
        reason = `Mismo área: ${commonDisciplines[0]}`;
        reasonType = 'discipline';
      }
    }

    // Año (prioridad 3)
    if (score === 0 && currentProject.year === project.year) {
      score += 3;
      reason = `Mismo año: ${project.year}`;
      reasonType = 'year';
    }

    // Tecnologías (prioridad 4)
    if (score === 0 && currentProject.technologies?.length && project.technologies?.length) {
      const currentTechs = currentProject.technologies.map(t => typeof t === 'string' ? t : t.name).map(n => n.toLowerCase());
      const projectTechs = project.technologies.map(t => typeof t === 'string' ? t : t.name).map(n => n.toLowerCase());
      const commonTechs = currentTechs.filter(t => projectTechs.includes(t));
      if (commonTechs.length > 0) {
        score += commonTechs.length * 2;
        reason = `Misma tecnología: ${commonTechs[0]}`;
        reasonType = 'technologies';
      }
    }

    if (score === 0) {
      reason = 'Proyecto relacionado';
      reasonType = 'default';
    }

    return { project, score, reason, reasonType };
  });

  return scored
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((item) => ({ project: item.project, reason: item.reason, reasonType: item.reasonType }));
}
