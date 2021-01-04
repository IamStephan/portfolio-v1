import React from 'react'

import 'remixicon/fonts/remixicon.css'

// Styles
import styles from './styles.module.scss'

/**
 * 
 * @param {{
 *    name: string,
 *    mode: ('fill' | 'line')
 *    className: string
 * }} props 
 */
const Icon = props => {
  const {
    name = '',
    mode = 'line',
    className
  } = props

  let stylesToAdd = []

  if(className) stylesToAdd.push(className)

  const addedStyles = stylesToAdd.join(' ')

  return (
    <i
      className={
        `${styles['icon']} ri-${name}-${mode} ${addedStyles}`
      }
    />
  )
}

export default Icon
