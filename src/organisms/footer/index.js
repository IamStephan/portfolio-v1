import React from 'react'

// Foundation
import Icon from '@foundation/icons_svg'

// Gatsby
import { Link } from 'gatsby'

// Material
import { Typography, IconButton, Button } from '@material-ui/core'

// Styles
import styles from './styles.module.scss'

const Footer = () => {
  return (
    <footer
      className={styles['footer']}
    >
      <section
        className={styles['linksSection']}
      >
        <Button
          className={styles['link']}
          component={Link}
          to='/articles'
        >
          Articles
        </Button>

        <Button
          className={styles['link']}
          component={Link}
          to='/studies'
        >
          Case Studies
        </Button>

        <Button
          className={styles['link']}
          component={Link}
          to='/about'
        >
          About
        </Button>

        <Button
          className={styles['link']}
          component={Link}
          to='/contact'
        >
          Contact
        </Button>
      </section>
      
      <section
        className={styles['accountsSection']}
      >
        <IconButton
          rel='noopener'
          component='a'
          target='_blank'
          href='https://github.com/IamStephan'
        >
          <Icon
            name='github-fill'
          />
        </IconButton>

        <IconButton
          rel='noopener'
          component='a'
          target='_blank'
          href='https://www.linkedin.com/in/iamstephann'
        >
          <Icon
            name='linkedinbox-fill'
          />
        </IconButton>

        <IconButton
          rel='noopener'
          component='a'
          target='_blank'
          href='https://www.instagram.com/i_am_stephann/'
        >
          <Icon
            name='instagram-fill'
          />
        </IconButton>
      </section>

      <section
        className={styles['copyrightSection']}
      >
        <Typography
          className={styles['copyright']}
        >
          &#169; 2021 IamStephan, All rights reserved.
        </Typography>
      </section>
    </footer>
  )
}

export default Footer
