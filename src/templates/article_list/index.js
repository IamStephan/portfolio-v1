import React from 'react'

// Gatsby
import { graphql } from 'gatsby'

// Organisms
import Page from '@organisms/page'

// Components
import Content from './components/content'

const ArticleList = (props) => {
  const {
    data,
    pageContext
  } = props

  const articles = data.allMdx.nodes

  const currentPage = pageContext.currentPage
  const pageCount = pageContext.numPages

  return (
    <Page>
      <Content
        articles={articles}
        currentPage={currentPage}
        pageCount={pageCount}
      />
    </Page>
  )
}

export default ArticleList

export const qeury = graphql`
  query (
    $limit: Int!,
    $skip: Int!
  ){
    allMdx(
      limit: $limit,
      skip: $skip,
      sort: {
        fields: frontmatter___date,
        order: DESC
      }
    ) {
      nodes {
        fields {
          slug
        }

        frontmatter {
          date(formatString: "DD MMM YY")
          overview
          tags
          title
          showcase {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
  
        timeToRead
      } 
    }
  }
`
