const fs = require('fs')
const path = require('path')
const sharp = require('sharp')

// Dimensiones ajustadas: 1920x1080
const WIDTH = 1920
const HEIGHT = 1080

const projectRoot = path.resolve(__dirname, '..')
const publicDir = path.join(projectRoot, 'public')
const outputDir = path.join(publicDir, 'hero')

const images = [
  '4-de-enero-1400.jpeg',
  'alberti-686.jpeg',
  'bv-2755.jpg',
  'comas-3334.jpeg',
  'lisandro-de-la-torre-3294.png',
  'peñaloza-6002.jpg',
]

if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir)

async function processImage(filename) {
  const inputPath = path.join(publicDir, filename)
  const outputPath = path.join(outputDir, filename)

  if (!fs.existsSync(inputPath)) {
    console.warn(`No existe: ${inputPath}, se omite`)
    return
  }

  try {
    await sharp(inputPath)
      .resize(WIDTH, HEIGHT, { fit: 'cover', position: 'centre' })
      .withMetadata()
      .toFile(outputPath)
    console.log(`Procesado ${filename} -> /hero/${filename} (${WIDTH}x${HEIGHT})`)
  } catch (err) {
    console.error(`Error procesando ${filename}:`, err.message)
  }
}

;(async () => {
  for (const img of images) {
    await processImage(img)
  }
  console.log('Proceso completado. Revisa la carpeta public/hero')
})()
