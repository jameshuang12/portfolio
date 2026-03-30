/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Use basePath only in production (GitHub Pages)
  basePath: process.env.NODE_ENV === 'production' ? '/portfolio' : '',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}

module.exports = nextConfig

// Made with Bob
