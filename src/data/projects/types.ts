// src/data/projects/types.ts

export type LocalizedText = {
  es: string;
  en: string;
};

export const localizedText = (es: string, en: string): LocalizedText => ({ es, en });

export type ProjectStoryStepKind = 'context' | 'objective' | 'implementation' | 'learning';

export interface ProjectStoryStep {
  kind: ProjectStoryStepKind;
  icon: string;
  text: LocalizedText;
}

export interface GalleryItem {
  type: 'image' | 'video' | 'audio' | 'pdf' | 'iframe' | 'game' | 'link';
  src?: string;
  url?: string;
  title?: string;
  description?: string;
  alt?: string;
  /** Miniatura para vídeos (galería y contenido principal). */
  poster?: string;
  /**
   * Preferencia explícita de presentación en la sección de Recursos o en el
   * contenido principal: forzar vista incrustada o forzar enlace externo.
   * Si no se indica, se infiere automáticamente según la URL.
   */
  display?: 'embed' | 'link';
}

export type ProjectTechnology = { name: string; level?: 'principal' | 'secundaria' | 'experimental' };

export interface Project {
  slug: string;
  year: number;
  academicYear: string;
  context: 'grado' | 'master' | 'personal' | 'laboral';
  type: string;
  title: string;
  description: string;
  challenges?: string;
  solution?: string;
  highlights?: LocalizedText[];
  story?: ProjectStoryStep[];
  skillGains?: LocalizedText[];
  tags: string[];
  subjects: string[];
  publicable: boolean;
  /**
   * Portada e imágenes/galería son opcionales: un proyecto oculto
   * (`publicable: false`) puede no tener todavía ningún recurso visual.
   */
  coverImage?: string;
  cover?: string;
  galleryImages?: (string | { src: string; rotate?: 90 | 180 | 270 })[];
  /** Galería mixta de imágenes y vídeos (nunca PDFs, repos o enlaces sueltos). */
  gallery: GalleryItem[];
  galleryConfig?: {
    columns?: 1 | 2 | 3 | 4 | 5;
    gap?: 'small' | 'medium' | 'large';
    imageSize?: 'small' | 'medium' | 'large' | 'full';
    aspectRatio?: 'auto' | 'square' | 'video' | 'portrait' | 'landscape';
    layout?: 'grid' | 'masonry' | 'featured';
  };
  /**
   * Contenido principal opcional (imagen, vídeo local/YouTube/Vimeo, PDF,
   * Figma, demo/juego embebido...). Si no se indica, la portada (`cover`)
   * hace de contenido principal por compatibilidad con proyectos antiguos.
   */
  featuredMedia?: GalleryItem;
  links?: { label: string; url: string }[];
  externalLinks: { label: string; url: string }[];
  /**
   * Recursos y enlaces opcionales (GitHub, itch.io, PDF, documentación, demo,
   * Figma, web...). Nombre preferido para proyectos nuevos; en proyectos
   * existentes se deriva automáticamente de `externalLinks`/`links`.
   */
  resources: GalleryItem[];
  featured: boolean;
  role?: string;
  team?: string;
  duration?: string;
  learnings?: string;
  status?: 'completado' | 'en-desarrollo' | 'prototipo' | 'pausado';
  technologies?: ProjectTechnology[];
  disciplines: string[];
}

export type ProjectInput = Omit<Project, 'academicYear' | 'context' | 'subjects' | 'publicable' | 'cover' | 'gallery' | 'externalLinks' | 'resources'> & {
  academicYear?: string;
  context?: Project['context'];
  subjects?: string[];
  publicable?: boolean;
  cover?: string;
  gallery?: GalleryItem[];
  externalLinks?: { label: string; url: string }[];
  resources?: GalleryItem[];
};

export type DisciplineKey =
  | 'videojuegos'
  | 'red'
  | 'aplicaciones'
  | 'desarrollo-web'
  | 'modelado-3d'
  | 'animacion-2d'
  | 'animacion-3d'
  | 'ilustracion'
  | 'diseño-2d'
  | 'ux-ui'
  | 'arquitectura'
  | 'bases-datos'
  | 'devops'
  | 'analisis-datos'
  | 'documentacion'
  | 'ia';

export type DisciplineInfo = {
  emoji: string;
  label: string;
  label_en: string;
};
