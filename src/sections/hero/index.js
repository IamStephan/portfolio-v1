import React from 'react'

// Gatsby
import { Link } from 'gatsby'

// Foundation
import Icon from '@foundation/icons_svg'

// Svgs
import { ReactComponent as Hello } from '@svg/abstracts/coffee_hello.svg'
import { ReactComponent as Mountains } from '@svg/abstracts/mountains.svg'

// Material
import { Typography, Button } from '@material-ui/core'

// Organisms
import Section from '../../organisms/page_section'

// Styles
import styles from './styles.module.scss'

/**
 * NOTE:
 * =====
 * Not going to mess with font of the hero,
 * I'm leaving it as is. It is the hero after all
 * and the default theme makes it looks worse
 * 
 * I have fine control over the hero text here and
 * it works better this way
 */
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
          component='a'
          target='_blank'
          href='https://github.com/IamStephan'
          startIcon={(
            <Icon
              name='github-fill'
              className={styles['icon']}
            />
          )}
        >
          Github
        </Button>

        <Button
          className={styles['iconBtn']}
          component='a'
          target='_blank'
          href='https://www.linkedin.com/in/iamstephann'
          startIcon={(
            <Icon
              name='linkedinbox-fill'
              className={styles['icon']}
            />
          )}
        >
          LinkedIn
        </Button>

        <Button
          className={styles['iconBtn']}
          component='a'
          target='_blank'
          href='https://www.instagram.com/i_am_stephann/'
          startIcon={(
            <Icon
              name='instagram-fill'
              className={styles['icon']}
            />
          )}
        >
          Instagram
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
          component='h1'
          className={styles['title']}
        >
          I am Stephan...<br/>
          a <u>Software Developer</u>
        </Typography>

        <Typography
          variant='h4'
          component='p'
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
            component={Link}
            to='/contact'
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