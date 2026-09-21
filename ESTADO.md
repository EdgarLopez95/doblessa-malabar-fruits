# Estado técnico — Malabar Fruits

## Estado actual

Mockup estático alineado con la evidencia de marca. El 21 de septiembre de 2026 se
aplicó una **corrección de fidelidad** siguiendo
`../Recursos/auditoria-fidelidad-propuesta-vs-sitio-original.md`: se retiró toda la
oferta comercial que la propuesta había inventado y que no aparece en la web
original de Malabar Fruits.

### Qué se retiró y por qué

| Contenido retirado | Motivo |
| --- | --- |
| Sección y ruta "Para profesionales", botón "Soy profesional" | La marca no declara públicos profesionales ni oferta B2B |
| Retail, restauración, distribución, colaboraciones, equipo comercial | Servicios y audiencias no documentados |
| "Qué pasa después", "te respondemos", "el equipo revisa" | No hay evidencia de un canal de atención propio |
| Bloque "Esta web no es una tienda" y "Dónde encontrar Malabar" | Afirmaba una ausencia de venta y un localizador no demostrados |
| Trazabilidad, origen, partidas, homologaciones, requisitos técnicos | Procesos internos no documentados |
| Temporada: página, rueda y calendario | La estacionalidad de la gama Malabar no está comunicada |
| "La huerta por colores" e ideas de cocina en verduras | Taxonomía y contenido culinario inventados |
| Segmentación del formulario (profesional/consumidor/prensa) | Categorías sin respaldo |
| Página corporativa de Limosin Fruits | Interpretaba estructura societaria; queda como mención breve |

## Base técnica

- Framework: Astro 7 + TypeScript + CSS nativo. Sin dependencias añadidas.
- `base`: `/doblessa-malabar-fruits` (todas las rutas pasan por `src/lib/paths.ts`).
- Fuentes autoalojadas (DM Serif Display y Manrope, woff2) en `public/fonts`.
- Rama de publicación: `main` (workflow `.github/workflows/deploy.yml`).
- GitHub Pages: `https://edgarlopez95.github.io/doblessa-malabar-fruits/`.
- Validación: `npm run build` + `node scripts/verify-build.mjs`.

## Rutas vigentes

| Ruta | Contenido |
| --- | --- |
| `/` | Hero, concepto de marca, acceso a la gama, el juego de lo fresco, valores de calidad, mención de Limosin y contacto |
| `/fruta-fresca/` | Las 13 frutas nombradas por la marca, con filtro editorial por tipo |
| `/verduras-frescas/` | Presencia de la verdura, color como recurso gráfico y aviso de selección pendiente |
| `/calidad/` | Los seis valores declarados: selección, sabor, aspecto, frescura, higiene y controles |
| `/contacto/` | Bloque único y neutro con formulario marcado como propuesta pendiente de activación |
| `/aviso-legal/`, `/politica-de-privacidad/` | Estructura legal con marcadores pendientes; fuera del sitemap |
| `/404` | Página de error de marca |

Navegación pública: **Inicio · Gama (Fruta fresca, Verduras frescas) · Calidad · Contacto**.

## Rutas retiradas

`/para-profesionales/`, `/limosin-fruits/` y `/calidad-y-trazabilidad/` ya no forman
parte del sitio. Como estuvieron publicadas, se conservan como páginas de aviso
("Página retirada") que dirigen a una ruta vigente: son `noindex` y están fuera del
sitemap. Pueden borrarse cuando el cliente lo indique.

## Componentes

- `layouts/BaseLayout.astro`: SEO (title, description, canonical, Open Graph, JSON-LD opcional), `noindex` global de mockup, fuentes y skip link.
- `layouts/LegalLayout.astro` y `layouts/RetiredPage.astro`.
- `components/SiteHeader.astro`: navegación sticky, desplegable "Gama" y menú móvil accesible (Escape, `inert`, foco).
- `components/SiteFooter.astro`, `PageIntro.astro`, `JuggleBalls.astro`, `Picture.astro`.
- `components/ContactForm.astro`: formulario único, validación en cliente y respuesta local de demostración.
- Datos: `src/data/site.ts` (SEO, navegación y nota de Limosin) y `src/data/fruits.ts`.

## SEO

- Un H1 por página; títulos y metadescripciones sin temporada, profesionales ni trazabilidad.
- Canonical absoluto; Open Graph e imagen `images/og/malabar-fruits-og.jpg`.
- JSON-LD en inicio: `WebSite` y `Brand` con nombre, URL y logotipo. Sin `Organization` de Limosin, `Product`, `LocalBusiness`, `Offer`, reseñas, teléfonos ni direcciones.
- `sitemap.xml` con las cinco rutas públicas; `robots.txt` generado como endpoint.
- Todo el sitio va con `noindex, follow` por ser una propuesta en revisión.

## Recursos de imagen en `public/images`

Generados con `node scripts/prepare-images.mjs` (copia el original y crea `.webp`; no
modifica `../Recursos`): `marca/`, `inicio/`, `calidad/compromiso-calidad-malabar`,
`contacto/ilustracion-contacto-malabar`, `gama/` y `og/`.

No se usan: certificaciones y logotipos de certificaciones (sin validar),
`fruta-saludablemente-divertida` y `detalle-cta-contacto-malabar` (texto dentro de la
imagen) y `sello-malabar-fruits` (duplica el logotipo).

## Documentación complementaria

- `design/brief.md` y `design/direction.md`: brief y dirección visual de esta corrección.
- `GAPS.md` y `BUGS.md`: entregables pendientes del cliente e incidencias.

## Verificación realizada

- `npm run build`: correcto, 11 páginas + `sitemap.xml` + `robots.txt`.
- `node scripts/verify-build.mjs`: todas las comprobaciones en verde.
- 160 enlaces internos comprobados en `dist/`: ninguno roto.
- Búsqueda de términos prohibidos en `src/` y en el HTML generado: sin coincidencias.
- Chrome real a 375 px y 1280 px: un solo H1 por página y sin desplazamiento horizontal.
- Crítica de diseño independiente (ronda 1, 70/100). Correcciones aplicadas:
  - **Bloqueante:** los adornos de los paneles de gama solapaban el texto (kicker crema sobre orbe albaricoque, 2.08:1). Los paneles pasan a una rejilla de dos filas —adorno arriba, texto abajo— y el solape es imposible por construcción. Verificado a 360, 390, 768, 1024 y 1440 px.
  - **Fidelidad:** se retiró "Escríbenos y lo vemos" de fruta y verduras (era la promesa de revisión que bloquea la auditoría) y el sello circular "CALIDAD" con estrellas, que se leía como acreditación en la página que declara no publicar sellos.
  - **Oficio:** cierre de contacto sin columna vacía, aviso de canal pendiente en la home, composición de malabar en verduras, línea base y fila huérfana de la cuadrícula de fruta, áreas táctiles de 44 px y menú móvil con "Gama" ya desplegada.

## Pendientes reales de validación

- **Contacto:** el canal definitivo (correo, teléfono o formulario operativo). Hoy el formulario es una propuesta no conectada.
- **Certificados y origen:** vigencia y alcance antes de publicar cualquier sello.
- **Datos corporativos y legales:** razón social, CIF, domicilio y textos legales.
- **Limosin Fruits:** naturaleza exacta de la relación y disponibilidad del dominio. A 21 de septiembre de 2026 `limosinfruits.com` no resuelve por DNS, así que la mención va sin enlace.
- **Verduras:** selección concreta, si el cliente quiere publicarla.
- **Reintroducir contenido B2B** solo si el cliente confirma público, gama, cobertura y canal.

## Límites y bloqueos

- No hay bloqueos técnicos.
- Las decisiones de marca, alcance o contenido nuevo vuelven al orquestador.
