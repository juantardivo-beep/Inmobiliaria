/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/Inmobiliria',
  assetPrefix: '/Inmobiliria/',
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: '/Inmobiliria',
  },
}

module.exports = nextConfig