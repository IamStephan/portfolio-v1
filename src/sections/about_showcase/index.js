import React from 'react'

// Material
import { Typography } from '@material-ui/core'

// Gatsby
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image/withIEPolyfill'

// Svgs
import Standards from '../../assets/svg/text/standards.svg'

// Templates
import Section from '../../templates/page_section'

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
        className={styles['sloganContainer']}
      >
        <Standards
          className={styles['slogan']}
        />
      </div>

      <div
        className={styles['showcaseContainer']}
      >
        <Img
          fluid={helloImage}
          objectFit='contain'
          className={styles['img']}
        />
      </div>
    </Section>
  )
}

export default AboutShowcaseSection
