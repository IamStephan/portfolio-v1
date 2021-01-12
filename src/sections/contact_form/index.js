import React from 'react'

// SVGs
import LetsGetInTouch from '../../assets/svg/abstracts/lets_get_in_touch.svg'

// Organisms
import Section from '../../organisms/page_section'

// Styles
import styles from './styles.module.scss'

const ContactForm = () => {
  return (
    <Section
      className={styles['contactSection']}
    >
      <div
        className={styles['showcaseContainer']}
      >
        <LetsGetInTouch
          className={styles['showcase']}
        />
      </div>

      <div
        className={styles['contactFormContainer']}
      >
        <div
          className={styles['details']}
        >
          Details
        </div>

        <div
          className={styles['form']}
        >
          form
        </div>
      </div>
    </Section>
  )
}

export default ContactForm
