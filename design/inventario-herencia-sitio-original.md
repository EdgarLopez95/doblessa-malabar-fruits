# Inventario de herencia del sitio original — Malabar Fruits

**Fecha:** 21 de septiembre de 2026
**Criterio aplicado:** la web original es la fuente principal. Lo que aparece en ella o
en sus recursos descargados se hereda y se rediseña, aunque no exista confirmación
actual del cliente. La falta de confirmación solo impide **inventar** datos nuevos,
vigencias, capacidades operativas, procesos internos o servicios que nunca estuvieron.

## Clasificación

1. **Heredado** — visible en la web original o en sus recursos. Válido para el mockup.
2. **Decisión editorial/UX** — organiza o mejora lo existente, sin crear capacidades.
3. **Hipótesis de negocio** — no se incluye sin confirmación.

## Inventario

| Elemento original | Evidencia | Uso en el rediseño | Ruta o sección | Decisión |
| --- | --- | --- | --- | --- |
| `logo-malabar-fruits.png` | Cabecera y pie del sitio original | Logotipo de cabecera, hero y pie | Todas | Heredado |
| `hero-campana-malabar.jpg` + `-movil.jpg` | Hero de campaña original | Imagen principal del hero, con arte dirigido por ancho | `/` | Heredado |
| `hero-fruta-malabar.jpg` | Banner de portada | Banda bajo el hero e imagen de la página de verdura | `/`, `/verduras-frescas/` | Heredado |
| `detalle-campana-malabar.png` | Campaña «Todos hemos hecho un malabar :)» | Grabado del malabarista; el mensaje se reproduce como H2 en HTML | `/` · Qué es Malabar | Heredado |
| `fruta-saludablemente-divertida.png` | Rótulo «Saludablemente divertidas» | Rótulo heredado junto a los principios de marca | `/` · Qué es Malabar | Heredado |
| `fruta-energia-natural.png` | Cartel «Energía natural» | Grabado + titular «Energía natural» | `/` · Los carteles originales | Heredado |
| `fruta-dieta-equilibrada.png` | Cartel «Dieta equilibrada» | Grabado + titular «Dieta equilibrada» | `/` · Los carteles originales | Heredado |
| `fruta-energia-diaria.png` | Cartel «Vitaminas sin parar» | Grabado + titular «Vitaminas sin parar» | `/` · Los carteles originales | Heredado |
| `fruta-divertida.png` | Ilustración de marca | Visual del hero de fruta | `/fruta-fresca/` | Heredado |
| `compromiso-calidad-malabar.png` | Rótulo «Calidad» | Rótulo del hero de Calidad | `/calidad/` | Heredado |
| `logotipos-certificaciones-malabar.png` | Logos GLOBALG.A.P., IFS Food y QS | Sección **Certificaciones**, en panel propio | `/calidad/` | Heredado |
| `franja-estrellas-malabar.jpg` | Banda decorativa original | Divisoria sobre el pie y borde del bloque granate | Todas, `/` | Heredado |
| `textura-pie-malabar.jpg` | Fondo del pie original | Textura del pie | Todas | Heredado |
| `ilustracion-contacto-malabar.png` | Rótulo «Contacto» | Visual del hero de contacto y del cierre de inicio | `/contacto/`, `/` | Heredado |
| `limosin-fruits.png` | Enlace a Limosin en la original | Banda de mención de marca | `/` | Heredado |
| Las 13 frutas nombradas | Catálogo citado en la portada | Cuadrícula editorial con nombre y agrupación | `/fruta-fresca/` | Heredado |
| Calidad, sabor, aspecto, frescura, higiene y controles | Relato de calidad original | Lista de seis valores atribuidos a la marca | `/calidad/` | Heredado |
| Mención de verdura | Presentación original | Página propia, sin inventar variedades | `/verduras-frescas/` | Heredado |
| Enlace a `limosinfruits.com` | Navegación y pie originales | Mención **sin enlace** | `/`, pie | Heredado con salvedad técnica |
| `certificaciones-malabar.png` (rótulo «CERTIFICADOS») | Encabezado de la sección de certificados | No usado | — | Duplicado: la palabra ya va como H2 en HTML, en la misma sección y en la misma familia tipográfica |
| `sello-malabar-fruits.png` (rótulo «MALABAR») | Identificador secundario | No usado | — | Duplicado: el logotipo aparece en la misma pantalla |
| `detalle-cta-contacto-malabar.png` («Clic aquí») | Botón de la web original | No usado | — | Llamada a la acción incrustada en imagen; debe ser HTML real (mapa de recursos) |
| Copyright «© 2000–2018 Limosin Fruits» | Pie original | No usado | — | Dato corporativo obsoleto; el pie declara que esto es una propuesta |

## Salvedades registradas (uso interno)

- **Certificaciones:** GLOBALG.A.P., IFS Food y QS se muestran porque estaban en la
  comunicación original. La **vigencia actual, el alcance y la titularidad no están
  verificados** y deberán confirmarse antes de una publicación corporativa
  definitiva. Son verificables en los registros públicos de cada esquema a partir del
  número GGN, del COID o número de certificado IFS y del ID de QS.
- **Limosin Fruits:** el dominio `limosinfruits.com` no resuelve por DNS a 21 de
  septiembre de 2026, así que la mención va sin enlace. Cuando el dominio funcione por
  HTTPS, puede enlazarse.
- **Mensajes heredados:** «Saludablemente divertidas», «Energía natural», «Dieta
  equilibrada» y «Vitaminas sin parar» se presentan atribuidos a la comunicación
  original de la marca. No se amplían con afirmaciones nutricionales o médicas nuevas.

## Sigue fuera: hipótesis de negocio

Nunca estuvieron en la web original, así que no se reincorporan sin confirmación:
públicos profesionales, retail, restauración, distribución, colaboraciones, equipo
comercial, logística, cobertura, puntos de venta, localizador, envíos a domicilio,
stock, ecommerce, trazabilidad como proceso, partidas, homologaciones, tiempos de
respuesta y datos de contacto.
