// Reglas de presentación del inventario de habilidades, compartidas entre la
// página de Trayectoria y el índice del buscador (para que los enlaces
// apunten siempre a anclas que existen).
import { currentLearning, featuredSkills, INTRO_LEVEL, skillsInventory } from './learning';
import type { SkillItem, SkillLevel } from './learning';

export type RatedSkill = SkillItem & { level: SkillLevel };

export const isRated = (skill: SkillItem): skill is RatedSkill => skill.level !== undefined;

const learningNow = currentLearning.map((name) => name.toLowerCase());

/** Conocimientos introductorios: nivel 1 que no están ya en "Aprendizaje actual". */
export const introSkills: RatedSkill[] = skillsInventory
  .filter(isRated)
  .filter((s) => s.level === INTRO_LEVEL && !learningNow.includes(s.name.toLowerCase()));

/** Habilidades que se muestran dentro de su categoría (puntuadas > nivel 1, o sin puntuar). */
export const categorySkills = (category: string): SkillItem[] =>
  skillsInventory
    .filter((s) => s.category === category && (s.level === undefined || s.level > INTRO_LEVEL))
    .sort((a, b) => (b.level ?? 0) - (a.level ?? 0));

export const featuredWithLevel = featuredSkills.map((item) => {
  const skill = skillsInventory.filter(isRated).find((s) => s.id === item.skillId);
  if (!skill) throw new Error(`Competencia destacada sin habilidad puntuada: ${item.skillId}`);
  return { ...item, level: skill.level };
});

export const categoryAnchor = (category: string): string => `cat-${category}`;

/** Ancla de Trayectoria donde aparece la habilidad. */
export function skillAnchor(skill: SkillItem): string {
  if (skill.level === INTRO_LEVEL && learningNow.includes(skill.name.toLowerCase())) {
    return 'aprendizaje-actual';
  }
  return `skill-${skill.id}`;
}
