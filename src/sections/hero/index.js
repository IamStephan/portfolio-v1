import React from 'react'

// Gatbsy
import { Link } from 'gatsby'

// Temaplates
import Section from '../../templates/page_section'

// Foundation
import Icon from '../../foundation/icons'

// Material
import { IconButton, Button } from '@material-ui/core'

// SVG
import Slogan from '../../assets/svg/text/slogan.svg'
import ExplainMe from '../../assets/svg/text/explain_me.svg'
import ScribblesOne from '../../assets/svg/scribbles/scribbles_1.svg'

// Gatsby
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image/withIEPolyfill'

// Styles
import styles from './styles.module.scss'

const query = graphql`
  {
    hero: file(relativePath: {eq: "hero/face.png"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Hero = () => {
  const { hero: { childImageSharp: { fluid: heroImage } } } = useStaticQuery(query)

  return (
    <Section
      className={styles['heroContainer']}
    >
      <div
        className={styles['hero']}
      >
        <div
          className={styles['explainContainer']}
        >
          <ExplainMe
            className={styles['explain']}
          />
        </div>

        <div
          className={styles['sloganContainer']}
        >
          <Slogan
            className={styles['slogan']}
          />
        </div>

        <div
          className={styles['scribblesContainer']}
        >
          <ScribblesOne
            className={styles['scribble']}
          />
        </div>
        
        {/**
         * This is the point of reference. Used for the rest of the hero to
         * scale appropriately
         */}
        <div
          className={styles['heroImg']}
        >
          <Img
            draggable={false}
            className={styles['img']}
            fluid={heroImage}
            objectFit='contain'
          />
        </div>

        <div
          className={styles['actionsContainer']}
        >

          <div
            className={styles['accountsContainer']}
          >
            <a>
              <IconButton
                className={styles['iconBtn']}
              >
                <Icon
                  mode='fill'
                  name='github'
                />
              </IconButton>
            </a>
            
            <a>
              <IconButton
                className={styles['iconBtn']}
              >
                <Icon
                  mode='fill'
                  name='linkedin-box'
                />
              </IconButton>
            </a>
            
            <a>
              <IconButton
                className={styles['iconBtn']}
              >
                <Icon
                  mode='fill'
                  name='instagram'
                />
              </IconButton>
            </a>
            
          </div>
        </div>
      </div>
    </Section>
  )
}

export default Hero