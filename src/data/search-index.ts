// Índice del buscador global. Se genera en build a partir de los datos reales
// (proyectos publicados, inventario de habilidades, herramientas, áreas,
// cronología, titulaciones y certificaciones). No hay datos duplicados a mano.
import { TRANSLATIONS } from './translations';
import { publicProjects } from './projects';
import { DISCIPLINE_MAP, getProjectTagTranslationKey } from './projects';
import {
  credentials,
  pendingCredentials,
  shortCourses,
  skillCategories,
  skillsInventory,
} from './learning';
import { categoryAnchor, skillAnchor } from './skills-view';
import { skills as workAreas } from './skills';
import { languages, mainToolGroups, otherLanguages, otherTools, toolSlug } from './tools';
import type { Tool } from './tools';
import { timeline } from './timeline';
import { withBasePath } from '../utils/paths';

export type SearchGroup = 'projects' | 'skills' | 'experience' | 'education';
export type SearchType =
  | 'project'
  | 'skill'
  | 'tool'
  | 'area'
  | 'category'
  | 'experience'
  | 'timeline'
  | 'degree'
  | 'course'
  | 'pending';

interface Bilingual {
  es: string;
  en: string;
}

export interface SearchEntry {
  id: string;
  group: SearchGroup;
  type: SearchType;
  url: string;
  title: Bilingual;
  desc: Bilingual;
  /** Texto adicional buscable (ES + EN): etiquetas, tecnologías, relaciones... */
  kw: string;
  level?: number;
}

const dict = TRANSLATIONS as unknown as Record<'es' | 'en', Record<string, string>>;
const tr = (lang: 'es' | 'en', key: string, fallback = ''): string => dict[lang][key] ?? fallback;
const both = (key: string, fallbackEs = '', fallbackEn = fallbackEs): Bilingual => ({
  es: tr('es', key, fallbackEs),
  en: tr('en', key, fallbackEn),
});
const bothText = (b: Bilingual): string => `${b.es} ${b.en}`;

const compact = (value: string): string =>
  value
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9#+]/g, '');

function shorten(text: string, max = 170): string {
  const clean = text.replace(/\s+/g, ' ').trim();
  if (clean.length <= max) return clean;
  const cut = clean.slice(0, max);
  return `${cut.slice(0, cut.lastIndexOf(' ') > 80 ? cut.lastIndexOf(' ') : max).replace(/[,.;:]$/, '')}…`;
}

const AI_TERMS = 'IA AI inteligencia artificial artificial intelligence';

const publicSlugs = new Set(publicProjects.map((p) => p.slug));
const projectTitle = (slug: string): Bilingual => {
  const project = publicProjects.find((p) => p.slug === slug)!;
  return both(`project.${slug}.title`, project.title);
};
const publicOnly = (slugs: string[] = []): string[] => slugs.filter((slug) => publicSlugs.has(slug));

// ---------------------------------------------------------------------------
// Relaciones
// ---------------------------------------------------------------------------
const projectsOfSkill = (slugs?: string[]) => publicOnly(slugs);

/** Proyectos públicos cuya lista de tecnologías incluye la herramienta. */
function projectsUsingTool(tool: Tool): string[] {
  const names = [tool.name, ...(tool.aliases ?? [])].map(compact);
  return publicProjects
    .filter((project) =>
      (project.technologies ?? []).some((tech) => {
        const c = compact(tech.name);
        return names.some((n) => c === n || (n.length >= 5 && c.includes(n)));
      })
    )
    .map((p) => p.slug);
}

const areasOfProject = (slug: string): Bilingual[] =>
  workAreas.filter((area) => area.projectSlugs.includes(slug)).map((area) => area.name);

const skillsOfProject = (slug: string) =>
  skillsInventory.filter((s) => (s.projectSlugs ?? []).includes(slug));

// ---------------------------------------------------------------------------
// Entradas
// ---------------------------------------------------------------------------
const entries: SearchEntry[] = [];

// Proyectos publicados
const CONTEXT_LABEL: Record<string, Bilingual> = {
  grado: { es: 'Universidad Grado', en: 'University Degree' },
  master: { es: 'Máster', en: 'Master' },
  personal: { es: 'Proyecto personal', en: 'Personal project' },
  laboral: { es: 'Freelance laboral', en: 'Freelance work' },
};

for (const project of publicProjects) {
  const tags = project.tags.flatMap((tag) => {
    const key = getProjectTagTranslationKey(tag);
    return key ? [tr('es', key, tag), tr('en', key, tag)] : [tag];
  });
  const disciplines = project.disciplines.flatMap((d) => {
    const info = DISCIPLINE_MAP[d as keyof typeof DISCIPLINE_MAP];
    return info ? [info.label, info.label_en, d === 'ia' ? AI_TERMS : ''] : [d];
  });
  const techs = (project.technologies ?? []).map((tech) => tech.name);
  const relatedSkills = skillsOfProject(project.slug).flatMap((s) => [
    tr('es', `skill.${s.id}`, s.name),
    tr('en', `skill.${s.id}`, s.name),
  ]);
  const areas = areasOfProject(project.slug).map(bothText);
  const ctx = CONTEXT_LABEL[project.context];

  entries.push({
    id: `project-${project.slug}`,
    group: 'projects',
    type: 'project',
    url: withBasePath(`/proyectos/${project.slug}`),
    title: both(`project.${project.slug}.title`, project.title),
    desc: {
      es: shorten(tr('es', `project.${project.slug}.desc`, project.description)),
      en: shorten(tr('en', `project.${project.slug}.desc`, project.description)),
    },
    kw: [
      ...tags,
      ...disciplines,
      ...techs,
      ...relatedSkills,
      ...areas,
      ...project.subjects,
      project.academicYear,
      String(project.year),
      project.type,
      ctx ? bothText(ctx) : '',
    ]
      .filter(Boolean)
      .join(' '),
  });
}

// Herramientas y tecnologías (Sobre mí). Se omiten las que ya son una habilidad del inventario.
const skillByCompactName = new Map(
  skillsInventory.map((s) => [compact(tr('es', `skill.${s.id}`, s.name)), s.id] as const)
);
const extraKwBySkill = new Map<string, string[]>();
const addSkillKw = (skillId: string, ...words: string[]) =>
  extraKwBySkill.set(skillId, [...(extraKwBySkill.get(skillId) ?? []), ...words]);

interface ToolSource {
  tool: Tool;
  group: Bilingual;
}
const toolSources: ToolSource[] = [
  ...mainToolGroups.flatMap((g) => g.tools.map((tool) => ({ tool, group: g.label }))),
  ...otherTools.map((tool) => ({ tool, group: both('about.tools_other_title', 'Otras herramientas utilizadas') })),
  ...languages.map((tool) => ({ tool, group: both('about.languages_title', 'Lenguajes y tecnologías utilizadas') })),
  ...otherLanguages.map((tool) => ({ tool, group: both('about.languages_title', 'Lenguajes y tecnologías utilizadas') })),
];

const seenTools = new Set<string>();
for (const { tool, group } of toolSources) {
  const slug = toolSlug(tool.name);
  if (seenTools.has(slug)) continue;
  seenTools.add(slug);

  const usedIn = projectsUsingTool(tool);
  const linkedSkill =
    tool.skillId ?? skillByCompactName.get(compact(tool.name)) ?? undefined;

  if (linkedSkill) {
    addSkillKw(linkedSkill, tool.name, ...(tool.aliases ?? []), bothText(group), ...usedIn.map((s) => bothText(projectTitle(s))));
    continue;
  }

  const usage = usedIn.length
    ? {
        es: `${group.es}. Usada en: ${usedIn.map((s) => projectTitle(s).es).join(', ')}.`,
        en: `${group.en}. Used in: ${usedIn.map((s) => projectTitle(s).en).join(', ')}.`,
      }
    : { es: group.es, en: group.en };

  entries.push({
    id: `tool-${slug}`,
    group: 'skills',
    type: 'tool',
    url: withBasePath(`/sobre-mi#tool-${slug}`),
    title: { es: tool.name, en: tool.name },
    desc: usage,
    kw: [tool.name, ...(tool.aliases ?? []), bothText(group), ...usedIn.map((s) => bothText(projectTitle(s)))].join(' '),
  });
}

// Habilidades del inventario (Trayectoria)
const categoryLabel = (cat: string): Bilingual => both(`category.${cat}`);
const SOURCE_LABEL: Record<string, Bilingual> = {
  Universidad: { es: 'Universidad', en: 'University' },
  Trabajo: { es: 'Trabajo', en: 'Work' },
  Personal: { es: 'Personal', en: 'Personal' },
};

for (const skill of skillsInventory) {
  const related = projectsOfSkill(skill.projectSlugs);
  const cat = categoryLabel(skill.category);
  entries.push({
    id: `skill-${skill.id}`,
    group: 'skills',
    type: skill.kind === 'tool' ? 'tool' : 'skill',
    url: withBasePath(`/trayectoria#${skillAnchor(skill)}`),
    title: both(`skill.${skill.id}`, skill.name),
    desc: both(`skill.${skill.id}.desc`),
    level: skill.level,
    kw: [
      bothText(cat),
      skill.category === 'ai' ? AI_TERMS : '',
      ...skill.sources.map((s) => bothText(SOURCE_LABEL[s] ?? { es: s, en: s })),
      ...related.map((slug) => bothText(projectTitle(slug))),
      ...(extraKwBySkill.get(skill.id) ?? []),
    ]
      .filter(Boolean)
      .join(' '),
  });
}

// Categorías del inventario (abren y enfocan la categoría)
for (const cat of skillCategories) {
  const label = categoryLabel(cat);
  entries.push({
    id: `category-${cat}`,
    group: 'skills',
    type: 'category',
    url: withBasePath(`/trayectoria#${categoryAnchor(cat)}`),
    title: label,
    desc: {
      es: 'Categoría del inventario de habilidades.',
      en: 'Skills inventory category.',
    },
    kw: cat === 'ai' ? AI_TERMS : '',
  });
}

// Áreas de trabajo (Sobre mí)
for (const area of workAreas) {
  const related = publicOnly(area.projectSlugs);
  entries.push({
    id: `area-${area.id}`,
    group: 'skills',
    type: 'area',
    url: withBasePath(`/sobre-mi#area-${area.id}`),
    title: area.name,
    desc: area.description,
    kw: [
      ...related.map((slug) => bothText(projectTitle(slug))),
      ...(area.extras ?? []).map(bothText),
      area.id === 'ai-products' ? AI_TERMS : '',
    ]
      .filter(Boolean)
      .join(' '),
  });
}

// Cronología de Trayectoria: experiencia profesional y etapas de formación
const workSkillNames = skillsInventory
  .filter((s) => s.sources.includes('Trabajo'))
  .map((s) => bothText(both(`skill.${s.id}`, s.name)));
const universitySkillNames = skillsInventory
  .filter((s) => s.sources.includes('Universidad'))
  .map((s) => bothText(both(`skill.${s.id}`, s.name)));

for (const item of timeline) {
  const isWork = item.kind === 'experience';
  entries.push({
    id: `experience-${item.n}`,
    group: 'experience',
    type: isWork ? 'experience' : 'timeline',
    url: withBasePath(`/trayectoria#timeline-${item.n}`),
    title: both(`about.timeline.title${item.n}`),
    desc: {
      es: shorten(`${item.issuer}. ${tr('es', `about.timeline.desc${item.n}`)}`),
      en: shorten(`${item.issuer}. ${tr('en', `about.timeline.desc${item.n}`)}`),
    },
    kw: [item.issuer, bothText(both(`about.timeline.period${item.n}`)), ...(isWork ? workSkillNames : [])].join(' '),
  });
}

// Formación: titulaciones, cursos y certificaciones en preparación
for (const cred of credentials) {
  const title = both(`credential.${cred.id}.title`);
  const status = cred.inProgress ? both('about.learning.in_progress') : { es: '', en: '' };
  entries.push({
    id: `education-${cred.id}`,
    group: 'education',
    type: 'degree',
    url: withBasePath(`/trayectoria#cred-${cred.id}`),
    title,
    desc: {
      es: [cred.issuer, cred.year, status.es].filter(Boolean).join(' · '),
      en: [cred.issuer, cred.year, status.en].filter(Boolean).join(' · '),
    },
    kw: [bothText(both(`credential.type.${cred.type}`)), ...(cred.id === 'degree-game-design' ? universitySkillNames : [])].join(' '),
  });
}

for (const course of shortCourses) {
  entries.push({
    id: `education-${course.id}`,
    group: 'education',
    type: 'course',
    url: withBasePath(`/trayectoria#cred-${course.id}`),
    title: both(`credential.${course.id}.title`),
    desc: {
      es: `${course.issuer} · ${course.year}`,
      en: `${course.issuer} · ${course.year.replace('Ago.', 'Aug.')}`,
    },
    kw: [bothText(both(`credential.type.${course.type}`)), AI_TERMS, 'Claude Anthropic'].join(' '),
  });
}

for (const pending of pendingCredentials) {
  entries.push({
    id: `education-${pending.id}`,
    group: 'education',
    type: 'pending',
    url: withBasePath(`/trayectoria#cred-${pending.id}`),
    title: both(`credential.${pending.id}.title`),
    desc: {
      es: `${pending.issuer} · ${tr('es', 'credential.type.pending')}`,
      en: `${pending.issuer} · ${tr('en', 'credential.type.pending')}`,
    },
    kw: [AI_TERMS, 'Claude Anthropic'].join(' '),
  });
}

// Sin duplicados por id/url+título
const seen = new Set<string>();
export const searchIndex: SearchEntry[] = entries.filter((entry) => {
  const key = `${entry.url}|${entry.title.es}`;
  if (seen.has(entry.id) || seen.has(key)) return false;
  seen.add(entry.id);
  seen.add(key);
  return true;
});
