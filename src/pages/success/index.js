import React from 'react'

// Organisms
import Page from '@organisms/page'

// Sections
import SuccessForm from '@sections/success_form'

const Success = () => {
  return (
    <Page
      title='Successfully sent message'
      description='Your message has been successfully sent, thank you!'
    >
      <SuccessForm />
    </Page>
  )
}

export default Success