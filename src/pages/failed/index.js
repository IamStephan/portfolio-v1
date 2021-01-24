import React from 'react'

// Organisms
import Page from '@organisms/page'

// Sections
import FailedForm from '@sections/failed_form'

const Failed = () => {
  return (
    <Page
      title='Message Failed'
      description='Oops, your message could not be sent.'
    >
      <FailedForm />
    </Page>
  )
}

export default Failed