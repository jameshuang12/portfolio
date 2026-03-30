/**
 * Path Utilities
 *
 * Handles asset path resolution for development and production environments.
 * Ensures correct paths for GitHub Pages deployment with base path.
 *
 * @module lib/paths
 */

/**
 * Get the base path for assets
 *
 * @returns {string} Empty string in development, '/portfolio' in production
 */
export const getBasePath = () => {
  return process.env.NODE_ENV === 'production' ? '/portfolio' : ''
}

/**
 * Get the full path for an asset
 *
 * Automatically handles path resolution based on environment:
 * - Development: Returns path as-is (Next.js serves from public/)
 * - Production: Prepends base path for GitHub Pages
 *
 * @param {string} path - The path relative to public directory (e.g., '/images/me.jpg')
 * @returns {string} The resolved asset path
 *
 * @example
 * // Development
 * getAssetPath('/images/me.jpg') // Returns: '/images/me.jpg'
 *
 * // Production
 * getAssetPath('/images/me.jpg') // Returns: '/portfolio/images/me.jpg'
 */
export const getAssetPath = (path: string) => {
  if (process.env.NODE_ENV !== 'production') {
    return path
  }
  return `${getBasePath()}${path}`
}

