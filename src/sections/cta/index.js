import React from 'react'

// Gatsby
import { Link } from 'gatsby'

// Material
import { Typography, Button } from '@material-ui/core'

// Svgs
import { ReactComponent as Brain } from '@svg/abstracts/brain.svg'
import { ReactComponent as Speaker } from '@svg/abstracts/speaker.svg'
import { ReactComponent as KingVert } from '@svg/abstracts/king_vert.svg'
import { ReactComponent as KingHor } from '@svg/abstracts/king_hor.svg'

// Organisms
import Section from '@organisms/page_section'

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
          component='h2'
          className={styles['title']}
          gutterBottom
        >
          Hire me
        </Typography>

        <Typography
          className={styles['content']}
          variant='h6'
          gutterBottom
        >
          Have a look at my resume and lets see if we're going to be a good fit for each other.
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
          component='h2'
          gutterBottom
          className={styles['title']}
        >
          Contact Me
        </Typography>

        <Typography
          className={styles['content']}
          variant='h6'
          gutterBottom
        >
          I enjoy hearing from people so let's get talking and start something new.
        </Typography>

        <Button
          variant='contained'
          color='secondary'
          size='large'
          component={Link}
          to='/contact'
        >
          Let's talk
        </Button>
      </div>
    </Section>
  )
}

export default CTA
