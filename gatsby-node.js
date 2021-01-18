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

  const CaseStudyPage = path.resolve('./src/templates/case_study/index.js')
  const CaseStudyListPage = path.resolve('./src/templates/case_study_list/index.js')

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

    // Extra Data
    const studyTags = []

    /**
     * Create the study pages
     */
    studies.forEach(study => {
      study.tags.forEach(tag => studyTags.push(tag))
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
    Array.from({ length: numPages }).forEach((_studyPage, i) => {
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

  

  return Promise.all([studiesQuery])
}

/**
 * Generate slugs and types that can be queried
 */
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  // if (node.internal.type === `Mdx`) {
  //   const instance = getNode(node.parent).sourceInstanceName

  //   let type = ''

  //   switch(instance) {
  //     case 'studies': {
  //       type = 'studies'
  //       break
  //     }

  //     default: {
  //       type = 'unknown'
  //     }
  //   }

  //   const slugValue = type + `/${kebabCase(node.frontmatter.title)}`

  //   createNodeField({
  //     name: `slug`,
  //     node,
  //     value: slugValue,
  //   })

  //   createNodeField({
  //     name: `type`,
  //     node,
  //     value: type,
  //   })
  // }

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