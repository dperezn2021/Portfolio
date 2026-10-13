// src/data/projects/entries/retrato-de-carla.ts
// Oculto: sin material visual recuperado. No inventar portada, galería ni recursos.
import { localizedText } from '../types';
import type { ProjectInput } from '../types';

export const retratoDeCarla: ProjectInput = {
  slug: 'retrato-de-carla',
  year: 2023,
  academicYear: '2022-23',
  context: 'grado',
  type: 'Proyecto de la Universidad',
  title: 'Retrato de Carla',
  description: 'Trabajo individual de Dibujo Artístico: retratos de Carla de frente y de perfil, dibujados con lápiz y carboncillo, con versiones digitales en Photoshop y caricaturas.',
  highlights: [
    localizedText('✏️ Retratos a lápiz y carboncillo', '✏️ Pencil and charcoal portraits'),
    localizedText('🖌️ Versiones digitales con Photoshop y tableta Huion', '🖌️ Digital versions with Photoshop and a Huion tablet'),
    localizedText('🎭 Caricaturas', '🎭 Caricatures'),
  ],
  story: [
    {
      kind: 'context',
      icon: 'school',
      text: localizedText(
        'Trabajo de la asignatura Dibujo Artístico centrado en el retrato.',
        'Work for the Artistic Drawing course focused on portraiture.'
      ),
    },
    {
      kind: 'implementation',
      icon: 'deployed_code',
      text: localizedText(
        'Dibujé los retratos de frente y de perfil en láminas, con lápiz y carboncillo. También hice versiones digitales en Photoshop con una tableta Huion, además de caricaturas.',
        'I drew the front and profile portraits on sheets with pencil and charcoal. I also made digital versions in Photoshop with a Huion tablet, as well as caricatures.'
      ),
    },
    {
      kind: 'learning',
      icon: 'insights',
      text: localizedText(
        'Lo más difícil fue conseguir el parecido facial, mantener las proporciones y corregir sobre papel, donde no se puede deshacer.',
        'The hardest parts were capturing the likeness, keeping proportions right and correcting on paper, where there is no undo.'
      ),
    },
  ],
  skillGains: [
    localizedText('Retrato a lápiz y carboncillo', 'Pencil and charcoal portraiture'),
    localizedText('Dibujo digital con tableta', 'Digital drawing with a tablet'),
  ],
  tags: ['Ilustración'],
  subjects: ['Dibujo Artístico'],
  disciplines: ['ilustracion'],
  technologies: [
    { name: 'Lápiz y carboncillo', level: 'principal' },
    { name: 'Photoshop', level: 'secundaria' },
    { name: 'Tableta Huion', level: 'secundaria' },
  ],
  publicable: false,
  featured: false,
  role: 'Dibujante',
  team: 'Proyecto académico individual',
};
