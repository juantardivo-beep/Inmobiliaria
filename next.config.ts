import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Esto es crucial para static export
  basePath: '/Inmobiliaria/Inmobiliaria', // Reemplaza con el nombre exacto de tu repo
  assetPrefix: '/Inmobiliaria/Inmobiliaria/',
  images: {
    unoptimized: true, // Necesario para static export
  },
};

export default nextConfig;
