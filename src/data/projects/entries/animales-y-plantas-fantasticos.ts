// src/data/projects/entries/animales-y-plantas-fantasticos.ts
// Oculto: material pendiente de recuperar. No inventar portada, galería ni recursos.
import { localizedText } from '../types';
import type { ProjectInput } from '../types';

export const animalesYPlantasFantasticos: ProjectInput = {
  slug: 'animales-y-plantas-fantasticos',
  year: 2023,
  academicYear: '2022-23',
  context: 'grado',
  type: 'Proyecto de la Universidad',
  title: 'Animales y Plantas Fantásticos',
  description: 'Trabajo individual de Dibujo Artístico: ilustraciones de animales y plantas inventados, pintadas en digital con tableta a partir de referencias de Pinterest.',
  highlights: [
    localizedText('🦄 Criaturas y plantas inventadas', '🦄 Invented creatures and plants'),
    localizedText('🖌️ Pintura digital con tableta', '🖌️ Digital painting with a tablet'),
  ],
  story: [
    {
      kind: 'context',
      icon: 'school',
      text: localizedText(
        'Trabajo de la asignatura Dibujo Artístico sobre animales y plantas fantásticos.',
        'Work for the Artistic Drawing course on fantasy animals and plants.'
      ),
    },
    {
      kind: 'implementation',
      icon: 'deployed_code',
      text: localizedText(
        'Busqué referencias en Pinterest y dibujé y pinté las ilustraciones en digital, con Photoshop y una tableta Huion.',
        'I gathered references on Pinterest and drew and painted the illustrations digitally, with Photoshop and a Huion tablet.'
      ),
    },
    {
      kind: 'learning',
      icon: 'insights',
      text: localizedText(
        'La dificultad principal fue combinar elementos y texturas de forma coherente en cada criatura.',
        'The main difficulty was combining elements and textures coherently in each creature.'
      ),
    },
  ],
  skillGains: [
    localizedText('Pintura digital con tableta', 'Digital painting with a tablet'),
  ],
  en: {
    title: 'Fantasy Animals and Plants',
    description: 'Individual Artistic Drawing work: illustrations of invented animals and plants, digitally painted with a tablet from Pinterest references.',
    role: 'Illustrator',
    team: 'Individual academic project',
  },
  tags: ['Ilustración', 'Tableta Huion'],
  subjects: ['Dibujo Artístico'],
  disciplines: ['ilustracion'],
  technologies: [
    { name: 'Photoshop', level: 'principal' },
  ],
  publicable: false,
  featured: false,
  role: 'Ilustrador',
  team: 'Proyecto académico individual',
};
