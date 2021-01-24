import React from 'react'

// Gatsby
import Img from 'gatsby-image/withIEPolyfill'

// Material
import { Typography } from '@material-ui/core'

// Organisms
import Section from '@organisms/page_section'

// Styles
import styles from './style.module.scss'

/**
 * 
 * @param {{
 *    items: Array<{
 *      title: string
 *      showcase: *
 *    }>
 * }} props 
 */
const Stack = (props) => {
  const {
    items
  } = props

  return (
    <Section
      className={styles['stackSection']}
    >
      <div
        className={styles['stackContainer']}
      >
        <Typography
          variant='h2'
          gutterBottom
          className={styles['header']}
        >
          Notable Technologies Used
        </Typography>

        <div
          className={styles['stackList']}
        >
          {
            items.map((item, i) => (
              <div
                key={item.title + i}
                className={styles['item']}
              >
                <div
                  className={styles['showcaseContainer']}
                >
                  <Img
                    fluid={item.showcase.childImageSharp.fluid}
                    alt={item.title}
                    className={styles['showcase']}
                  />
                </div>
                <Typography
                  variant='h6'
                  component='h3'
                  className={styles['title']}
                >
                  { item.title }
                </Typography>
              </div>
            ))
          }
        </div>
      </div>
    </Section>
  )
}

export default Stack
