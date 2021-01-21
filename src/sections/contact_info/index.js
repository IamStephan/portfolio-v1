import React from 'react'

// Foundation
import Icon from '@foundation/icons_svg'

// Material
import { Typography, IconButton } from '@material-ui/core'

// Organisms
import Section from '@organisms/page_section'

// Styles
import styles from './styles.module.scss'

const ContactInformation = () => {
  return (
    <Section
      className={styles['contactInfoSection']}
    >
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
    </Section>
  )
}

export default ContactInformation
