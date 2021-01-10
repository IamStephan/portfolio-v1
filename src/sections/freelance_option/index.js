import React from 'react'

// Material
import { Typography, Button } from '@material-ui/core'

// Gatsby
import { Link } from 'gatsby'

// SVGs
import Idea from '../../assets/svg/abstracts/idea.svg'

// Templates
import Section from '../../templates/page_section'

// Styles
import styles from './styles.module.scss'

const FreelanceOption = () => {
  return (
    <Section
      className={styles['freelanceOptionSection']}
    >
      <div
        className={styles['showcaseContainer']}
      >
        <Idea
          className={styles['showcase']}
        />
      </div>

      <div
        className={styles['actionContainer']}
      >
        <Typography
          variant='h3'
          className={styles['title']}
        >
          Let's talk about it...
        </Typography>

        <Button
          variant='contained'
          color='primary'
          size='large'
          component={Link}
          to='/contact'
        >
          Contact Me
        </Button>
      </div>
    </Section>
  )
}

export default FreelanceOption
