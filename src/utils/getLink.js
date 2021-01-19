/**
 * 
 * @param {string} slug 
 */
export function getArticleLink(slug) {
  return slug ? `/article/${slug}` : ''
}

/**
 * 
 * @param {number} page 
 */
export function getArticlePage(page) {
  return `/articles${page === 1 ? '' : `/page-${page}`}`
}

/**
 * 
 * @param {string} slug 
 */
export function getStudyLink(slug) {
  return slug ? `/study/${slug}` : ''
}

/**
 * 
 * @param {number} page 
 */
export function getStudyPage(page) {
  return `/studies${page === 1 ? '' : `/page-${page}`}`
}