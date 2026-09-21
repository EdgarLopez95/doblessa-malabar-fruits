// Copia a public/images los recursos usados por la web y genera variantes WebP.
// Los originales de ../Recursos no se modifican. Uso: node scripts/prepare-images.mjs
import { copyFile, mkdir } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const SOURCE = path.resolve('../Recursos/recursos-web/imagenes');
const OUTPUT = path.resolve('public/images');

const FILES = [
  'marca/logo-malabar-fruits.png',
  'marca/limosin-fruits.png',
  'marca/franja-estrellas-malabar.jpg',
  'marca/textura-pie-malabar.jpg',
  'inicio/hero-fruta-malabar.jpg',
  'inicio/hero-campana-malabar.jpg',
  'inicio/hero-campana-malabar-movil.jpg',
  'inicio/detalle-campana-malabar.png',
  'calidad/compromiso-calidad-malabar.png',
  'calidad/certificaciones-malabar.png',
  'calidad/logotipos-certificaciones-malabar.png',
  'contacto/ilustracion-contacto-malabar.png',
  'gama/fruta-divertida.png',
  'gama/fruta-energia-natural.png',
  'gama/fruta-dieta-equilibrada.png',
  'gama/fruta-energia-diaria.png',
  'gama/fruta-saludablemente-divertida.png',
];

for (const file of FILES) {
  const from = path.join(SOURCE, file);
  const to = path.join(OUTPUT, file);
  await mkdir(path.dirname(to), { recursive: true });
  await copyFile(from, to);
  await sharp(from).webp({ quality: 82, alphaQuality: 100, effort: 6 }).toFile(to.replace(/\.(png|jpe?g)$/i, '.webp'));
  console.log(`✓ ${file}`);
}

// Imagen Open Graph 1200×630 recortada de la campaña (derivada, no sustituye al original).
await mkdir(path.join(OUTPUT, 'og'), { recursive: true });
await sharp(path.join(SOURCE, 'inicio/hero-campana-malabar.jpg'))
  .extract({ left: 554, top: 0, width: 1366, height: 717 })
  .resize(1200, 630)
  .jpeg({ quality: 82, mozjpeg: true })
  .toFile(path.join(OUTPUT, 'og/malabar-fruits-og.jpg'));
console.log('✓ og/malabar-fruits-og.jpg');
