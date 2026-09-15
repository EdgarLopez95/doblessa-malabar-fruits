import { SITE } from '../data/site';

const BASE = import.meta.env.BASE_URL.replace(/\/+$/, '');
const EXTERNAL = /^(?:[a-z][a-z0-9+.-]*:|#)/i;

/** Ruta interna con el `base` de GitHub Pages aplicado. */
export function url(path = '/'): string {
  if (EXTERNAL.test(path)) return path;
  return `${BASE}${path.startsWith('/') ? path : `/${path}`}`;
}

/** Ruta pública de una imagen dentro de `public/images`. */
export function asset(file: string): string {
  return url(`/images/${file.replace(/^\/+/, '')}`);
}

/** URL absoluta para canonical, Open Graph, sitemap y datos estructurados. */
export function absoluteUrl(path = '/'): string {
  return new URL(url(path), SITE.origin).href;
}

const normalize = (path: string): string => (path.split(/[?#]/)[0] ?? '/').replace(/\/?$/, '/');

export function isCurrent(href: string, currentPath: string): boolean {
  if (href.includes('#')) return false;
  return normalize(url(href)) === normalize(currentPath);
}
