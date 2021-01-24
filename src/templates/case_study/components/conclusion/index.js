import React from 'react'

// Material
import { Typography } from '@material-ui/core'

// Organisms
import Section from '@organisms/page_section'

// Styles
import styles from './style.module.scss'

/**
 * 
 * @param {{
 *    content: [string]
 * }} props 
 */
const Conclusion = (props) => {
  const {
    content
  } = props

  return (
    <Section
      className={styles['conclusionSection']}
    >
      <div
        className={styles['conclusionContainer']}
      >
        <Typography
          variant='h2'
          gutterBottom
          className={styles['header']}
        >
          Concluding Notes
        </Typography>

        <div
          className={styles['contentContainer']}
        >
          {
            content?.map((paragraph, i) => (
              <Typography
                key={i}
                paragraph
                className={styles['content']}
              >
                { paragraph }
              </Typography>
            ))
          }
        </div>
      </div>
    </Section>
  )
}

export default Conclusion
