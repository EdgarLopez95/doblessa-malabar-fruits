# Registro de Bugs y Mejoras Técnicas — Malabar Fruits (BUGS.md)

Este documento detalla los problemas identificados en la auditoría técnica del mockup, las soluciones implementadas y el método de verificación aplicado.

---

### Bug 1: CTA primario del Hero no dirigía a la ruta de producto
- **Ubicación**: `src/pages/index.astro`
- **Problema**: El botón primario del hero `"Descubre la gama"` tenía un ancla local `href="#gama"`, reteniendo al usuario en la página de inicio en lugar de construir la ruta de conversión directa hacia la gama de producto.
- **Solución**: Se actualizó el botón primario para dirigir a `url(PAGES.fruta.path)` con el texto visible `"Descubre la gama de fruta"`. Además, se añadió un enlace de texto secundario visible `"Ver también las verduras"` que enlaza a `url(PAGES.verduras.path)`. La sección `#gama` se mantiene en la home como avance visual de categorías.
- **Verificación**: Comprobado en el HTML generado de `dist/index.html` que los enlaces apuntan a `/doblessa-malabar-fruits/fruta-fresca/` y `/doblessa-malabar-fruits/verduras-frescas/`.

---

### Bug 2: Desalineación de H1s y titles con el plan SEO
- **Ubicación**: `src/data/site.ts`, `src/pages/fruta-fresca.astro`, `src/pages/calidad-y-trazabilidad.astro`
- **Problema**: 
  - `PAGES.fruta.title` usaba `"Fruta fresca | Malabar Fruits"`, perdiendo la palabra clave estratégica de temporada.
  - En `fruta-fresca.astro`, el título de cabecera era `"Fruta fresca"` en lugar de `"Fruta fresca de temporada"`.
  - En `calidad-y-trazabilidad.astro`, el título era `"Calidad y trazabilidad"` y el H2 de trazabilidad prometía datos que no existen (`"Datos antes que adjetivos"`).
- **Solución**:
  - `PAGES.fruta.title` actualizado a `"Fruta fresca de temporada | Malabar Fruits"`.
  - PageIntro de fruta actualizado a `"Fruta fresca de temporada"`.
  - H1 de calidad actualizado a `"Selección y calidad de principio a fin"`, con title `"Calidad y selección de fruta fresca | Malabar Fruits"`.
  - H2 de trazabilidad fijado exactamente a: `"Cuando el equipo aporte origen y controles, irán aquí"`, con cuerpo honesto explicando la ausencia temporal de certificados y auditorías no validadas.
- **Verificación**: Verificado mediante el script automatizado `node scripts/verify-build.mjs` que cada página contiene exactamente 1 H1 y los textos requeridos.

---

### Bug 3: Intención de compra online no resuelta y ausencia de bloque «Dónde encontrar»
- **Ubicación**: `src/pages/index.astro`, `src/pages/contacto.astro`, `src/pages/fruta-fresca.astro`
- **Problema**: Un usuario que accede a la web buscando comprar online o recibir a domicilio no encontraba un aviso explícito, generando frustración ante la ausencia de carrito o tienda. Tampoco se explicaba dónde encontrar la fruta físicamente.
- **Solución**: Se insertó en la zona de cierre de la portada (`#donde-encontrar`), en el panel lateral de contacto y mediante enlace sutil en el pie de la gama de fruta fresca el bloque informativo con el texto exacto:
  - **H2**: `«Esta web no es una tienda»`
  - **Texto**: `«Malabar Fruits es una marca de fruta y verdura fresca. Desde aquí no se compra ni se envía a domicilio. Si quieres encontrar la marca o trabajar con ella, escríbenos.»`
  - **Bloque**: `«Dónde encontrar Malabar»`
  - **Texto**: `«Aún no publicamos un listado de fruterías ni un localizador. Cuando el equipo confirme puntos de venta, irán aquí. Esta web no es una tienda y no envía a domicilio.»`
  - **CTA**: Enlace a `/contacto/` con texto `«Escríbenos para hablar de la marca»`.
- **Verificación**: Inspección del HTML en `dist/index.html`, `dist/contacto/index.html` y `dist/fruta-fresca/index.html`.

---

### Bug 4: Tarjetas de las 13 frutas monótonas y con baja jerarquía tipográfica
- **Ubicación**: `src/pages/fruta-fresca.astro`
- **Problema**: Las 13 tarjetas de fruta presentaban un diseño plano donde el disco de color competía con el nombre de la fruta, asemejándose a un catálogo con fotos faltantes tipo plantilla.
- **Solución**:
  - Se elevó la jerarquía tipográfica del nombre (H3 dominante en tamaño display `clamp(2.25rem, 2.85rem)`).
  - Se reorganizó la cabecera de cada tarjeta con índice `01`–`13` y badge del grupo botánico (de hueso, de pepita, para descubrir).
  - Cada tarjeta incorpora un filete superior diferenciado según su color representativo (`var(--fruit)`).
  - El orbe de color es puramente decorativo con `aria-hidden="true"`.
  - Se añadió al pie de la parrilla un bloque de llamada: `"Hablar con el equipo sobre la gama"` apuntando a `/contacto/?tipo=profesional` y enlace a `#donde-encontrar`.
- **Verificación**: Comprobación en `dist/fruta-fresca/index.html` y pruebas de navegación responsive de 360px a 1440px.

---

### Bug 5: Animación de `JuggleBalls` activa con movimiento reducido
- **Ubicación**: `src/components/JuggleBalls.astro`
- **Problema**: El componente gráfico SVG de las bolas ejecutaba la animación `@keyframes ball-in` sin respetar la preferencia del usuario por movimiento reducido en el sistema.
- **Solución**: Se añadió la regla CSS explícita:
  ```css
  @media (prefers-reduced-motion: reduce) {
    .juggle__ball,
    .juggle__shine {
      animation: none !important;
      transform: none !important;
      opacity: 1 !important;
    }
  }
  ```
- **Verificación**: Verificación de estilos en las hojas generadas y comprobación estática.

---

### Bug 6: Dependencia de Google Fonts externa (privacidad y RGPD)
- **Ubicación**: `src/layouts/BaseLayout.astro`, `src/styles/global.css`
- **Problema**: Las fuentes *DM Serif Display* y *Manrope* se cargaban desde los servidores CDN de `fonts.googleapis.com` y `fonts.gstatic.com`, generando solicitudes a terceros que comprometen el rendimiento y la conformidad con RGPD en Europa.
- **Solución**:
  - Se descargaron los ficheros tipográficos binarios WOFF2 optimizados (latin y latin-ext, pesos 200..800) en `public/fonts/`.
  - Se definieron reglas `@font-face` locales en `src/styles/global.css`.
  - Se eliminaron las etiquetas `<link rel="preconnect">` y la hoja de estilo externa de `BaseLayout.astro`.
  - Se añadieron etiquetas `<link rel="preload" as="font" type="font/woff2">` locales para DM Serif Display y Manrope.
- **Verificación**: Script `node scripts/verify-build.mjs` valida 0 ocurrencias de `fonts.googleapis.com` y `fonts.gstatic.com` en los 10 ficheros HTML de `dist/`.

---

### Bug 7: Indexación involuntaria del mockup en GitHub Pages y propiedad noindex no coherente
- **Ubicación**: `src/layouts/BaseLayout.astro`, `src/data/site.ts`, `src/pages/sitemap.xml.ts`
- **Problema**: La emisión de `noindex` dependía de props individuales y la interfaz `PageMeta` utilizaba un campo `noindex` que solo servía para excluir páginas del sitemap, creando confusión.
- **Solución**:
  - `BaseLayout.astro` emite incondicionalmente `<meta name="robots" content="noindex, follow" />` en todas las páginas mientras resida en GitHub Pages.
  - Se refactorizó `PageMeta.noindex` a `PageMeta.excludeFromSitemap` para reflejar con precisión su propósito técnico.
- **Verificación**: Comprobación de etiqueta `noindex, follow` en los 10 HTMLs generados y filtrado correcto en `dist/sitemap.xml`.

---

### Bug 8: Diseño excesivamente informal en la página para profesionales
- **Ubicación**: `src/pages/para-profesionales.astro`
- **Problema**: La sección de sectores utilizaba una cuadrícula de 4 tarjetas idénticas y detalles gráficos informales en amarillo limón (`--lemon-300`).
- **Solución**:
  - Se sustituyó la cuadrícula de 4 tarjetas por un layout editorial a dos columnas: columna de propuesta a la izquierda y lista limpia de sectores a la derecha, con filetes delimitadores y numeración sobria.
  - Se trasladó la paleta hacia el verde hoja institucional (`--leaf-600`) y granate (`--malabar-700`), eliminando motivos informales y reforzando la seriedad comercial.
- **Verificación**: Compilación limpia y validación de marcado en `dist/para-profesionales/index.html`.

---

### Bug 9: Formulario de contacto con campos redundantes y falta de aviso de simulación
- **Ubicación**: `src/components/ContactForm.astro`, `src/pages/contacto.astro`
- **Problema**: El formulario requería campos como empresa, cargo, teléfono o motivo según pestaña, sin un aviso de demostración conciso.
- **Solución**:
  - Se unificó el formulario para solicitar exclusivamente: `Nombre`, `Correo electrónico`, `Tipo de consulta` (selector: *Profesional* / *Consumidor* / *Prensa* / *Otro*) y `Mensaje`.
  - Se incluyó bajo el botón de envío la línea exacta requerida: `«Formulario demostrativo para el mockup. No envía datos a ningún servidor.»`.
- **Verificación**: Pruebas de envío en navegador y comprobación de marcado en `dist/contacto/index.html`.

---

### Bug 10: Ausencia de declaración de estado del NAP comercial
- **Ubicación**: `src/components/SiteFooter.astro`, `src/pages/contacto.astro`
- **Problema**: La falta de teléfono, email o dirección física comercial podía confundirse con una omisión involuntaria.
- **Solución**: Se añadió en el pie de página general (`SiteFooter.astro`) y en el panel lateral de `/contacto/` la línea visible exacta:
  `«Teléfono, correo y domicilio comercial: pendientes de validación.»`
- **Verificación**: Inspección de presencia en `dist/` en todas las páginas.

---

### Resumen de Pruebas Automatizadas
Ejecución del script `node scripts/verify-build.mjs`:
- Total archivos HTML analizados: 10
- Verificación de 1 solo H1 por página: **10/10 Correcto**
- Ausencia total de enlaces vacíos `href="#"`: **10/10 Correcto**
- Presencia de `<meta name="robots" content="noindex, follow" />`: **10/10 Correcto**
- Ausencia total de enlaces a CDN externa de Google Fonts: **10/10 Correcto**
- Enlaces internos con ancla `#id` validados contra IDs existentes: **10/10 Correcto**
- Prefijo de ruta base `/doblessa-malabar-fruits/` en todos los enlaces y recursos: **10/10 Correcto**
