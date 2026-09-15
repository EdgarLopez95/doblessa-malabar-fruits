# Registro de Bugs y Mejoras Técnicas — Malabar Fruits (BUGS.md)

Este documento detalla los problemas identificados en la auditoría técnica, las soluciones implementadas y el método de verificación aplicado.

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

### Bug 3: Intención de compra online no resuelta (ambigüedad de tienda)
- **Ubicación**: `src/pages/index.astro`, `src/pages/contacto.astro`
- **Problema**: Un usuario que accede a la web buscando comprar online o recibir a domicilio no encontraba un aviso explícito, generando posible frustración ante la ausencia de carrito o tienda.
- **Solución**: Se insertó en la zona de cierre de la home y en el panel lateral de contacto el bloque informativo con el texto exacto requerido:
  > **Esta web no es una tienda**  
  > Malabar Fruits es una marca de fruta y verdura fresca. Desde aquí no se compra ni se envía a domicilio. Si quieres encontrar la marca o trabajar con ella, escríbenos.
- **Verificación**: Inspección del HTML en `dist/index.html` y `dist/contacto/index.html`.

---

### Bug 4: Tarjetas de las 13 frutas monótonas y con baja jerarquía tipográfica
- **Ubicación**: `src/pages/fruta-fresca.astro`
- **Problema**: Las 13 tarjetas de fruta presentaban un diseño plano donde el disco de color competía con el nombre de la fruta, asemejándose a un catálogo con fotos faltantes tipo plantilla.
- **Solución**:
  - Se elevó la jerarquía tipográfica del nombre (H3 dominante en tamaño display `clamp(2.25rem, 2.85rem)`).
  - Se reorganizó la cabecera de cada tarjeta con índice `01`–`13` y badge del grupo botánico (de hueso, de pepita, para descubrir).
  - Cada tarjeta incorpora un filete superior diferenciado según su color representativo (`var(--fruit)`).
  - El orbe de color es puramente decorativo con `aria-hidden="true"`.
  - Se añadió al pie de la parrilla un bloque de llamada: `"Hablar con el equipo sobre la gama"` apuntando a `/contacto/?tipo=profesional`.
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

### Bug 6: Indexación involuntaria del mockup en GitHub Pages
- **Ubicación**: `src/layouts/BaseLayout.astro`
- **Problema**: El meta robots `noindex, follow` estaba condicionado a la prop `noindex`, por lo que las páginas principales carecían de él, arriesgando indexación en Google bajo el subdominio de GitHub Pages.
- **Solución**: Se hizo incondicional la emisión de `<meta name="robots" content="noindex, follow" />` en `BaseLayout.astro` para todas las páginas mientras el mockup resida en GitHub Pages.
- **Verificación**: Script `verify-build.mjs` comprobó que los 10 archivos HTML generados contienen la etiqueta.

---

### Bug 7: Diseño excesivamente informal en la página para profesionales
- **Ubicación**: `src/pages/para-profesionales.astro`
- **Problema**: La sección de sectores utilizaba una cuadrícula de 4 tarjetas idénticas y detalles gráficos informales en amarillo limón (`--lemon-300`).
- **Solución**:
  - Se sustituyó la cuadrícula de 4 tarjetas por un layout editorial a dos columnas: columna de propuesta a la izquierda y lista limpia de sectores a la derecha, con filetes delimitadores y numeración sobria.
  - Se trasladó la paleta hacia el verde hoja institucional (`--leaf-600`) y granate (`--malabar-700`), eliminando motivos informales y reforzando la seriedad comercial.
  - El formulario profesional y su validación inline se mantienen intactos.
- **Verificación**: Compilación limpia y validación de marcado en `dist/para-profesionales/index.html`.

---

### Resumen de Pruebas Automatizadas
Ejecución del script `node scripts/verify-build.mjs`:
- Total archivos HTML analizados: 10
- Verificación de 1 solo H1 por página: **10/10 Correcto**
- Ausencia total de enlaces vacíos `href="#"`: **10/10 Correcto**
- Presencia de `<meta name="robots" content="noindex, follow" />`: **10/10 Correcto**
- Enlaces internos con ancla `#id` validados contra IDs existentes: **10/10 Correcto**
- Prefijo de ruta base `/doblessa-malabar-fruits/` en todos los enlaces y recursos: **10/10 Correcto**
