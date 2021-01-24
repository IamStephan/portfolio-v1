import React from 'react'

// Gatsby
import { Link } from 'gatsby'

// Foundation
import Icon from '@foundation/icons_svg'

// Material
import { Typography, Button } from '@material-ui/core'

// SVGs
import { ReactComponent as PartyBG } from '@svg/abstracts/party.svg'
import { ReactComponent as ManJump } from '@svg/abstracts/man_jump.svg'

// Organisms
import Section from '@organisms/page_section'

// Styles
import styles from './styles.module.scss'

const SuccessForm = () => {
  return (
    <Section
      className={styles['successFormSection']}
    >
      <div
        className={styles['successFormContainer']}
      >
        <div
          className={styles['bgContainer']}
        >
          <PartyBG
            className={styles['bg']}
          />
        </div>

        <div
          className={styles['showcaseContainer']}
        >
          <ManJump
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
            Whoo, message sent!
          </Typography>
          <Typography
            variant='h4'
            component='p'
            gutterBottom
            className={styles['subheader']}
          >
            Thank you, your message has been sent. I will get back to you as soon as possible.
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

export default SuccessForm
