/**
 * Get the base path for assets
 * In development: no base path
 * In production (GitHub Pages): /portfolio
 */
export const getBasePath = () => {
  return process.env.NODE_ENV === 'production' ? '/portfolio' : ''
}

/**
 * Get the full path for an asset
 * @param path - The path relative to public directory (e.g., '/images/me.jpg')
 */
export const getAssetPath = (path: string) => {
  return `${getBasePath()}${path}`
}

// Made with Bob
