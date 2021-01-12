import React from 'react'

// Material
import { Typography, Button } from '@material-ui/core'

// Svgs
import Brain from '../../assets/svg/abstracts/brain.svg'
import Speaker from '../../assets/svg/abstracts/speaker.svg'
import KingVert from '../../assets/svg/abstracts/king_vert.svg'
import KingHor from '../../assets/svg/abstracts/king_hor.svg'

// Organisms
import Section from '../../organisms/page_section'

// Styles
import styles from './styles.module.scss'

const CTA = () => {
  return (
    <Section
      className={styles['ctaSection']}
    >
      <div
        className={styles['actionContainer']}
      >
        <div
          className={styles['showcaseContainer']}
        >
          <Brain
            className={styles['showcase']}
          />
        </div>

        <Typography
          variant='h4'
          className={styles['title']}
        >
          Hire me
        </Typography>

        <Typography
          className={styles['content']}
        >
          I am currently available for hire, either freelancing or full-time.
        </Typography>

        <Button
          variant='contained'
          color='secondary'
          size='large'
        >
          My Resume
        </Button>
      </div>

      <div
        className={styles['dividerContainer']}
      >
        <KingVert
          className={styles['dividerVert']}
        />

        <KingHor
          className={styles['dividerHor']}
        />

        <div
          className={styles['vsContainer']}
        >
          <Typography
            className={styles['vs']}
          >
            <b>V.S</b>
          </Typography>
        </div>
      </div>

      <div
        className={styles['actionContainer']}
      >
        <div
          className={styles['showcaseContainer']}
        >
          <Speaker
            className={styles['showcase']}
          />
        </div>
        <Typography
          variant='h4'
          className={styles['title']}
        >
          Contact Me
        </Typography>

        <Typography
          className={styles['content']}
        >
          Do you have an exciting new idea, or have a problem with your current software solutions.
        </Typography>

        <Button
          variant='contained'
          color='secondary'
          size='large'
        >
          Let's talk
        </Button>
      </div>
    </Section>
  )
}

export default CTA
