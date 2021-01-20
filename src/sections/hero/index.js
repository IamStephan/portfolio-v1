import React from 'react'

// Foundation
import Icon from '@foundation/icons'

// Svgs
import { ReactComponent as Hello } from '@svg/abstracts/coffee_hello.svg'
import { ReactComponent as Mountains } from '@svg/abstracts/mountains.svg'

// Material
import { Typography, Button } from '@material-ui/core'

// Organisms
import Section from '../../organisms/page_section'

// Styles
import styles from './styles.module.scss'

const Hero = () => {
  return (
    <Section
      className={styles['heroContainer']}
    >
      <div
        className={styles['socialLinksContainer']}
      >
        <Button
          className={styles['iconBtn']}
          startIcon={(
            <Icon
              mode='fill'
              name='instagram'
              className={styles['icon']}
            />
          )}
        >
          Instagram
        </Button>

        <Button
          className={styles['iconBtn']}
          startIcon={(
            <Icon
              mode='fill'
              name='github'
              className={styles['icon']}
            />
          )}
        >
          Github
        </Button>

        <Button
          className={styles['iconBtn']}
          startIcon={(
            <Icon
              mode='fill'
              name='linkedin-box'
              className={styles['icon']}
            />
          )}
        >
          LinkedIn
        </Button>
      </div>

      <div
        className={styles['showcaseTwoContainer']}
      >
        <Mountains
          className={styles['showcaseTwo']}
        />
      </div>

      <div
        className={styles['showcaseOneContainer']}
      >
        <Hello
          className={styles['showcaseOne']}
        />
      </div>

      <div
        className={styles['contentContainer']}
      >
        <Typography
          variant='h1'
          className={styles['title']}
        >
          I am Stephan...<br/>
          a <u>Software Developer</u>
        </Typography>

        <Typography
          variant='h4'
          className={styles['subtitle']}
        >
          Creating impactful software solutions that propel businesses to success.
        </Typography>

        <div
          className={styles['actions']}
        >
          <Button
            variant='contained'
            color='primary'
            size='large'
            className={styles['main']}
          >
            My Resume
          </Button>

          <Button
            variant='text'
            color='secondary'
            size='large'
            className={styles['second']}
          >
            Contact Me
          </Button>
        </div>
      </div>

      <div
        className={styles['miscContainer']}
      >

      </div>
    </Section>
  )
}

export default Hero