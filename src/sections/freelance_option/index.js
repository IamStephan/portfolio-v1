import React from 'react'

// Material
import { Typography, Button } from '@material-ui/core'

// Gatsby
import { Link } from 'gatsby'

// SVGs
import Idea from '../../assets/svg/abstracts/idea.svg'
import LetsTalk from '../../assets/svg/abstracts/lets_talk.svg'

// Organisms
import Section from '../../organisms/page_section'

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
        <div
          className={styles['letsTalkContainer']}
        >
          <LetsTalk
            className={styles['letsTalk']}
          />
        </div>
        
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
