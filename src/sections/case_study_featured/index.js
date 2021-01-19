import React from 'react'

// Gatsby
import { useStaticQuery, graphql, Link } from 'gatsby'
import Img from 'gatsby-image/withIEPolyfill'

// Foundation
import Icon from '@foundation/icons'

// Material
import { Typography, Chip, Button } from '@material-ui/core'

// Organisms
import Section from '@organisms/page_section'

// Utils
import { getStudyLink } from '@utils/getLink'

// Styles
import styles from './styles.module.scss'

const query = graphql`
  {
    allStudies(
      filter: {
        featured: {
          eq: true
        }
      }

      sort: {
        order: ASC,
        fields: featuredIndex
      }

      limit: 3,

    ) {
      nodes {
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
      }
    }
  }
`

const CaseStudyPreview = () => {
  const { allStudies: { nodes: Studies } } = useStaticQuery(query)

  return (
    <Section
      className={styles['caseStudyFeaturedSection']}
    >
      {
        Studies.map(study => (
          <div
            className={styles['caseStudyContainer']}
          >
            <div
              className={styles['showcaseContainer']}
            >
              <Img 
                className={styles['showcase']}
                objectFit='contain'
                fluid={study.showcase.childImageSharp.fluid}
              />
            </div>

            <div
              className={styles['contentContainer']}
            >
              <div
                className={styles['tagsContainer']}
              >
                {
                  study.tags.map(tag => (
                    <Chip
                      key={tag}
                      label={tag}
                      size='small'
                      color='primary'
                      className={styles['tag']}
                    />
                  ))
                }
              </div>

              <Typography
                variant='h3'
                className={styles['title']}
              >
                {study.title}
              </Typography>

              <Typography
                className={styles['summary']}
              >
                {study.overview}
              </Typography>

              <div
                className={styles['actionContainer']}
              >
                <Button
                  variant='outlined'
                  color='secondary'
                  className={styles['action']}
                  component={Link}
                  to={getStudyLink(study.fields.slug)}
                  endIcon={(
                    <Icon
                      className={styles['icon']}
                      name='projector-2'
                      mode='fill'
                    />
                  )}
                >
                  Read Case Study
                </Button>

                <Button
                  variant='contained'
                  color='primary'
                  className={styles['action']}
                  disabled={!study.previewLink}
                  component={study.previewLink ? 'a' : 'div'}
                  href={study.previewLink ? study.previewLink : ''}
                  target='_blank'
                  endIcon={(
                    <Icon
                      className={styles['icon']}
                      name='eye'
                      mode='fill'
                    />
                  )}
                >
                  Live Preview
                </Button>
              </div>
            </div>
          </div>
        ))
      }
    </Section>
  )
}

export default CaseStudyPreview
