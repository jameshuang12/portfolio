/**
 * Next.js Configuration
 *
 * Configured for static export to GitHub Pages
 * - Static site generation with 'export' output
 * - Base path '/portfolio' for GitHub Pages deployment
 * - Unoptimized images for static hosting
 * - Trailing slashes for better compatibility
 *
 * @type {import('next').NextConfig}
 */
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

