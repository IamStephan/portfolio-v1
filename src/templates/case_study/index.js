import React from 'react'

// Orgainisms
import Page from '@organisms/page'

const CaseStudyTemplate = (props) => {
  const {
    children
  } = props
  
  return (
    <Page>
      { children }
    </Page>
  )
}

export default CaseStudyTemplate
