import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  output: 'standalone',
  sassOptions: {
    implementation: 'sass-embedded',
  }
};

export default nextConfig;
