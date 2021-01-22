import React, { useRef, useState } from 'react'

import { encode } from '@utils/encodeFormData'

// Hooks
import { useForm } from '@hooks/useForm'

// Foundation
import Icon from '@foundation/icons_svg'

// Material
import { Typography, Button, TextField, Select } from '@material-ui/core'

// Organisms
import Section from '@organisms/page_section'

// Svgs
import { ReactComponent as Sitting } from '@svg/abstracts/sitting.svg'

// Styles
import styles from './styles.module.scss'

const formFields = {
  topic: 'topic',
  email: 'email',
  message: 'message'
}

const ContactForm = () => {
  const formRef = useRef(null)

  const initialValues = {
    [formFields.topic]: 'general',
    [formFields.email]: '',
    [formFields.message]: ''
  }

  
  const [isLoading, setIsLoading] = useState(false)

  const { handleSubmit, handleChange, resetForm, values } = useForm({
    initialValues,
    onSubmit: _handleInternalSubmit
  })

  function _handleInternalSubmit (values) {
    setIsLoading(true)
    fetch('/', {
      method: 'POST',
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        'form-name': 'contact-form',
        ...values
      })
    }).then(() => {
      resetForm()
    }).catch(() => {

    }).finally(() => {
      setIsLoading(false)
    })
  }


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
                name='volume-vibrate-line'
                className={styles['icon']}
              />
              <Typography
                variant='h4'
                component='h2'
                className={styles['title']}
              >
                Give me a shout...
              </Typography>
            </div>
            
            <form
              className={styles['form']}
              data-netlify='true'
              method='POST'
              name='Contact Form'
              onSubmit={handleSubmit}
              ref={formRef}
            >
              <Select
                className={styles['input']}
                disabled={isLoading}
                name={formFields.topic}
                native
                onChange={handleChange}
                required
                value={values[formFields.topic]}
                variant='outlined'
              >
                <option
                  value='general'
                >
                  General
                </option>

                <option
                  value='job_opportunity'
                >
                  Job Opportunity
                </option>

                <option
                  value='freelancing'
                >
                  Freelancing
                </option>

                <option
                  value='post_related'
                >
                  Article | Case Study
                </option>

                <option
                  value='issue'
                >
                  Issue with something
                </option>

                <option
                  value='other'
                >
                  Other
                </option>
              </Select>

              <TextField
                className={styles['input']}
                color='primary'
                disabled={isLoading}
                label='Email Address'
                name={formFields.email}
                onChange={handleChange}
                required
                type='email'
                value={values[formFields.email]}
                variant='outlined'
              />

              <TextField
                className={styles['input']}
                color='primary'
                disabled={isLoading}
                label='Your message'
                multiline
                name={formFields.message}
                onChange={handleChange}
                required
                rows='4'
                value={values[formFields.message]}
                variant='outlined'
              />

              <Button
                variant='contained'
                color='primary'
                type='submit'
                disabled={isLoading}
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
              component='p'
            >
              Don't hesitate to send me a message or call me.
              Maybe we can start working together or simply just have a stimulating conversation.
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
