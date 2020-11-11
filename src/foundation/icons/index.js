import React from 'react'

import 'remixicon/fonts/remixicon.css'

// Styles
import styles from './styles.module.scss'


/**
 * 
 * @param {{
 *    name: string,
 *    mode: ('fill' | 'line')
 *    size: ('tiny' | 'large' | 'big' | 'huge' | 'massive' | 'inherit')
 * }} props 
 */
const Icon = props => {
  const {
    name = '',
    mode = 'fill',
    size = 'normal'
  } = props

  return (
    <i
      className={
        `${styles['icon']} ri-${name}-${mode} ri-fw ${styles['size_' + size]}`
      }
    />
  )
}

export default Icon
