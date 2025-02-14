import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true, // Disables ESLint checks in production builds
  },
  images: {
    domains: ['cdn.sanity.io']
  }
};

export default nextConfig;
