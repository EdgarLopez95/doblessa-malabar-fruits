# Doblessa — Malabar Fruits

Mockup estático del rediseño de Malabar Fruits. La investigación y recursos aprobados están en `../Recursos/` dentro de la carpeta madre.

## Desarrollo

```bash
npm install
npm run dev
npm run build
```

Cada push a `main` publica el sitio automáticamente.

- Repositorio: `https://github.com/EdgarLopez95/doblessa-malabar-fruits`
- Presentación: `https://edgarlopez95.github.io/doblessa-malabar-fruits/`

## Estructura

- `src/pages/`: una página por ruta, más `sitemap.xml.ts` y `robots.txt.ts`.
- `src/layouts/`: `BaseLayout` (SEO y estructura) y `LegalLayout`.
- `src/components/`: cabecera, pie, formularios, imagen responsiva y piezas de marca.
- `src/data/`: textos SEO, navegación y gama de fruta.
- `src/lib/paths.ts`: helpers `url()` y `asset()` que aplican el `base` de GitHub Pages. Úsalos siempre en enlaces e imágenes.

## Imágenes

Las imágenes de `public/images/` se generan desde `../Recursos/recursos-web/imagenes` con:

```bash
node scripts/prepare-images.mjs
```

El script copia los originales usados y crea variantes `.webp` sin modificar `../Recursos/`.

Antes de trabajar, leer `AGENTS.md` y `ESTADO.md`. Para entregar: `git status`, `git add <archivos>`, `git commit -m "feat: descripcion breve"` y `git push origin main`. No usar `git push --force` ni modificar `../Recursos/`.
