import React from 'react'

// Styles
import styles from './styles.module.scss'

/**
 * 
 * @param {*} props 
 */
const Card = (props) => {
  const {
    children,
    img,
    content,
    tags
  } = props

  return (
    <div
      className={styles['card']}
    >
      {children}
    </div>
  )
}

export default Card
