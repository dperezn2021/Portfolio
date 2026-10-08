// src/data/projects/index.ts
import { t } from '../translations';
import type { ProjectInput, Project } from './types';

export * from './types';
export * from './disciplines';
export * from './translation-maps';

import { alienRush } from './entries/alien-rush';
import { astrofury } from './entries/astrofury';
import { fantasyIsland } from './entries/fantasy-island';
import { flappyChef } from './entries/flappy-chef';
import { goForSports } from './entries/go-for-sports';
import { gorobeia } from './entries/gorobeia';
import { histeria } from './entries/histeria';
import { hitAndUfo } from './entries/hit-and-ufo';
import { internationalWarfare } from './entries/international-warfare';
import { menteando } from './entries/menteando';
import { raki } from './entries/raki';
import { rakiAnimacion } from './entries/raki-animacion';
import { redesSociales } from './entries/redes-sociales';
import { siSenorOscuro } from './entries/si-senor-oscuro';
import { whispersOfShadows } from './entries/whispers-of-shadows';
import { yumala } from './entries/yumala';

// Proyectos pendientes (publicable: false): identificados en el catálogo
// académico (docs/ACADEMIC_PROJECTS.md) pero sin material suficiente aún.
import { flyFumigator } from './entries/fly-fumigator';
import { willyFog } from './entries/willy-fog';
import { michaelSoffieldTheRescue } from './entries/michael-soffield-the-rescue';
import { bingo } from './entries/bingo';
import { retratoDeCarla } from './entries/retrato-de-carla';
import { terraTrolls } from './entries/terra-trolls';
import { animalesYPlantasFantasticos } from './entries/animales-y-plantas-fantasticos';
import { figuraFemeninaConArmadura } from './entries/figura-femenina-con-armadura';
import { investigacionRatchetAndClank } from './entries/investigacion-ratchet-and-clank';
import { juegoDeLaVida } from './entries/juego-de-la-vida';
import { fabrica } from './entries/fabrica';
import { rompecubos } from './entries/rompecubos';
import { zombierush } from './entries/zombierush';
import { productoHapticoStartup } from './entries/producto-haptico-startup';
import { practicaAEstrella } from './entries/practica-a-estrella';
import { entrenamientoQLearning } from './entries/entrenamiento-q-learning';
import { storyboardEscenaLiteraria } from './entries/storyboard-escena-literaria';
import { presentacionDirectx12 } from './entries/presentacion-directx12';
import { entornosMultijugador } from './entries/entornos-multijugador';
import { proyectoValorantDatos } from './entries/proyecto-valorant-datos';
import { personajeDjAutonomo } from './entries/personaje-dj-autonomo';
import { quest } from './entries/quest';
import { wordle } from './entries/wordle';

// ============================================
// PROYECTOS - cada proyecto vive en su propio archivo bajo ./entries
// ============================================
const rawProjects: ProjectInput[] = [
  // Publicados
  alienRush,
  astrofury,
  fantasyIsland,
  flappyChef,
  goForSports,
  gorobeia,
  histeria,
  hitAndUfo,
  internationalWarfare,
  menteando,
  raki,
  rakiAnimacion,
  redesSociales,
  siSenorOscuro,
  whispersOfShadows,
  yumala,
  // Pendientes (publicable: false)
  flyFumigator,
  willyFog,
  michaelSoffieldTheRescue,
  bingo,
  retratoDeCarla,
  terraTrolls,
  animalesYPlantasFantasticos,
  figuraFemeninaConArmadura,
  investigacionRatchetAndClank,
  juegoDeLaVida,
  fabrica,
  rompecubos,
  zombierush,
  productoHapticoStartup,
  practicaAEstrella,
  entrenamientoQLearning,
  storyboardEscenaLiteraria,
  presentacionDirectx12,
  entornosMultijugador,
  proyectoValorantDatos,
  personajeDjAutonomo,
  quest,
  wordle,
];

export const projects: Project[] = rawProjects.map((project) => {
  const externalLinks = project.externalLinks ?? project.links ?? [];
  return {
    ...project,
    academicYear: project.academicYear ?? 'Personal / sin año académico',
    context: project.context ?? 'personal',
    subjects: project.subjects ?? [],
    publicable: project.publicable ?? true,
    cover: project.cover ?? project.coverImage,
    gallery: project.gallery?.length
      ? project.gallery
      : (project.galleryImages ?? []).map((item) => typeof item === 'string'
          ? { type: 'image', src: item }
          : { type: 'image', src: item.src, title: item.src, description: '' }),
    externalLinks,
    // `resources` es el campo preferido para proyectos nuevos. Los proyectos
    // existentes, que todavía usan `links`/`externalLinks`, se adaptan aquí
    // automáticamente para no tener que reescribirlos.
    resources: project.resources?.length
      ? project.resources
      : externalLinks.map((link) => ({ type: 'link' as const, url: link.url, title: link.label })),
  };
});

export const publicProjects = projects.filter((project) => project.publicable);

// Re-exportar t para facilitar el uso
export { t };
