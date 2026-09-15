# Estado técnico — Malabar Fruits

## Estado actual

Mockup estático finalizado y listo para presentar. Dos rutas claras (marca familiar vs. profesional), producto reconocible sin fotos ni certificados inventados, copy honesto sobre temporada y no-tienda, caza de bugs realizada y brechas documentadas en `GAPS.md` y `BUGS.md`.

## Base técnica

- Framework: Astro 7 + TypeScript + CSS nativo. Sin dependencias externas añadidas.
- `base`: `/doblessa-malabar-fruits` (todas las rutas y recursos gestionados con `src/lib/paths.ts`).
- Rama de publicación: `main` (workflow `.github/workflows/deploy.yml`).
- GitHub Pages: `https://edgarlopez95.github.io/doblessa-malabar-fruits/`.
- Validación automatizada: `npm run build` limpio (10 páginas + `sitemap.xml` + `robots.txt`) y `node scripts/verify-build.mjs` (10/10 comprobaciones superadas).

## Páginas implementadas

| Ruta | Contenido |
| --- | --- |
| `/` | Hero con CTA directo a `/fruta-fresca/` ("Descubre la gama de fruta") y subenlace a verduras; avance de gama; "el juego de lo fresco"; calidad; profesionales; bloque "Esta web no es una tienda" y contacto |
| `/fruta-fresca/` | H1 "Fruta fresca de temporada"; 13 frutas con jerarquía tipográfica dominante, acento de color propio e índice 01–13; enlace de fin de parrilla al equipo comercial; sección `#temporada` con aviso honesto sin fechas ficticias |
| `/verduras-frescas/` | Huerta por colores, ideas de uso y consulta comercial de gama (sin variedades inventadas) |
| `/calidad-y-trazabilidad/` | H1 "Selección y calidad de principio a fin"; 4 pilares en recorrido editorial secuencial; H2 de trazabilidad honesto ("Cuando el equipo aporte origen y controles, irán aquí") sin sellos ni certificados ficticios |
| `/para-profesionales/` | Propuesta B2B sobria en 2 columnas (propuesta editorial + sectores con filetes divisores); paleta leaf/malabar; sin promesas de MOQ/catálogo cerrado; formulario profesional demostrativo |
| `/limosin-fruits/` | Relación de marca prudente; aviso de datos societarios y NAP pendientes; enlace seguro HTTPS a `limosinfruits.com` marcado como dominio distinto; contacto propio en Malabar |
| `/contacto/` | Selector general/profesional (`?tipo=profesional`); aviso lateral "Esta web no es una tienda"; formularios de demostración con validación inline |
| `/aviso-legal/`, `/politica-de-privacidad/` | Estructura legal con marcadores pendientes de revisión jurídica; `noindex` |
| `/404` | Página de error 404 de marca |

## Componentes principales

- `layouts/BaseLayout.astro`: `<meta name="robots" content="noindex, follow" />` global para proteger el dominio canónico durante el alojamiento en GitHub Pages; Open Graph; JSON-LD (`WebSite`, `Brand` y `Organization` Limosin sin dirección inventada).
- `layouts/LegalLayout.astro`: plantilla para documentos legales con índice lateral.
- `components/SiteHeader.astro`: cabecera sticky, menú móvil accesible (Escape, `inert`, foco) y marcado activo de sección por visibilidad.
- `components/SiteFooter.astro`: pie institucional con mención de relación societaria pendiente y navegación completa.
- `components/JuggleBalls.astro`: motivo gráfico SVG con soporte explícito de `@media (prefers-reduced-motion: reduce)` para anular movimiento.
- `components/ContactForm.astro`: formularios demostrativos (general y profesional) con validación nativa en cliente, feedback accesible y `preventDefault`.
- `components/Picture.astro`: elemento `<picture>` optimizado con WebP, dimensiones explícitas y carga diferida.
- `components/PageIntro.astro` y `components/ProCta.astro`.

## SEO y Auditoría

- Exactamente un H1 por página, títulos únicos alineados con el plan SEO.
- `<meta name="robots" content="noindex, follow" />` presente en los 10 archivos HTML de `dist/`.
- Sin enlaces vacíos `href="#"`; todas las anclas internas corresponden a IDs reales.
- Todos los enlaces y recursos estáticos usan el prefijo `/doblessa-malabar-fruits/`.
- Sin schema `Product`, precios, ofertas ni claims nutricionales no contrastados.

## Recursos de imagen en `public/images`

- `marca/`: `logo-malabar-fruits`, `limosin-fruits`, `franja-estrellas-malabar`, `textura-pie-malabar`
- `inicio/`: `hero-campana-malabar`, `hero-campana-malabar-movil`, `hero-fruta-malabar`, `detalle-campana-malabar` (recorte CSS del grabado para no mostrar claims incrustados)
- `calidad/`: `compromiso-calidad-malabar` (rotulado "CALIDAD ★★★★★" decorativo sin claims de salud)
- `contacto/`: `ilustracion-contacto-malabar`
- `gama/`: `fruta-divertida`, `fruta-energia-diaria`, `fruta-dieta-equilibrada`, `fruta-energia-natural` (recortadas por CSS para ocultar texto incrustado)
- `og/`: `malabar-fruits-og.jpg`
- No utilizados: `certificaciones-malabar`, `logotipos-certificaciones-malabar`, `fruta-saludablemente-divertida`, `detalle-cta-contacto-malabar`.

## Documentación complementaria

- `GAPS.md`: Brechas y requisitos indispensables antes del paso a producción oficial (certificado TLS, puntos de venta, calendario agronómico real, certificados oficiales, fotos de producto reales, NAP comercial, derechos de imagen, relación societaria y validación legal).
- `BUGS.md`: Registro de incidencias resueltas (CTA de hero, alineación de H1s, bloque no-tienda, parrilla editorial de frutas, reduced motion en JuggleBalls, etc.) y métodos de verificación.

## Verificación realizada

- Compilación limpia con `npm run build` en Astro 7.
- Ejecución satisfactoria de `node scripts/verify-build.mjs`.
- Comprobación de contrastes de color según WCAG 2.2 AA / AAA.
- Navegación responsive libre de overflow horizontal entre 360 px y 1440 px.
