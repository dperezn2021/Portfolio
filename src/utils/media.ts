// src/utils/media.ts
// Clasificación de URLs externas en un tipo de recurso embebible, compartida
// entre el contenido principal, la galería y la sección de recursos para no
// duplicar la misma lógica de detección en varios componentes.

export type ResolvedMediaKind = 'video' | 'pdf' | 'figma' | 'game' | 'github' | 'website';

export interface ResolvedEmbed {
  kind: ResolvedMediaKind;
  /** Presente solo cuando el contenido puede incrustarse de forma segura. */
  embedUrl?: string;
}

const YOUTUBE_RE = /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([\w-]+)/i;
const VIMEO_RE = /vimeo\.com\/(?:video\/)?(\d+)/i;
const FIGMA_PROTO_RE = /figma\.com\/proto\//i;
const DRIVE_ID_RE = /drive\.google\.com\/.*?[?&]id=([\w-]+)|drive\.google\.com\/file\/d\/([\w-]+)/i;

/**
 * Dado una URL (y opcionalmente una etiqueta/tipo declarado), decide qué tipo
 * de recurso es y, si es técnicamente seguro, una URL de iframe embebible.
 */
export function resolveEmbed(url: string, hint: { declaredType?: string; label?: string } = {}): ResolvedEmbed {
  const { declaredType, label = '' } = hint;

  const youtube = url.match(YOUTUBE_RE);
  if (youtube) return { kind: 'video', embedUrl: `https://www.youtube.com/embed/${youtube[1]}` };

  const vimeo = url.match(VIMEO_RE);
  if (vimeo) return { kind: 'video', embedUrl: `https://player.vimeo.com/video/${vimeo[1]}` };

  if (FIGMA_PROTO_RE.test(url)) return { kind: 'figma', embedUrl: url };

  const driveMatch = url.match(DRIVE_ID_RE);
  const driveId = driveMatch?.[1] ?? driveMatch?.[2];
  if (driveId && (declaredType === 'pdf' || /pdf|memoria|documentaci/i.test(label))) {
    return { kind: 'pdf', embedUrl: `https://drive.google.com/file/d/${driveId}/preview` };
  }
  if (/\.pdf($|\?)/i.test(url)) return { kind: 'pdf', embedUrl: url };

  if (/github\.com/i.test(url)) return { kind: 'github' };
  if (/itch\.io/i.test(url)) return { kind: 'game' };

  if (declaredType === 'game') return { kind: 'game', embedUrl: url };
  if (declaredType === 'iframe') return { kind: 'website', embedUrl: url };

  return { kind: 'website' };
}

/** Aplica la preferencia explícita `display` del dato del proyecto, si existe. */
export function applyDisplayOverride(resolved: ResolvedEmbed, display?: 'embed' | 'link'): ResolvedEmbed {
  if (display === 'link') return { kind: resolved.kind, embedUrl: undefined };
  if (display === 'embed' && !resolved.embedUrl) {
    // Solo tiene sentido forzar iframe en recursos que normalmente lo permiten.
    if (resolved.kind === 'website' || resolved.kind === 'pdf' || resolved.kind === 'figma') {
      return resolved; // sin URL conocida de embed segura, se deja como está
    }
  }
  return resolved;
}
