import React from 'react'

// Foundation
import SEO from '@foundation/seo'

/**
 * 
 * @param {{
 *    title: string
 *    description: string
 *    children: *
 * }} props 
 */
const PageTemplate = props => {
  const {
    title,
    description,
    children
  } = props

  return (
    <>
      <SEO
        title={title}
        description={description}
      />
      
      { children }
    </>
  )
}

export default PageTemplate
