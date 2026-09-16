# Entregables del Cliente y Brechas Técnicas — Malabar Fruits (GAPS.md)

Este documento registra los entregables necesarios por parte del cliente (Limosin Fruits / Malabar Fruits) para el paso de este mockup estático a la web oficial en producción bajo el dominio `malabarfruits.com`.

---

## Tabla de Entregables y Estado

| ID | Qué falta | Dónde se ve en la web | Qué enviar | Cerrable en mockup sí/no |
| :---: | :--- | :--- | :--- | :---: |
| **01** | Certificado TLS / HTTPS | Dominio final (`malabarfruits.com`) en barra del navegador | Certificado SSL/TLS corporativo o delegación para emisión gestionada con renovación automática | **No** |
| **02** | Configuración de registros DNS | Dominio `malabarfruits.com` | Registros DNS (A, AAAA, CNAME) apuntando a la infraestructura de hosting definitiva | **No** |
| **03** | Retirada de noindex y canonical definitivo | `<head>` de las 10 páginas y fichero `robots.txt` | Aprobación expresa de apertura a indexación en motores de búsqueda y confirmación del dominio oficial | **No** |
| **04** | Fuentes web autoalojadas (cumplimiento RGPD) | `<head>` y `@font-face` en `src/styles/global.css` | N/A (Fuentes *DM Serif Display* y *Manrope* convertidas a WOFF2 local, prealojadas en `public/fonts/`, sin llamadas externas a Google Fonts) | **Cerrado en mockup** |
| **05** | Puntos de venta físicos (dónde comprar) | Cierre de portada (`#donde-encontrar`), aside de `/contacto/` y pie de `/fruta-fresca/` | Listado verificado de fruterías colaboradoras, puestos en mercados o cadenas comerciales | **No** |
| **06** | Teléfono comercial de atención | Pie de página (`SiteFooter.astro`) y aside de `/contacto/` | Número telefónico verificado para atención a clientes o empresas | **No** |
| **07** | Correo electrónico corporativo | Pie de página y aside de `/contacto/` | Cuenta de correo oficial (ej. `hola@malabarfruits.com` o `comercial@...`) | **No** |
| **08** | Domicilio comercial / Dirección fiscal | Pie de página, `/contacto/` y `/aviso-legal/` | Dirección física completa de la sede social o almacén logístico | **No** |
| **09** | Razón social y CIF | `/aviso-legal/`, `/politica-de-privacidad/` y footer | Nombre societario completo de la empresa responsable y su CIF/NIF para textos legales vinculantes | **No** |
| **10** | Relación societaria con Limosin Fruits | `/limosin-fruits/`, footer y schema `Organization` | Definición jurídica exacta del vínculo mercantil entre ambas entidades para formular el texto legal y corporativo | **No** |
| **11** | Condiciones comerciales B2B | `/para-profesionales/` y formulario de contacto | Pedido mínimo (MOQ), formatos de caja/palé, plazos de entrega y áreas geográficas de cobertura | **No** |
| **12** | Fotografía real de producto (13 frutas) | `/fruta-fresca/` (parrilla de las 13 tarjetas de fruta) | Fotografías reales en alta resolución de cada fruta (en campo, mesa de selección o packaging Malabar) | **No** |
| **13** | Fotografía real de verduras | `/verduras-frescas/` (secciones por colores de huerta) | Fotografías reales de la gama de verduras frescas comercializada por la marca | **No** |
| **14** | Calendario agronómico oficial | `/fruta-fresca/#temporada` | Matriz agronómica contrastada de recolección y disponibilidad mes a mes de cada especie y variedad | **No** |
| **15** | Certificaciones oficiales de calidad | `/calidad-y-trazabilidad/` (bloque de trazabilidad) | Certificados vigentes y acreditaciones oficiales (GlobalG.A.P., IFS, BRC, Producción Integrada o Ecológico) | **No** |
| **16** | Derechos y licencias de fotos de campaña | Portada, `/calidad-y-trazabilidad/` y `/limosin-fruits/` | Validación jurídica de cesión de derechos de explotación digital para las imágenes históricas de campaña | **No** |

---

## Preguntas para la reunión con Limosin Fruits / Malabar Fruits

Para desbloquear el lanzamiento a producción de la web definitiva, planteamos las siguientes 5 preguntas directas:

1. **Canales y puntos de venta**: ¿Dónde puede un consumidor encontrar y comprar físicamente fruta de Malabar Fruits hoy en día (fruterías de referencia, puestos en mercados mayoristas o cadenas específicas) y qué vías de atención al consumidor debemos publicar?
2. **Titularidad societaria y datos de contacto**: ¿Cuál es la razón social, CIF y dirección física que debe figurar legalmente como responsable del tratamiento de datos y titular de la marca Malabar Fruits, y cuál es la formulación corporativa exacta de su relación con Limosin Fruits S.L.?
3. **Fotografía real de producto**: ¿Dispone el equipo de material fotográfico propio y en alta resolución de las 13 frutas de la gama (y de la selección de verduras) en cajas, almacén o árboles, para sustituir la actual representación editorial tipográfica por fotografía de producto real?
4. **Calendario agronómico y trazabilidad**: ¿En qué meses exactos se cosecha y distribuye cada una de las 13 frutas (melocotón, nectarina, pera, manzana, cereza, etc.) y cuáles son las principales zonas geográficas de procedencia para poder activar el calendario y la sección de trazabilidad?
5. **Canal profesional y recepción de consultas**: Cuando un profesional (tienda, restaurante o distribuidor) envíe el formulario de contacto con su tipo de consulta seleccionada, ¿a qué buzón de correo o CRM interno deben canalizarse las solicitudes para su atención comercial?
