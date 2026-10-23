import type { APIRoute } from 'astro';
import { navigation } from '../data/navigation';
import { publicProjects } from '../data/projects';
import { collectionPaths } from '../data/collections';
import { withBasePath } from '../utils/paths';

export const GET: APIRoute = ({ site }) => {
  const paths = [
    ...navigation.map((item) => item.href),
    ...publicProjects.map((project) => `/proyectos/${project.slug}`),
    ...collectionPaths.map(({ collection, item }) => `/proyectos/${collection.projectSlug}/${item.slug}`),
  ];

  const urls = [...new Set(paths)]
    .map((path) => `  <url><loc>${new URL(withBasePath(path), site).href}</loc></url>`)
    .join('\n');

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
