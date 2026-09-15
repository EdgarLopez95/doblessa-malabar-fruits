import type { APIRoute } from 'astro';
import { PAGES, type PageMeta } from '../data/site';
import { absoluteUrl } from '../lib/paths';

export const GET: APIRoute = () => {
  const pages: PageMeta[] = Object.values(PAGES).filter((page: PageMeta) => !page.noindex);
  const urls = pages.map((page) => `  <url><loc>${absoluteUrl(page.path)}</loc></url>`).join('\n');

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
