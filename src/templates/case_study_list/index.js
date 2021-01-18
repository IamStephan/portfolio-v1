import React from 'react'

// Gatsby
import { graphql } from 'gatsby'

// Organisms
import Page from '@organisms/page'

// Components
import Content from './components/content'

const StudyList = (props) => {
  const {
    data,
    pageContext
  } = props

  const studies = data.allStudies.nodes

  const currentPage = pageContext.currentPage
  const pageCount = pageContext.numPages

  return (
    <Page>
      <Content
        studies={studies}
        currentPage={currentPage}
        pageCount={pageCount}
      />
    </Page>
  )
}

export default StudyList

export const qeury = graphql`
  query (
    $limit: Int!,
    $skip: Int!
  ){
    allStudies(
      limit: $limit,
      skip: $skip
    ) {
      nodes {
        title
        overview
        tags
        previewLink
  
        showcase {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        
        fields {
          slug
        }
      } 
    }
  }
`
