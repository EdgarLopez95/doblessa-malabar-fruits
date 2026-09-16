# Estado técnico — Malabar Fruits

## Estado actual

Mockup estático cerrado al 100 % en todos sus huecos técnicamente subsanables y preparado para presentación y entrega a cliente. Cuenta con dos rutas claras (marca familiar vs. profesional), producto reconocible sin invención de fotos ni sellos de calidad, copy rigurosamente honesto sobre temporada, compras y puntos de venta pendientes, fuentes autoalojadas localmente sin peticiones a terceros, formularios unificados con aviso demostrativo, y brechas documentadas en `GAPS.md` y `BUGS.md`.

## Base técnica

- **Framework**: Astro 7 + TypeScript + CSS nativo. Cero dependencias externas añadidas.
- **Tipografías**: Autoalojadas localmente en `public/fonts/` (*DM Serif Display* y *Manrope* en WOFF2 variable, latin y latin-ext). Cero peticiones externas a `fonts.googleapis.com` o `fonts.gstatic.com`. Preload configurado en `BaseLayout.astro`.
- **Ruta base**: `/doblessa-malabar-fruits` (rutas y recursos gestionados con `src/lib/paths.ts`).
- **Control de indexación**: `<meta name="robots" content="noindex, follow" />` global e incondicional en los 10 archivos HTML de `dist/` para proteger el dominio definitivo de indexación anticipada.
- **Rama de publicación**: `main` (workflow `.github/workflows/deploy.yml` a GitHub Pages).
- **URL pública**: `https://edgarlopez95.github.io/doblessa-malabar-fruits/`.
- **Validación automatizada**: `npm run build` limpio y `node scripts/verify-build.mjs` (todas las comprobaciones superadas: 1 H1 por página, 0 href="#", 0 fugas de fuentes externas, 0 rutas sin base).

## Páginas implementadas

| Ruta | Contenido |
| --- | --- |
| `/` | Hero con CTA directo a `/fruta-fresca/` ("Descubre la gama de fruta") y subenlace a verduras; avance de categorías; "el juego de lo fresco"; pilares de calidad; propuesta para profesionales; bloque honesto con H2 «Esta web no es una tienda» y «Dónde encontrar Malabar» (`#donde-encontrar`) con CTA «Escríbenos para hablar de la marca» y contacto. |
| `/fruta-fresca/` | H1 "Fruta fresca de temporada"; 13 frutas con jerarquía tipográfica dominante, acento de color propio (`var(--fruit)`) e índice 01–13; enlace de fin de parrilla al equipo comercial y enlace sutil a «Dónde encontrar Malabar»; sección `#temporada` con aviso honesto sin fechas ficticias. |
| `/verduras-frescas/` | Huerta por colores, ideas de uso y consulta comercial de gama (sin variedades inventadas). |
| `/calidad-y-trazabilidad/` | H1 "Selección y calidad de principio a fin"; 4 pilares en recorrido editorial secuencial; H2 de trazabilidad honesto ("Cuando el equipo aporte origen y controles, irán aquí") sin sellos ni certificados ficticios. |
| `/para-profesionales/` | Propuesta B2B sobria en 2 columnas (propuesta editorial + sectores con filetes divisores); paleta leaf/malabar; sin promesas de MOQ/catálogo cerrado; formulario profesional demostrativo con preselección. |
| `/limosin-fruits/` | Relación de marca prudente; aviso de datos societarios y NAP pendientes; enlace seguro HTTPS a `limosinfruits.com` marcado como dominio distinto; contacto propio en Malabar. |
| `/contacto/` | Formulario unificado con campos: *Nombre*, *Correo electrónico*, *Tipo de consulta* (selector: *Profesional* / *Consumidor* / *Prensa* / *Otro*) y *Mensaje*; nota «Formulario demostrativo para el mockup. No envía datos a ningún servidor.»; bloques en lateral: «Esta web no es una tienda», «Dónde encontrar Malabar» y línea visible de estado del NAP comercial. |
| `/aviso-legal/`, `/politica-de-privacidad/` | Estructura legal propuesta con marcadores pendientes de revisión jurídica; excluidas del sitemap (`excludeFromSitemap: true`). |
| `/404` | Página de error 404 personalizada con ilustración de marca. |

## Componentes y Arquitectura

- `layouts/BaseLayout.astro`: `<meta name="robots" content="noindex, follow" />` global; preloads locales de fuentes WOFF2; Open Graph; JSON-LD (`WebSite`, `Brand` y `Organization` Limosin sin dirección inventada).
- `layouts/LegalLayout.astro`: plantilla para documentos legales con índice lateral.
- `components/SiteHeader.astro`: cabecera sticky, menú móvil accesible (Escape, `inert`, foco) y marcado activo de sección por visibilidad.
- `components/SiteFooter.astro`: pie institucional con navegación completa, mención de relación societaria y línea visible: `«Teléfono, correo y domicilio comercial: pendientes de validación.»`.
- `components/JuggleBalls.astro`: motivo gráfico SVG con soporte explícito de `@media (prefers-reduced-motion: reduce)` para anular movimiento.
- `components/ContactForm.astro`: formulario demostrativo unificado (Nombre, Correo, Tipo de consulta [Profesional / Consumidor / Prensa / Otro], Mensaje, Consentimiento) con validación nativa en cliente, feedback accesible, `preventDefault` y nota bajo botón.
- `components/Picture.astro`: elemento `<picture>` optimizado con WebP, dimensiones explícitas y carga diferida.
- `components/PageIntro.astro` y `components/ProCta.astro`.

## SEO y Auditoría

- Exactamente un H1 por página, títulos únicos alineados con el plan SEO.
- `<meta name="robots" content="noindex, follow" />` presente en los 10 archivos HTML de `dist/`.
- Cero peticiones a CDN externas de Google Fonts (`fonts.googleapis.com` / `fonts.gstatic.com`).
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

- `GAPS.md`: Tabla de 16 entregables del cliente clasificados por estado y cerrabilidad en mockup, complementada con el cuestionario de 5 preguntas estratégicas para la reunión con Limosin Fruits / Malabar Fruits.
- `BUGS.md`: Registro exhaustivo de 10 incidencias técnicas y editoriales resueltas con detalle de ubicación, causa, solución y método de verificación.

## Verificación realizada

- Compilación limpia con `npm run build` en Astro 7 (10 páginas + sitemap + robots generados sin advertencias).
- Ejecución satisfactoria de `node scripts/verify-build.mjs` con verificación de fuentes locales.
- Comprobación de contrastes de color según WCAG 2.2 AA / AAA.
- Navegación responsive libre de overflow horizontal entre 360 px y 1440 px.
