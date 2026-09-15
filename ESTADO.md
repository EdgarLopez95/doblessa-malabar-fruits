# Estado técnico — Malabar Fruits

## Estado actual

Rediseño estático completo implementado y publicado en GitHub Pages. Es un mockup: sin backend, e-commerce, precios, stock, login ni envío real de formularios.

## Base técnica

- Framework: Astro 7 + TypeScript + CSS nativo. Sin dependencias añadidas.
- `base`: `/doblessa-malabar-fruits` (todas las rutas pasan por `src/lib/paths.ts`).
- Rama de publicación: `main` (workflow `.github/workflows/deploy.yml`).
- GitHub Pages: `https://edgarlopez95.github.io/doblessa-malabar-fruits/`.
- Validación: `npm run build` → correcto, 10 páginas + `sitemap.xml` + `robots.txt`.

## Páginas implementadas

| Ruta | Contenido |
| --- | --- |
| `/` | Hero con campaña, marca, acceso a gama, “el juego de lo fresco”, calidad, profesionales y contacto |
| `/fruta-fresca/` | 13 frutas editoriales con filtro local por tipo y bloque `#temporada` (sin fechas) |
| `/verduras-frescas/` | Huerta por colores, ideas de uso y pregunta sobre la gama (sin variedades inventadas) |
| `/calidad-y-trazabilidad/` | Cuatro pilares y bloque de trazabilidad sin certificaciones ni cifras |
| `/para-profesionales/` | Sectores, expectativas, pasos y formulario profesional de demostración |
| `/limosin-fruits/` | Relación de marca prudente y aviso de datos corporativos pendientes |
| `/contacto/` | Selector general/profesional (`?tipo=profesional`) con formularios de demostración |
| `/aviso-legal/`, `/politica-de-privacidad/` | Estructura legal con marcadores pendientes; `noindex` y fuera del sitemap |
| `/404` | Página de error de marca |

## Componentes importantes

- `layouts/BaseLayout.astro`: SEO (title, description, canonical, Open Graph, JSON-LD opcional), fuentes y skip link.
- `layouts/LegalLayout.astro`: plantilla de páginas legales con índice.
- `components/SiteHeader.astro`: navegación sticky, desplegable “Gama”, menú móvil accesible (Escape, `inert`, foco) y marcado de sección visible (“Temporada” con `aria-current="location"`).
- Navegación local: chips de filtro en fruta, barra de secciones sticky en verduras (con sección visible marcada), índice en profesionales e índice de contenido en las legales.
- `components/SiteFooter.astro`, `PageIntro.astro` (con migas), `ProCta.astro`, `JuggleBalls.astro` (motivo gráfico SVG).
- `components/ContactForm.astro`: variantes general/profesional, validación en cliente y envío simulado.
- `components/Picture.astro`: `<picture>` con WebP + original, `width`/`height` y carga diferida.
- Datos: `src/data/site.ts` (SEO y navegación) y `src/data/fruits.ts`.

## SEO

- Un H1 por página, títulos y metadescripciones únicos.
- Canonical absoluto a GitHub Pages, Open Graph e imagen `images/og/malabar-fruits-og.jpg`.
- JSON-LD en inicio: `WebSite`, `Brand` (Malabar Fruits) y `Organization` (Limosin Fruits). Sin `Product`, reseñas ni precios.
- `sitemap.xml` y `robots.txt` generados como endpoints estáticos. Nota: en un sitio de proyecto de GitHub Pages los buscadores solo leen `robots.txt` en la raíz del dominio; aplicará al dominio definitivo.

## Recursos copiados a `public/images`

Generados con `node scripts/prepare-images.mjs` (copia el original y crea `.webp`; no modifica `../Recursos`):

- `marca/`: `logo-malabar-fruits`, `limosin-fruits`, `franja-estrellas-malabar`, `textura-pie-malabar`
- `inicio/`: `hero-campana-malabar`, `hero-campana-malabar-movil`, `hero-fruta-malabar`, `detalle-campana-malabar`
- `calidad/`: `compromiso-calidad-malabar`
- `contacto/`: `ilustracion-contacto-malabar`
- `gama/`: `fruta-divertida`, `fruta-energia-diaria`, `fruta-dieta-equilibrada`, `fruta-energia-natural`
- `og/`: `malabar-fruits-og.jpg` (recorte 1200×630 derivado de la campaña)

Las ilustraciones de `gama/` y `detalle-campana` se recortan por CSS para ocultar el texto incrustado con claims de salud; los mensajes se escriben en HTML.

No usados a propósito: `certificaciones-malabar`, `logotipos-certificaciones-malabar` (certificados sin validar), `fruta-saludablemente-divertida` (claim en imagen), `detalle-cta-contacto-malabar` (botón “clic aquí” en imagen) y `sello-malabar-fruits` (duplica el logotipo).

## Verificación realizada

- Build sin errores ni avisos.
- Sin rutas absolutas que ignoren el `base` en `dist/`.
- Revisión visual de todas las páginas a 1440 px; comprobación a 375 px sin desplazamiento horizontal.
- Pruebas de interacción: validación y envío simulado de formularios, selector de contacto por `?tipo=`, menú móvil y desplegable con teclado.
- Feedback de ubicación comprobado en Chrome real: “Temporada” se marca al entrar en la sección y se desmarca al salir; la barra de verduras sigue la sección visible.

## Último cambio

- Implementación: `1c5ff55` — `feat: implementa rediseño estático de malabar fruits`.
- Documentación: `docs: actualiza estado de implementación` (este archivo y README).

## Pendientes reales

- Validar con el cliente: datos corporativos y legales, canales de contacto, relación pública con Limosin Fruits y derechos de las fotografías.
- Certificaciones, origen, trazabilidad y calendario de temporada solo podrán publicarse con documentación aportada por el cliente.
- Las fotografías de producto por fruta y verdura no existen; las tarjetas usan composición gráfica hasta disponer de imágenes reales.
- Las tipografías se sirven desde Google Fonts; valorar alojarlas localmente en la versión final por privacidad.
- Conectar formularios a un servicio real cuando exista backend aprobado.

## Límites y bloqueos

- No hay bloqueos técnicos.
- Las decisiones de marca, alcance o contenido nuevo vuelven al orquestador.
