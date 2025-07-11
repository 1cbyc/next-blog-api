/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // appDir: true, // Removed - no longer needed in Next.js 14+
  },
  images: {
    domains: [],
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
}

module.exports = nextConfig
 
