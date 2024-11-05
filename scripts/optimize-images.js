import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';

const inputDir = 'src/Images';
const outputDir = 'public/images';
const BATCH_SIZE = 2; // Reduced batch size
const TIMEOUT = 30000; // 30 second timeout per image

async function ensureDir(dir) {
  try {
    await fs.access(dir);
  } catch {
    await fs.mkdir(dir, { recursive: true });
  }
}

// Add timeout wrapper
const withTimeout = (promise, ms) => {
  const timeout = new Promise((_, reject) => {
    setTimeout(() => reject(new Error('Operation timed out')), ms);
  });
  return Promise.race([promise, timeout]);
};

async function optimizeImage(file, sizes) {
  try {
    const inputPath = path.join(inputDir, file);
    const image = sharp(inputPath);
    const metadata = await withTimeout(image.metadata(), TIMEOUT);
    const filename = path.parse(file).name;

    // Only process the most important sizes
    const criticalSizes = [640, 1200]; // Reduced sizes
    
    for (const size of criticalSizes) {
      if (size <= metadata.width) {
        const outputPath = path.join(outputDir, `${filename}-${size}.webp`);
        
        try {
          await fs.access(outputPath);
          console.log(`Skipping ${filename}-${size}.webp (exists)`);
          continue;
        } catch {
          await withTimeout(
            image
              .resize({
                width: size,
                withoutEnlargement: true,
                fit: 'cover'
              })
              .webp({ quality: 80 })
              .toFile(outputPath),
            TIMEOUT
          );
          console.log(`✓ ${filename}-${size}.webp`);
        }
      }
    }

  } catch (error) {
    console.error(`Error processing ${file}:`, error.message);
  }
}

async function optimizeImages() {
  console.log('Starting image optimization...');
  
  try {
    await ensureDir(outputDir);
    
    let files;
    try {
      files = (await fs.readdir(inputDir))
        .filter(file => /\.(jpg|jpeg|png|webp)$/i.test(file));
    } catch (error) {
      console.log('No images to process or directory not found');
      return;
    }

    if (files.length === 0) {
      console.log('No images found to process');
      return;
    }

    // Process images sequentially instead of in parallel
    for (const file of files) {
      await optimizeImage(file, [640, 1200]);
    }

    console.log('✨ Image optimization complete');

  } catch (error) {
    console.error('Failed to optimize images:', error);
    // Don't exit process, just log error
    console.log('Continuing build process...');
  }
}

// Add error handling for the main process
optimizeImages()
  .catch(error => {
    console.error('Script failed:', error);
    // Don't exit process, allow build to continue
    console.log('Continuing build process...');
  }); 