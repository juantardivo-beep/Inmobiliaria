import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/Inmobiliaria',
  assetPrefix: '/Inmobiliaria/',
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: '/Inmobiliaria',
  },
};

export default nextConfig;
