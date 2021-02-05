/**
 * 
 * @param {string} slug 
 */
export function getArticleLink(slug) {
  return slug ? `/blog-post/${slug}` : ''
}

/**
 * 
 * @param {number} page 
 */
export function getArticlePage(page) {
  return `/blog${page === 1 ? '' : `/page-${page}`}`
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