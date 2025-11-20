const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function generateCircularFavicon() {
  const inputPath = path.join(__dirname, '../public/8bitheadshot.png');
  const outputDir = path.join(__dirname, '../public');
  
  // Read the input image to get its dimensions
  const image = sharp(inputPath);
  const metadata = await image.metadata();
  
  const size = Math.min(metadata.width, metadata.height);
  
  // Create a circular mask
  const circle = Buffer.from(
    `<svg><circle cx="${size / 2}" cy="${size / 2}" r="${size / 2}" /></svg>`
  );
  
  // Generate different favicon sizes
  const sizes = [16, 32, 48, 64, 128, 256];
  
  for (const iconSize of sizes) {
    await sharp(inputPath)
      .resize(iconSize, iconSize, {
        fit: 'cover',
        position: 'center'
      })
      .composite([{
        input: Buffer.from(
          `<svg><circle cx="${iconSize / 2}" cy="${iconSize / 2}" r="${iconSize / 2}" /></svg>`
        ),
        blend: 'dest-in'
      }])
      .png()
      .toFile(path.join(outputDir, `favicon-${iconSize}.png`));
    
    console.log(`Generated favicon-${iconSize}.png`);
  }
  
  // Generate the main favicon.ico (32x32)
  await sharp(inputPath)
    .resize(32, 32, {
      fit: 'cover',
      position: 'center'
    })
    .composite([{
      input: Buffer.from(
        `<svg><circle cx="16" cy="16" r="16" /></svg>`
      ),
      blend: 'dest-in'
    }])
    .png()
    .toFile(path.join(outputDir, 'favicon.png'));
  
  console.log('Generated favicon.png');
  
  // Also generate apple-touch-icon
  await sharp(inputPath)
    .resize(180, 180, {
      fit: 'cover',
      position: 'center'
    })
    .composite([{
      input: Buffer.from(
        `<svg><circle cx="90" cy="90" r="90" /></svg>`
      ),
      blend: 'dest-in'
    }])
    .png()
    .toFile(path.join(outputDir, 'apple-touch-icon.png'));
  
  console.log('Generated apple-touch-icon.png');
  
  console.log('\nAll circular favicons generated successfully!');
}

generateCircularFavicon().catch(console.error);

