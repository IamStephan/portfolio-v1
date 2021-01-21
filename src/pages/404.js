import React from 'react'

// Organisms
import Page from '@organisms/page'

// Sections
import NotFoundSection from '@sections/not_found'

const NotFound = () => {
  return (
    <Page
      title='Page not found'
      description='Looks like we cannot find the page you are looking for.'
    >
      <NotFoundSection />
    </Page>
  )
}

export default NotFound
