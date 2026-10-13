import type { Project } from '../data/projects';

export interface RelatedProject {
  project: Project;
  reason: string;
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
    const reasons: string[] = [];

    if (currentProject.subjects?.length && project.subjects?.length) {
      const commonSubjects = currentProject.subjects.filter((s) =>
        project.subjects?.includes(s)
      );
      if (commonSubjects.length > 0) {
        score += commonSubjects.length * 10;
        reasons.push(`Misma asignatura: ${commonSubjects[0]}`);
      }
    }

    if (currentProject.disciplines?.length && project.disciplines?.length) {
      const commonDisciplines = currentProject.disciplines.filter((d) =>
        project.disciplines?.includes(d)
      );
      if (commonDisciplines.length > 0) {
        score += commonDisciplines.length * 5;
        if (reasons.length === 0) {
          reasons.push(`Mismo área: ${commonDisciplines[0]}`);
        }
      }
    }

    if (currentProject.year === project.year) {
      score += 3;
    }

    const reason = reasons[0] || 'Proyecto relacionado';

    return { project, score, reason };
  });

  return scored
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((item) => ({ project: item.project, reason: item.reason }));
}
