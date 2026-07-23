// src/utils/url.ts
export type Language = 'es' | 'en';

export function getLanguageFromPath(path: string): Language {
  if (path.startsWith('/en/')) return 'en';
  return 'es';
}

export function getLocalizedPath(path: string, lang: Language): string {
  if (lang === 'es') {
    return path.replace(/^\/en/, '') || '/';
  }
  return `/en${path}`;
}