import React from 'react'

// Foundation
import Icon from '@foundation/icons'

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
        <a
          target='_blank'
        >
          <IconButton>
            <Icon
              name='github'
              mode='fill'
            />
          </IconButton>
        </a>

        <a>
          <IconButton>
            <Icon
              name='linkedin-box'
              mode='fill'
            />
          </IconButton>
        </a>
        
        <a>
          <IconButton>
            <Icon
              name='instagram'
              mode='fill'
            />
          </IconButton>
        </a>
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
