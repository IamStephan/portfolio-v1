import React from 'react'

// Gatsby
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image/withIEPolyfill'

// Material
import { Typography, Button } from '@material-ui/core'

// Organisms
import Section from '../../organisms/page_section'

// Styles
import styles from './styles.module.scss'

// Static Query
const query = graphql`
  {
    hello: file(relativePath: {eq: "about/hello.png"}) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const AboutShowcaseSection = () => {
  const { hello: { childImageSharp: { fluid: helloImage } } } = useStaticQuery(query)

  return (
    <Section
      className={styles['aboutShowcaseSection']}
    >
      <div
        className={styles['showcaseContainer']}
      >
        <Img
          fluid={helloImage}
          objectFit='contain'
          className={styles['showcase']}
        />
      </div>

      <div
        className={styles['bioContainer']}
      >
        <Typography
          variant='h2'
          className={styles['title']}
        >
          My name is Stephan and I'm a software developer
        </Typography>
        <br />
        <Typography
          className={styles['content']}
        >
          Creating impactful software solutions drives me to become a better developer. 
        </Typography>

        <br />

        <div
          className={styles['actions']}
        >
          <Button
            variant='contained'
            color='primary'
            size='large'
          >
            My Resume
          </Button>
        </div>
      </div>
    </Section>
  )
}

export default AboutShowcaseSection
