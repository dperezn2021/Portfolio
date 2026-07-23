export function withBasePath(path: string): string {
  if (!path) return path;

  // Preserve absolute and special URLs.
  if (/^(https?:)?\/\//i.test(path) || path.startsWith('data:') || path.startsWith('mailto:') || path.startsWith('tel:')) {
    return path;
  }

  const base = import.meta.env.BASE_URL || '/';
  const normalizedBase = base === '/' ? '' : base.replace(/\/$/, '');
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;

  return `${normalizedBase}${normalizedPath}`;
}
