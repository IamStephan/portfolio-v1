import React from 'react'

import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image/withIEPolyfill'

// Organisms
import Page from '../../organisms/page'
import Section from '../../organisms/page_section'

// styles
import styles from './styles.module.scss'
import { Typography } from '@material-ui/core'

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

const Example = () => {
  const { test: { childImageSharp: { fluid: testImage } } } = useStaticQuery(query)

  return (
    <Page>
      <Section
        className={styles['overviewSection']}
      >
        <div
          className={styles['infoContainer']}
        >
          <Typography
            variant='h1'
            className={styles['title']}
            gutterBottom
          >
            Gerimed mobility
          </Typography>
        </div>
        <div
          className={styles['showcaseContainer']}
        >
          <Img
            className={styles['showcase']}
            fluid={testImage}
          />
        </div>

        <div
          className={styles['contentContainer']}
        >
          Content
        </div>
      </Section>
    </Page>
  )
}

export default Example
