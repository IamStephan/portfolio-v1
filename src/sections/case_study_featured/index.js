import React from 'react'

// Gatsby
import { useStaticQuery, graphql, Link } from 'gatsby'
import Img from 'gatsby-image/withIEPolyfill'

// Foundation
import Icon from '../../foundation/icons'

// Material
import { Typography, Chip, Button } from '@material-ui/core'

// Template
import Section from '../../templates/page_section'

// Styles
import styles from './styles.module.scss'

const query = graphql`
  {
    test: file(relativePath: {eq: "test_imgs/mockup_test.png"}) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const DemoCaseStudies = [
  {
    title: 'Gerimed Mobility',
    summary: 'Gerimed Mobility is a small business located in langebaan, taking care of all your mobility needs.',
    tags: [
      'Website',
      'E-commerce'
    ],
    showcase: null,
    previewLink: 'https://gerimedmobility.co.za',
    caseStudyLink: '/about'
  },
  {
    title: 'Cycleworx Langebaan',
    summary: 'Gerimed Mobility is a small business located in langebaan, taking care of all your mobility needs.',
    tags: [
      'Website',
      'Landing Page'
    ],
    showcase: null,
    previewLink: 'https://cycleworxlangebaan.com',
    caseStudyLink: '/about'
  },
  {
    title: 'Mobility Crunch',
    summary: 'Gerimed Mobility is a small business located in langebaan, taking care of all your mobility needs.',
    tags: [
      'Mobile App'
    ],
    showcase: null,
    previewLink: null,
    caseStudyLink: '/about'
  }
]

const CaseStudyPreview = () => {
  const { test: { childImageSharp: { fluid: testImage } } } = useStaticQuery(query)

  return (
    <Section
      className={styles['caseStudyFeaturedSection']}
    >
      {
        DemoCaseStudies.map(caseStudy => (
          <div
            className={styles['caseStudyContainer']}
          >
            <div
              className={styles['showcaseContainer']}
            >
              <Img 
                className={styles['showcase']}
                objectFit='contain'
                fluid={testImage}
              />
            </div>

            <div
              className={styles['contentContainer']}
            >
              <div
                className={styles['tagsContainer']}
              >
                {
                  caseStudy.tags.map(tag => (
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
                {caseStudy.title}
              </Typography>

              <Typography
                className={styles['summary']}
              >
                {caseStudy.summary}
              </Typography>

              <div
                className={styles['actionContainer']}
              >
                <Button
                  variant='outlined'
                  color='secondary'
                  className={styles['action']}
                  component={Link}
                  to={caseStudy.caseStudyLink}
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
                  disabled={!caseStudy.previewLink}
                  component={caseStudy.previewLink ? 'a' : 'div'}
                  href={caseStudy.previewLink ? caseStudy.previewLink : ''}
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
