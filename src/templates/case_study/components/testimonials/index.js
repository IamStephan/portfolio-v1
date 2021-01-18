import React from 'react'

// Material
import { Typography } from '@material-ui/core'

// Organisms
import Section from '@organisms/page_section'

// Styles
import styles from './styles.module.scss'

const Testimonials = () => {
  return (
    <Section
      className={styles['testimonialsSection']}
    >
      <div
        className={styles['testimonialsContainer']}
      >
        <div
          className={styles['headerContainer']}
        >
          <Typography
            variant='h2'
            className={styles['header']}
          >
            Testimonials
          </Typography>
        </div>
      </div>
    </Section>
  )
}

export default Testimonials
