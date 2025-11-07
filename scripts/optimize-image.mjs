import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const inputPath = process.argv[2];
if (!inputPath) {
  console.error('Usage: node scripts/optimize-image.mjs <inputPath> [maxWidth]');
  process.exit(1);
}

const maxWidth = Number(process.argv[3] || 1400);

async function optimizePng(filePath) {
  const abs = path.resolve(filePath);
  const buf = await fs.readFile(abs);
  const image = sharp(buf, { failOn: 'none' });
  const metadata = await image.metadata();
  const width = metadata.width || maxWidth;
  const targetWidth = Math.min(width, maxWidth);

  const optimized = await image
    .resize({ width: targetWidth, withoutEnlargement: true })
    .png({ compressionLevel: 9, adaptiveFiltering: true, palette: true })
    .toBuffer();

  await fs.writeFile(abs, optimized);
  const webpOut = abs.replace(/\.png$/i, '.webp');
  const webp = await image
    .resize({ width: targetWidth, withoutEnlargement: true })
    .webp({ quality: 80 })
    .toBuffer();
  await fs.writeFile(webpOut, webp);
  console.log(`Optimized: ${abs}`);
  console.log(`Created WEBP: ${webpOut}`);
}

optimizePng(inputPath).catch((err) => {
  console.error(err);
  process.exit(1);
});

