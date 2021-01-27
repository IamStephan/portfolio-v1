import React from 'react'

// Styles
import styles from './styles.module.scss'

/**
 * 
 * @param {{
 *    children
 * }} props 
 */
const ContentSection = (props) => {
  const {
    children
  } = props

  return (
    <section
      className={styles['contentSection']}
    >
      { children }
    </section>
  )
}

export default ContentSection
