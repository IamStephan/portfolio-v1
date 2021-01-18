import React from 'react'

// Gatsby
import { graphql } from 'gatsby'

// Orgainisms
import Page from '@organisms/page'

// Components
import {
  Overview,
  Outline,
  Challenges
} from './components'

const CaseStudyTemplate = (props) => {
  const {
    data,
    pageContext
  } = props

  const results = data.studies

  return (
    <Page>
      <Overview
        title={results.title}
        tags={results.tags}
        previewLink={results.previewLink}
        repositoryLink={results.repositoryLink}
        showcase={results.showcase.childImageSharp.fluid}
      >
        {results.overview}
      </Overview>

      <Outline
        goal={results.outline.goal}
        scope={results.outline.scope}
        industry={results.outline.industry}
      />

      <Challenges
        challenges={results.challenges}
      />
    </Page>
  )
}

export default CaseStudyTemplate

export const query = graphql`
  query StudyBySlug($slug: String!){
    studies(
      fields: {
        slug: {
          eq: $slug
        }
      }
    ) {
      title
      overview
      tags
      previewLink
      repositoryLink

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

      challenges {
        title
        content
        showcase {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }

      outline {
        goal
        industry
        scope
      }
    }
  }
`
