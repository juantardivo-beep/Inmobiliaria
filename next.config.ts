/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  basePath: isProd ? '/Inmobiliaria' : '',
  assetPrefix: isProd ? '/Inmobiliaria' : '',
  output: 'export',
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
