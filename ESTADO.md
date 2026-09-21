# Estado técnico — Malabar Fruits

## Estado actual

Mockup estático alineado con la web original de la marca. El 21 de septiembre de 2026
se aplicaron dos correcciones sucesivas:

1. **Corrección de fidelidad:** se retiró la oferta comercial que la propuesta había
   inventado (profesionales, retail, restauración, distribución, colaboraciones,
   equipo comercial, trazabilidad como proceso, temporada, puntos de venta y promesas
   de respuesta). Nada de eso aparece en la web original.
2. **Corrección del criterio de herencia:** la web original pasa a ser la **fuente
   principal**. Lo que aparece en ella o en sus recursos se hereda y se rediseña
   aunque no exista confirmación actual del cliente. La falta de confirmación solo
   impide **inventar** datos nuevos, vigencias, capacidades operativas, procesos
   internos o servicios que nunca estuvieron.

### Clasificación vigente

| Tipo | Regla |
| --- | --- |
| Elemento visible en la web original | Válido: se rediseña y se muestra. Se registra como heredado. |
| Decisión editorial o de UX | Válida si organiza o mejora lo existente, sin crear capacidades. |
| Hipótesis de negocio | Fuera hasta que el cliente la confirme. |

El detalle pieza por pieza está en `design/inventario-herencia-sitio-original.md`.

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
| `/` | Hero de campaña, concepto de marca con el rótulo heredado, gama, **los carteles originales** (Energía natural, Dieta equilibrada, Vitaminas sin parar), valores de calidad, mención de Limosin y contacto |
| `/fruta-fresca/` | Las 13 frutas nombradas por la marca: nombre y agrupación, con filtro editorial |
| `/verduras-frescas/` | Presencia de la verdura, color como recurso gráfico y selección pendiente de confirmar |
| `/calidad/` | Rótulo heredado, los seis valores declarados y la sección **Certificaciones** |
| `/contacto/` | Bloque único y neutro, formulario marcado como propuesta pendiente de activación |
| `/aviso-legal/`, `/politica-de-privacidad/` | Estructura legal con marcadores pendientes; fuera del sitemap |
| `/404` | Página de error de marca |

Navegación pública: **Inicio · Gama (Fruta fresca, Verduras frescas) · Calidad · Contacto**.

## Rutas retiradas

`/para-profesionales/`, `/limosin-fruits/` y `/calidad-y-trazabilidad/` se conservan
como páginas de aviso ("Esta dirección no está disponible") que dirigen a una ruta
vigente: son `noindex` y están fuera del sitemap.

## Certificaciones

`/calidad/` muestra GLOBALG.A.P., IFS Food y QS en una sección propia, con el recurso
`logotipos-certificaciones-malabar.png` heredado de la web original. Sin fechas,
números de certificado, alcance, países ni procesos añadidos.

**Registro interno:** la vigencia, el alcance y la titularidad actuales **no están
verificados**. Deberán confirmarse antes de una publicación corporativa definitiva.
Son comprobables en los registros públicos de cada esquema con el número GGN, el COID
o número de certificado IFS y el ID de QS.

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
- JSON-LD en inicio: `WebSite` y `Brand` con nombre, URL y logotipo. Sin `Product`, `LocalBusiness`, `Offer`, reseñas, teléfonos ni direcciones.
- `sitemap.xml` con las cinco rutas públicas; `robots.txt` generado como endpoint.
- Todo el sitio va con `noindex, follow` por ser una propuesta en revisión.

## Recursos heredados

Generados con `node scripts/prepare-images.mjs` (copia el original y crea `.webp`; no
modifica `../Recursos`). Se usan los rótulos y carteles originales, los heros de
campaña, la franja de estrellas, la textura del pie, las ilustraciones de gama, el
logotipo de Limosin y los logos de certificaciones.

No se usan tres recursos, por motivo visual y no por falta de validación:
`certificaciones-malabar.png` (el rótulo duplica el H2 "Certificaciones"),
`sello-malabar-fruits.png` (duplica el logotipo en pantalla) y
`detalle-cta-contacto-malabar.png` (llamada a la acción incrustada en imagen).

## Verificación realizada

- `npm run build`: correcto, 11 páginas + `sitemap.xml` + `robots.txt`.
- `node scripts/verify-build.mjs`: todas las comprobaciones en verde.
- Enlaces internos de `dist/`: ninguno roto.
- Términos de negocio no documentados: sin coincidencias en `src/` ni en el HTML.
- Chrome real a 375 px y 1280 px: un solo H1 por página y sin desplazamiento horizontal.
- Dos rondas de crítica de diseño independiente (70/100 y 71/100). Correcciones aplicadas:
  - **Bloqueante 1:** los adornos de los paneles de gama solapaban el texto (2.08:1). Los paneles pasan a una rejilla de dos filas y el solape es imposible por construcción. Verificado a 360, 390, 768, 1024 y 1440 px.
  - **Bloqueante 2:** los ordinales de Calidad en la home iban en albaricoque sobre crema (2.08:1); ahora en granate (9.44:1).
  - **Oficio:** cierre de contacto sin columna vacía, composición de malabar en verduras, fila huérfana de la cuadrícula de fruta, áreas táctiles de 44 px y menú móvil con "Gama" ya desplegada.

## Pendientes reales de validación

- **Certificaciones:** vigencia, alcance y titularidad actuales de GLOBALG.A.P., IFS Food y QS.
- **Contacto:** el canal definitivo. Hoy el formulario es una propuesta no conectada.
- **Datos corporativos y legales:** razón social, CIF, domicilio y textos legales.
- **Limosin Fruits:** naturaleza exacta de la relación. A 21 de septiembre de 2026 `limosinfruits.com` no resuelve por DNS, así que la mención va sin enlace.
- **Verduras:** selección concreta, si el cliente quiere publicarla.
- **Contenido B2B:** solo si el cliente confirma público, gama, cobertura y canal.

## Límites y bloqueos

- No hay bloqueos técnicos.
- Las decisiones de marca, alcance o contenido nuevo vuelven al orquestador.
