import React from 'react'

// Styles
import styles from './styles.module.scss'

const Blockquote = ({ children }) => {
  return (
    <blockquote
      className={styles['blockquote']}
    >
      { children }
    </blockquote>
  )
}

export default Blockquote
