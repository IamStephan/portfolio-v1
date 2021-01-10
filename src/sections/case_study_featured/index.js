import React from 'react'

// Gatsby
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image/withIEPolyfill'

// Material
import { Typography, Chip, ButtonGroup, Button } from '@material-ui/core'

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

const CaseStudyPreview = () => {
  const { test: { childImageSharp: { fluid: testImage } } } = useStaticQuery(query)

  return (
    <Section
      className={styles['caseStudyFeaturedSection']}
    >
      <div
        className={styles['contentContainer']}
      >
        <div
          className={styles['showcaseContainer']}
        >
          <Img
            fluid={testImage}
          />
        </div>

        <div
          className={styles['infoContainer']}
        >
          <Typography
            variant='h3'
          >
            Gerimed Mobility
          </Typography>

          <div
            className={styles['tags']}
          >
            <Chip
              label='Website'
              variant='outlined'
              color='primary'
              size='small'
            />

            <Chip
              label='E-commerce'
              variant='outlined'
              color='primary'
              size='small'
            />

          <Chip
              label='E-commerce'
              variant='outlined'
              color='primary'
              size='small'
            />
          </div>
          <br />

          <Typography>
            Gerimed Mobility is a small business located in langebaan, taking care of all your mobility needs.
          </Typography>
          <br />

          <div
            className={styles['actions']}
          >
            <ButtonGroup>
              <Button
                variant='contained'
                color='primary'
              >
                Read Case Study
              </Button>

              <Button
                variant='outlined'
                color='secondary'
              >
                Visit Site
              </Button>
            </ButtonGroup>
          </div>
        </div>
      </div>


      <div
        className={styles['contentContainer']}
      >
        <div
          className={styles['showcaseContainer']}
        >
          <Img
            fluid={testImage}
          />
        </div>

        <div
          className={styles['infoContainer']}
        >
          <Typography
            variant='h3'
          >
            Gerimed Mobility
          </Typography>

          <div
            className={styles['tags']}
          >
            <Chip
              label='Website'
              variant='outlined'
              color='primary'
              size='small'
            />

            <Chip
              label='E-commerce'
              variant='outlined'
              color='primary'
              size='small'
            />

          <Chip
              label='E-commerce'
              variant='outlined'
              color='primary'
              size='small'
            />
          </div>
          <br />

          <Typography>
            Gerimed Mobility is a small business located in langebaan, taking care of all your mobility needs.
          </Typography>
          <br />

          <div
            className={styles['actions']}
          >
            <ButtonGroup>
              <Button
                variant='contained'
                color='primary'
              >
                Read Case Study
              </Button>

              <Button
                variant='outlined'
                color='secondary'
              >
                Visit Site
              </Button>
            </ButtonGroup>
          </div>
        </div>
      </div>






      <div
        className={styles['contentContainer']}
      >
        <div
          className={styles['showcaseContainer']}
        >
          <Img
            fluid={testImage}
          />
        </div>

        <div
          className={styles['infoContainer']}
        >
          <Typography
            variant='h3'
          >
            Gerimed Mobility
          </Typography>

          <div
            className={styles['tags']}
          >
            <Chip
              label='Website'
              variant='outlined'
              color='primary'
              size='small'
            />

            <Chip
              label='E-commerce'
              variant='outlined'
              color='primary'
              size='small'
            />

          <Chip
              label='E-commerce'
              variant='outlined'
              color='primary'
              size='small'
            />
          </div>
          <br />

          <Typography>
            Gerimed Mobility is a small business located in langebaan, taking care of all your mobility needs.
          </Typography>
          <br />

          <div
            className={styles['actions']}
          >
            <ButtonGroup>
              <Button
                variant='contained'
                color='primary'
              >
                Read Case Study
              </Button>

              <Button
                variant='outlined'
                color='secondary'
              >
                Visit Site
              </Button>
            </ButtonGroup>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default CaseStudyPreview
