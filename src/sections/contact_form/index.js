import React from 'react'

// Foundation
import Icon from '@foundation/icons'

// Material
import { Typography, Button, TextField, Select } from '@material-ui/core'

// Organisms
import Section from '@organisms/page_section'

// Svgs
import Sitting from '@svg/abstracts/sitting.svg'

// Styles
import styles from './styles.module.scss'

const ContactForm = () => {
  return (
    <Section
      className={styles['contactFormSection']}
    >
      <div
        className={styles['contactContainer']}
      >
         <div
            className={styles['formContainer']}
          >
            <div
              className={styles['contentContainer']}
            >
              <Icon
                name='volume-vibrate'
                className={styles['icon']}
              />
              <Typography
                variant='h4'
                className={styles['title']}
              >
                Give me a shout...
              </Typography>
            </div>
            

            <form
              className={styles['form']}
            >
              <Select
                native
                variant='outlined'
                className={styles['input']}
              >
                <option>
                  Freelancing
                </option>

                <option>
                  Job Opportunity
                </option>

                <option>
                  Article | Case Study
                </option>

                <option>
                  Issue with something
                </option>

                <option>
                  Other
                </option>
              </Select>

              <TextField
                variant='outlined'
                color='primary'
                label='Email Address'
                className={styles['input']}
              />

              <TextField
                variant='outlined'
                color='primary'
                label='Your message'
                className={styles['input']}
                multiline
                rows='4'
              />

              <Button
                variant='contained'
                color='primary'
              >
                Submit
              </Button>
            </form>

            
          </div>

          <div
            className={styles['showcaseContainer']}
          >
            <Typography
              variant='h1'
              className={styles['header']}
            >
              Let's work together on something <u>great!</u>
            </Typography>

            <Typography
              className={styles['subheader']}
              variant='h6'
            >
              Don't hesitate to send me a message or call me,
              we can build on your proposition together and find the best possible outcome.
            </Typography>

            <div
              className={styles['actionContainer']}
            >
              <Button
                variant='outlined'
                color='secondary'
                size='large'
                className={styles['action']}
              >
                My Resume
              </Button>
            </div>

            <div
              className={styles['showcase']}
            >
              <Sitting />
            </div>
          </div>
      </div>
    </Section>
  )
}

export default ContactForm
