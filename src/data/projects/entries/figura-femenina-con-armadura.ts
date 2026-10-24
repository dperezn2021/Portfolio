// src/data/projects/entries/figura-femenina-con-armadura.ts
// Oculto: dibujos originales en papel; la fase digital está pendiente de recuperar.
import { localizedText } from '../types';
import type { ProjectInput } from '../types';

export const figuraFemeninaConArmadura: ProjectInput = {
  slug: 'figura-femenina-con-armadura',
  year: 2023,
  academicYear: '2022-23',
  context: 'grado',
  type: 'Proyecto de la Universidad',
  title: 'Figura Femenina con Armadura',
  description: 'Trabajo individual de Dibujo Artístico: dibujo anatómico del natural y ejercicio de vestir digitalmente una figura femenina con una armadura.',
  highlights: [
    localizedText('✏️ Dibujo anatómico del natural en papel', '✏️ Life drawing on paper'),
    localizedText('🛡️ Ejercicio de vestir la figura con una armadura', '🛡️ Exercise dressing the figure in armour'),
  ],
  story: [
    {
      kind: 'context',
      icon: 'school',
      text: localizedText(
        'Trabajo de la asignatura Dibujo Artístico sobre anatomía y figura humana.',
        'Work for the Artistic Drawing course on anatomy and the human figure.'
      ),
    },
    {
      kind: 'implementation',
      icon: 'deployed_code',
      text: localizedText(
        'Dibujé en papel a partir de modelos en clase. Después estaba prevista una fase digital en Photoshop para vestir la figura con una armadura.',
        'I drew on paper from models in class. A digital phase in Photoshop followed to dress the figure in armour.'
      ),
    },
    {
      kind: 'learning',
      icon: 'insights',
      text: localizedText(
        'Lo más difícil fueron la anatomía, las proporciones y la orientación de la figura.',
        'The hardest parts were anatomy, proportions and the orientation of the figure.'
      ),
    },
  ],
  skillGains: [
    localizedText('Dibujo anatómico del natural', 'Anatomical life drawing'),
  ],
  en: {
    title: 'Female Figure in Armour',
    description: 'Individual Artistic Drawing work: life drawing and an exercise in digitally dressing a female figure in armour.',
    role: 'Draughtsman',
    team: 'Individual academic project',
  },
  tags: ['Ilustración', 'Lápiz y papel'],
  subjects: ['Dibujo Artístico'],
  disciplines: ['ilustracion'],
  technologies: [
    { name: 'Photoshop', level: 'secundaria' },
  ],
  publicable: false,
  featured: false,
  role: 'Dibujante',
  team: 'Proyecto académico individual',
};
