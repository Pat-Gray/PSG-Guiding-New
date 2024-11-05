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
  const sizes = [320, 640, 768, 1024, 1200, 1920];

  for (const file of files) {
    if (file.match(/\.(jpg|jpeg|png|webp)$/i)) {
      const image = sharp(path.join(inputDir, file));
      const metadata = await image.metadata();

      // Generate responsive images
      for (const size of sizes) {
        if (size <= metadata.width) {
          await image
            .resize({
              width: size,
              withoutEnlargement: true,
              fit: 'cover'
            })
            .webp({ quality: size < 768 ? 75 : 85 })
            .toFile(path.join(outputDir, `${path.parse(file).name}-${size}.webp`));
        }
      }

      // Create AVIF versions for modern browsers
      for (const size of sizes) {
        if (size <= metadata.width) {
          await image
            .resize({
              width: size,
              withoutEnlargement: true,
              fit: 'cover'
            })
            .avif({ quality: size < 768 ? 75 : 85 })
            .toFile(path.join(outputDir, `${path.parse(file).name}-${size}.avif`));
        }
      }

      // Create placeholder
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