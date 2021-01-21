import React from 'react'

// Organisms
import Page from '@organisms/page'

// Sections
import ContactForm from '@sections/contact_form'
import ContactInfo from '@sections/contact_info'

const Contact = () => {
  return (
    <Page
      title='Contact Me'
      description={`Give me a shout, and let's work on something great together`}
    >
      <ContactForm />
      <ContactInfo />
    </Page>
  )
}

export default Contact
