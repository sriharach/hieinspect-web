import type { NextConfig } from 'next';

const isProduction = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  /* config options here */
  env: {
    API_URL: isProduction ? process.env.API_PRODUCTION_URL : process.env.API_URL || 'http://localhost:8000/api',
    AMOUNT_LIMIT_IMAGE: process.env.AMOUNT_LIMIT_IMAGE,
  },
  output: 'export',
  images: {
    unoptimized: !isProduction,
    path: '/_next/image',
  },
};

export default nextConfig;
