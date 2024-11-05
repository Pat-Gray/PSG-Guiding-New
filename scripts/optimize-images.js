import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const inputDir = 'src/Images';
const outputDir = 'public/images';

async function optimizeImages() {
  console.log('Starting image optimization...');

  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const files = fs.readdirSync(inputDir);

  for (const file of files) {
    if (file.match(/\.(jpg|jpeg|png|webp)$/i)) {
      const image = sharp(path.join(inputDir, file));
      const metadata = await image.metadata();

      // Create WebP versions
      await image
        .resize({
          width: 1200,
          withoutEnlargement: true,
          fit: 'contain'
        })
        .webp({ quality: 80 })
        .toFile(path.join(outputDir, `${path.parse(file).name}-1200.webp`));

      // Create smaller versions
      await image
        .resize({
          width: 800,
          withoutEnlargement: true,
          fit: 'contain'
        })
        .webp({ quality: 80 })
        .toFile(path.join(outputDir, `${path.parse(file).name}-800.webp`));

      // Create placeholder versions
      await image
        .resize({
          width: 20,
          withoutEnlargement: true
        })
        .blur(10)
        .webp({ quality: 20 })
        .toFile(path.join(outputDir, `${path.parse(file).name}-placeholder.webp`));
    }
  }

  console.log(`Optimized ${files.length} images`);
}

optimizeImages().catch(console.error); 