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
      <div
        className={styles['infoContainer']}
      >
        <div
          className={styles['info']}
        >
          <IconButton
            className={styles['infoAction']}
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
      </div>
    </Section>
  )
}

export default ContactInformation
