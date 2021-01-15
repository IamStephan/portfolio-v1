import React from 'react'

// Styles
import styles from './styles.module.scss'

/**
 * 
 * @param {{
 *    className: string
 *    children: *
 * }} props 
 */
const ContentSection = (props) => {
  const {
    className,
    children
  } = props

  let stylesToAdd = [
    styles['contentSection']
  ]

  if(className) stylesToAdd.push(className)

  const addedStyles = stylesToAdd.join(' ')

  return (
    <div
      className={addedStyles}
    >
      { children }
    </div>
  )
}

export default ContentSection
