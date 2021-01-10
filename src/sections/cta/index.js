import React from 'react'

// Templates
import Section from '../../templates/page_section'

// Foundation
import Icon from '../../foundation/icons'

// Material
import { Button } from '@material-ui/core'

// Gatbsy
import { useStaticQuery, graphql, Link } from 'gatsby'
import Img from 'gatsby-image/withIEPolyfill'

// Svg
import HeyThere from '../../assets/svg/text/hey_there.svg'
import LetsGo from '../../assets/svg/text/letsgo.svg'

// Styles
import styles from './styles.module.scss'

const query = graphql`
  {
    hand: file(relativePath: {eq: "cta/hand.png"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const CTA = () => {
  const { hand: { childImageSharp: { fluid: handImg } } } = useStaticQuery(query)

  return (
    <Section
      className={styles['ctaSection']}
    >
      <div
        className={styles['showcaseContainer']}
      >
        <LetsGo
          className={styles['letsgo']}
        />

        <Img
          fluid={handImg}
          draggable={false}
          objectFit='contain'
          className={styles['handImg']}
          style={{
            position: 'absolute'
          }}
        />
      </div>

      <div
        className={styles['actionContainer']}
      >
        <div
          className={styles['content']}
        >
          <HeyThere
            className={styles['heyThere']}
          />

          <div
            className={styles['action']}
          >
            <Button
              variant='contained'
              color='primary'
              size='large'
              component={Link}
              to='/contact'
              endIcon={<Icon name='door-open' className={styles['icon']} />}
            >
              Contact Me
            </Button>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default CTA
