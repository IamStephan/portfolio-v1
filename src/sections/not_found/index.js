import React from 'react'

// Gatsby
import { Link } from 'gatsby'

// Foundation
import Icon from '@foundation/icons_svg'

// Material
import { Typography, Button } from '@material-ui/core'

// SVGs
import { ReactComponent as Planet } from '@svg/abstracts/planet.svg'
import { ReactComponent as CatMan } from '@svg/abstracts/man_and_cat.svg'

// Organisms
import Section from '@organisms/page_section'

// Styles
import styles from './styles.module.scss'

const NotFound = () => {
  return (
    <Section
      className={styles['notFoundSection']}
    >
      <div
        className={styles['notFoundContainer']}
      >
        <div
          className={styles['bgContainer']}
        >
          <Planet
            className={styles['bg']}
          />
        </div>

        <div
          className={styles['showcaseContainer']}
        >
          <CatMan
            className={styles['showcase']}
          />
        </div>

        <div
          className={styles['headerContainer']}
        >
          <Typography
            variant='h1'
            gutterBottom
            className={styles['header']}
          >
            Oh no, page not found...
          </Typography>
          <Typography
            variant='h4'
            component='p'
            gutterBottom
            className={styles['subheader']}
          >
            The page you are looking for does not exist.
          </Typography>

          <div
            className={styles['actionContainer']}
          >
            <Button
              variant='contained'
              color='primary'
              component={Link}
              to='/'
              endIcon={(
                <Icon
                  name='home-smile-two-line'
                />
              )}
            >
              Go Back to home
            </Button>
          </div>
          
        </div>
      </div>
    </Section>
  )
}

export default NotFound
