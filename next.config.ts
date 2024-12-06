import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  sassOptions: {
    api: 'modern-compiler',
    sourceMap: true,
    outputStyle: 'compressed',
  },
};

export default nextConfig;