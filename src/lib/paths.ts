/**
 * Get the base path for assets
 * In development: no base path (empty string)
 * In production (GitHub Pages): /portfolio
 */
export const getBasePath = () => {
  return process.env.NODE_ENV === 'production' ? '/portfolio' : ''
}

/**
 * Get the full path for an asset
 * @param path - The path relative to public directory (e.g., '/images/me.jpg')
 * In development, returns the path as-is (e.g., '/images/me.jpg')
 * In production, prepends base path (e.g., '/portfolio/images/me.jpg')
 */
export const getAssetPath = (path: string) => {
  // In development, don't add base path - Next.js serves from public/
  if (process.env.NODE_ENV !== 'production') {
    return path
  }
  return `${getBasePath()}${path}`
}

// Made with Bob
