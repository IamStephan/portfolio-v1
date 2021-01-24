import React from 'react'

// Gatsby
import { Link } from 'gatsby'

// Foundation
import Icon from '@foundation/icons_svg'

// Material
import { Typography, Button, IconButton } from '@material-ui/core'

// SVGs
import { ReactComponent as Comet } from '@svg/abstracts/comet.svg'
import { ReactComponent as SuitMan } from '@svg/abstracts/suit_man.svg'

// Organisms
import Section from '@organisms/page_section'

// Styles
import styles from './styles.module.scss'

const FailedForm = () => {
  return (
    <Section
      className={styles['failedFormSection']}
    >
      <div
        className={styles['failedFormContainer']}
      >
        <div
          className={styles['bgContainer']}
        >
          <Comet
            className={styles['bg']}
          />
        </div>

        <div
          className={styles['showcaseContainer']}
        >
          <SuitMan
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
            Oops, your message failed.
          </Typography>
          <Typography
            variant='h4'
            component='p'
            gutterBottom
            className={styles['subheader']}
          >
            Your message could not be sent. You can try contacting me directly.
          </Typography>

          <address
            className={styles['infoContainer']}
          >
            <div
              className={styles['info']}
            >
              <IconButton
                className={styles['infoAction']}
                rel='noopener'
                component='a'
                target='_blank'
                href='https://goo.gl/maps/ZEHYAH9SNWNyXp6W8'
              >
                <Icon
                  name='map-pin-user-line'
                  className={styles['icon']}
                />
              </IconButton>

              <Typography
                className={styles['infoDetails']}
                gutterBottom
              >
                <b>Langebaan, Western Cape</b>
              </Typography>

              <Typography
                className={styles['infoDetails']}
              >
                <b>South Africa</b>
              </Typography>
            </div>

            <div
              className={styles['info']}
            >
              <IconButton
                className={styles['infoAction']}
                component='a'
                href='mailto:stephanburger54@gmail.com'
              >
                <Icon
                  name='mail-send-line'
                  className={styles['icon']}
                />
              </IconButton>

              <Typography
                className={styles['infoDetails']}
              >
                <b>stephanburger54@gmail.com</b>
              </Typography>
            </div>

            <div
              className={styles['info']}
            >
              <IconButton
                className={styles['infoAction']}
                component='a'
                href='tel:+27629098820'
              >
                <Icon
                  name='phone-line'
                  className={styles['icon']}
                />
              </IconButton>

              <Typography
                className={styles['infoDetails']}
              >
                <b>(+27) 62 909 8820</b>
              </Typography>
            </div>
          </address>

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

export default FailedForm
