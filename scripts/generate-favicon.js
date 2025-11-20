const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function generateCircularImages() {
  const outputDir = path.join(__dirname, '../public');
  
  // Generate circular favicon from 8bit headshot
  console.log('Generating circular favicons from 8bit headshot...');
  const favicon8bitPath = path.join(__dirname, '../public/8bitheadshot.png');
  
  // Generate different favicon sizes
  const faviconSizes = [16, 32, 48, 64, 128, 256];
  
  for (const iconSize of faviconSizes) {
    await sharp(favicon8bitPath)
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
  await sharp(favicon8bitPath)
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
  await sharp(favicon8bitPath)
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
  
  // Generate circular profile images for both themes (400x400)
  console.log('\nGenerating circular profile images...');
  
  const profileSize = 400;
  
  // Circular 8bit headshot
  await sharp(favicon8bitPath)
    .resize(profileSize, profileSize, {
      fit: 'cover',
      position: 'center'
    })
    .composite([{
      input: Buffer.from(
        `<svg><circle cx="${profileSize / 2}" cy="${profileSize / 2}" r="${profileSize / 2}" /></svg>`
      ),
      blend: 'dest-in'
    }])
    .png()
    .toFile(path.join(outputDir, '8bitheadshot-circular.png'));
  
  console.log('Generated 8bitheadshot-circular.png');
  
  // Circular regular headshot
  const regularHeadshotPath = path.join(__dirname, '../public/headshot.jpg');
  await sharp(regularHeadshotPath)
    .resize(profileSize, profileSize, {
      fit: 'cover',
      position: 'center'
    })
    .composite([{
      input: Buffer.from(
        `<svg><circle cx="${profileSize / 2}" cy="${profileSize / 2}" r="${profileSize / 2}" /></svg>`
      ),
      blend: 'dest-in'
    }])
    .png()
    .toFile(path.join(outputDir, 'headshot-circular.png'));
  
  console.log('Generated headshot-circular.png');
  
  console.log('\nAll circular images generated successfully!');
}

generateCircularImages().catch(console.error);

