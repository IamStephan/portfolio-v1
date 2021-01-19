const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require(`path`)
const { kebabCase } = require(`lodash`)

/**
 * NOTES:
 * =======
 * 
 * Multiple Queries:
 *    Im querying the articles and pages seperately based on instance name.
 *    This allows me to have more control over the items
 */

// Constants
const pageListSize = 5

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const ArticlePage = path.resolve('./src/templates/article/index.js')
  const ArticleListPage = path.resolve('./src/templates/article_list/index.js')

  const CaseStudyPage = path.resolve('./src/templates/case_study/index.js')
  const CaseStudyListPage = path.resolve('./src/templates/case_study_list/index.js')

  const articlesQuery = graphql(`
    {
      allMdx(sort: {fields: frontmatter___date, order: ASC}) {
        nodes {
          fields {
            slug
          }

          frontmatter {
            title
          }
        }
      }
    }
  `).then((result) => {
    if(result.errors) {
      return
    }

    // All the data
    const articles = result.data.allMdx.nodes

    /**
     * Create the article pages
     */
    articles.forEach((article, i, arr) => {
      const prev = arr[i - 1]
      const next = arr[i + 1]

      createPage({
        path: article.fields.slug,
        component: ArticlePage,
        context: {
          slug: article.fields.slug,
          prev,
          next
        }
      })
    })

    /**
     * Create the article list pages
     */
    const numPages = Math.ceil(articles.length / pageListSize)
    Array.from({ length: numPages }).forEach((_articlesPage, i) => {
      createPage({
        path: i === 0 ? `/articles` : `/articles/page-${i + 1}`,
        component: ArticleListPage,
        context: {
          limit: pageListSize,
          skip: i * pageListSize,
          currentPage: i + 1,
          numPages,
        },
      })
    })
  })

  const studiesQuery = graphql(`
    {
      allStudies {
        nodes {
          tags
          fields {
            slug
          }
        }
      }
    }
  `).then(result => {
    if(result.errors) {
      return
    }

    // All the data
    const studies = result.data.allStudies.nodes

    /**
     * Create the study pages
     */
    studies.forEach(study => {
      createPage({
        path: study.fields.slug,
        component: CaseStudyPage,
        context: {
          slug: study.fields.slug
        }
      })
    })

    /**
     * Create the study list pages
     */
    const numPages = Math.ceil(studies.length / pageListSize)
    Array.from({ length: numPages }).forEach((_studiesPage, i) => {
      createPage({
        path: i === 0 ? `/studies` : `/studies/page-${i + 1}`,
        component: CaseStudyListPage,
        context: {
          limit: pageListSize,
          skip: i * pageListSize,
          currentPage: i + 1,
          numPages,
        },
      })
    })
  })

  return Promise.all([studiesQuery, articlesQuery])
}

/**
 * Generate slugs that can be queried
 */
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  // Articles
  if (node.internal.type === `Mdx`) {
    const instance = getNode(node.parent).sourceInstanceName

    if(instance === 'articles') {
      const slugValue = `article/${kebabCase(node.frontmatter.title)}`

      createNodeField({
        name: `slug`,
        node,
        value: slugValue,
      })
    }
  }

  // Case Studies
  if(node.internal.type === `Studies`) {
    const slugValue = `study/${kebabCase(node.title)}`
    createNodeField({
      name: `slug`,
      node,
      value: slugValue,
    })
  }
}