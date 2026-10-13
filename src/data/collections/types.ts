// src/data/collections/types.ts
// Colecciones: un proyecto "padre" (entrada normal de src/data/projects/entries)
// cuyos elementos hijos tienen página propia (/proyectos/<proyecto>/<elemento>)
// pero NO son proyectos independientes: no salen en listado, filtros ni estadísticas.
import type { GalleryItem, LocalizedText } from '../projects/types';

export type CollectionAccent = 'cyan' | 'amber' | 'emerald' | 'rose' | 'violet' | 'sky' | 'orange';

export interface CollectionItem {
  /** Último segmento de la URL: /proyectos/<proyecto>/<slug>. */
  slug: string;
  title: string;
  /** Género o tipo de juego, p. ej. "Arcade de precisión". */
  genre: LocalizedText;
  /** Resumen de 1-2 frases para la tarjeta de la colección. */
  summary: LocalizedText;
  /** Qué hace diferente al juego (introducción de su página). */
  description: LocalizedText;
  /** Cómo jugar: controles y acciones del jugador. */
  controls: LocalizedText[];
  /** Mecánicas principales. */
  mechanics: LocalizedText[];
  powerUps?: LocalizedText[];
  upgrades?: LocalizedText[];
  /** Características destacadas. */
  highlights: LocalizedText[];
  /** Solo tecnologías verificadas para este juego. */
  technologies: string[];
  /** Enlace para jugar (itch.io). */
  playUrl: string;
  /** Icono de Material Symbols para la tarjeta/cabecera cuando no hay imagen. */
  icon: string;
  accent: CollectionAccent;
  /** Imagen local opcional (miniatura/portada). Sin imagen se usa un fondo neutro con icono. */
  cover?: string;
  featuredMedia?: GalleryItem;
  gallery?: GalleryItem[];
  /** `false` oculta el juego (ni tarjeta ni página). Por defecto, publicado. */
  publicable?: boolean;
}

export interface ProjectCollection {
  /** Slug del proyecto padre (debe existir en src/data/projects/entries). */
  projectSlug: string;
  /** Página de la colección en la plataforma de distribución (itch.io). */
  storeUrl?: string;
  items: CollectionItem[];
}
