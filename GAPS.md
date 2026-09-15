# Brechas y Pendientes Reales — Malabar Fruits (GAPS.md)

Este documento registra los elementos ausentes, pendientes de validación o no disponibles en la fase de mockup estático, indispensables antes de una publicación definitiva en producción bajo el dominio oficial `malabarfruits.com`.

---

## 1. Infraestructura y Dominio
- **Certificado TLS / HTTPS para `malabarfruits.com`**: La versión actual se aloja en GitHub Pages bajo `https://edgarlopez95.github.io/doblessa-malabar-fruits/`. Se requiere aprovisionar el certificado SSL/TLS y configurar los registros DNS (A, AAAA, CNAME) cuando el dominio esté listo.
- **Canónico y Robots definitivos**: Mientras el sitio resida en GitHub Pages, todas las páginas incluyen `<meta name="robots" content="noindex, follow" />` para evitar indexación parasitaria o canibalización con el futuro dominio. En producción definitiva, se retirará el `noindex` y el canonical apuntará a `https://malabarfruits.com`.
- **Servidor de Fuentes Web (Self-hosting WOFF2)**: En este mockup se cargan las fuentes *DM Serif Display* y *Manrope* desde Google Fonts vía CDN. Para producción final y cumplimiento riguroso de RGPD (evitando transferencia de IPs de usuarios a servidores de terceros sin consentimiento), se recomienda alojar localmente los ficheros `.woff2` en `public/fonts/`.

---

## 2. Comercial y Canales de Venta
- **Puntos de venta físicos / Dónde encontrar la marca**: No se dispone de un listado validado de fruterías, cadenas de retail o distribuidores autorizados. Por honestidad editorial, no se ha inventado un mapa ni un localizador de tiendas.
- **Datos de contacto comercial (NAP)**: El nombre, dirección física, teléfono y correo electrónico comercial real no están facilitados ni verificados. Por ello, los formularios son demostrativos y no transmiten datos.
- **Condiciones y política B2B**: No existen datos confirmados sobre pedido mínimo (MOQ), tiempos de entrega, tarifas ni catálogo mayorista cerrado; el copy enfatiza la conversación directa y personalizada.

---

## 3. Producto y Calendario Agronómico
- **Fotografía de producto individual**: No existen fotografías reales de las 13 frutas ni del surtido de verduras. Está estrictamente prohibido inventar fotos o generarlas mediante inteligencia artificial. Las tarjetas emplean una composición gráfica editorial diferenciada con jerarquía tipográfica, colores y discos decorativos.
- **Calendario real de temporada**: No se dispone de un calendario agronómico validado mes a mes por especie y variedad. Por ello, la web declara explícitamente que no publica fechas estimadas hasta contar con confirmación de Limosin Fruits / Malabar Fruits.
- **Fichas técnicas y variedades**: Las variedades botánicas concretas y calibres no se detallan en el catálogo abierto.

---

## 4. Certificaciones y Trazabilidad
- **Certificaciones de calidad oficiales**: No se cuenta con documentación ni auditorías verificadas de sellos como GlobalG.A.P., IFS, BRC, Producción Integrada o Agricultura Ecológica. Se ha descartado deliberadamente el uso de sellos e imágenes no acreditadas (`certificaciones-malabar.png`, etc.).
- **Trazabilidad de fincas y origen**: El bloque de trazabilidad se titula con honestidad *"Cuando el equipo aporte origen y controles, irán aquí"*, sin atribuir orígenes geográficos no confirmados.

---

## 5. Jurídico y Propiedad Intelectual
- **Relación societaria con Limosin Fruits**: La vinculación mercantil exacta entre Malabar Fruits (marca) y Limosin Fruits (empresa titular o distribuidora) no cuenta con confirmación contractual pública ni CIF validado. Se mantiene una formulación prudente en `/limosin-fruits/`, footer y schema JSON-LD.
- **Derechos y licencias de fotografías**: Las imágenes de campaña procedentes de recursos históricos deben ser revisadas legalmente para garantizar que cuentan con derechos de explotación digital vigentes para la marca.
- **Textos legales vinculantes**: Las páginas `/aviso-legal/` y `/politica-de-privacidad/` presentan una estructura de trabajo con marcadores `[Pendiente de confirmar]` que deben ser revisados y aprobados por asesoría jurídica antes del lanzamiento.
