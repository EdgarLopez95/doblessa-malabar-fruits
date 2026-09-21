# Dirección visual — Malabar Fruits

## Idea central

Circo editorial: el malabarismo heredado de la marca, contado con tipografía de
revista y color de fruta. El juego está en la composición, no en los adjetivos.

## Elemento memorable

Los grabados vintage de circo (oso, foca, forzudo) recortados por CSS sobre granate,
acompañados de bolas de malabar como motivo gráfico recurrente.

## Color (tokens en `src/styles/global.css`)

| Token | Valor | Uso |
| --- | --- | --- |
| `--malabar-700` | `#7B2330` | Marca, botón principal |
| `--malabar-600` | `#A33646` | Interacción, acentos |
| `--apricot-400` | `#F29B62` | Acento cálido, panel de fruta |
| `--leaf-600` | `#38735B` | Verdura, confirmaciones |
| `--lemon-300` | `#F8D85B` | Destacados y avisos |
| `--cream-50` | `#FFF9F1` | Fondo |
| `--paper-100` | `#F3E9DB` | Secciones y tarjetas |
| `--cocoa-900` | `#352727` | Texto y bloques oscuros |
| `--cocoa-600` | `#6B5753` | Texto secundario |

Contraste verificado AA en texto y en los fondos oscuros (crema sobre granate y
sobre cacao).

## Tipografía

- Titulares: **DM Serif Display** (autoalojada, woff2).
- Interfaz y cuerpo: **Manrope** (autoalojada, woff2).
- Escala fluida con `clamp()`; cuerpo 17/1.6.

## Ritmo y composición

Retícula editorial de 80rem, secciones alternando crema y papel, un bloque granate a
media página para el golpe de color y un pie cacao con textura. Paneles asimétricos
(7/5) en la gama; listas con filetes en calidad; nada de rejillas de tarjetas
iguales.

## Motion

Entradas de 250-300 ms, bolas con `fade-up` escalonado, hover discreto en paneles y
tarjetas. Todo anulado bajo `prefers-reduced-motion`.

## Decisiones propias de esta corrección

- Los colores en verduras son un **campo gráfico**, no una taxonomía: sin nombres ni
  usos culinarios asociados.
- Los avisos de "pendiente de validación" son un componente visual propio (píldora
  limón sobre panel punteado), para que la honestidad forme parte del diseño.
- Sin CTA segmentados: un único camino de contacto.
