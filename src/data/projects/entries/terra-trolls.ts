// src/data/projects/entries/terra-trolls.ts
import { localizedText } from '../types';
import type { ProjectInput } from '../types';

const BASE = '/images/projects/2022-23/dibujo-artistico/terra-trolls';

export const terraTrolls: ProjectInput = {
  slug: 'terra-trolls',
  year: 2023,
  academicYear: '2022-23',
  context: 'grado',
  type: 'Proyecto de la Universidad',
  title: 'Terra Trolls',
  description: 'Proyecto grupal de concept art para un videojuego, con personajes, escenarios e interfaces. Mi aportación fueron los escenarios 2D, ilustrados en Photoshop con tableta Huion.',
  highlights: [
    localizedText('🏔️ Ilustración digital de escenarios 2D', '🏔️ 2D environment digital illustration'),
    localizedText('🖌️ Photoshop con tableta Huion', '🖌️ Photoshop with a Huion tablet'),
    localizedText('👥 Concept art de videojuego en equipo', '👥 Team video game concept art'),
  ],
  story: [
    {
      kind: 'context',
      icon: 'school',
      text: localizedText(
        'Proyecto grupal de la asignatura Dibujo Artístico: concept art de un videojuego con personajes, escenarios e interfaces.',
        'Group project for the Artistic Drawing course: concept art for a video game including characters, environments and interfaces.'
      ),
    },
    {
      kind: 'objective',
      icon: 'flag',
      text: localizedText(
        'Mi parte fueron los escenarios del juego; los personajes y las interfaces quedaron fuera de mi trabajo.',
        'My part was the game environments; characters and interfaces were outside my work.'
      ),
    },
    {
      kind: 'implementation',
      icon: 'deployed_code',
      text: localizedText(
        'Diseñé los escenarios mediante ilustración digital en Photoshop, dibujando con una tableta Huion.',
        'I designed the environments through digital illustration in Photoshop, drawing with a Huion tablet.'
      ),
    },
  ],
  skillGains: [
    localizedText('Ilustración digital de escenarios', 'Digital environment illustration'),
  ],
  tags: ['Ilustración', 'Concept Art', 'Escenarios'],
  subjects: ['Dibujo Artístico'],
  disciplines: ['ilustracion'],
  technologies: [
    { name: 'Photoshop', level: 'principal' },
    { name: 'Tableta Huion', level: 'secundaria' },
  ],
  publicable: true,
  featured: false,
  coverImage: `${BASE}/escenariobosquenocturno2d.jpg`,
  gallery: [
    {
      type: 'image',
      src: `${BASE}/escenariobosquenocturno2d.jpg`,
      alt: 'Escenario 2D de un bosque nocturno con montañas nevadas en Photoshop',
    },
    {
      type: 'image',
      src: `${BASE}/escenariocueva2d.jpg`,
      alt: 'Escenario 2D de una cueva con plataformas de piedra',
    },
  ],
  galleryConfig: { columns: 2, gap: 'medium', layout: 'masonry' },
  role: 'Ilustrador de escenarios',
  team: 'Proyecto académico grupal',
};
