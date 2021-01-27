import React from 'react'

// Material
import { Typography } from '@material-ui/core'

// Styles
import styles from './styles.module.scss'

/**
 * 
 * @param {import('@material-ui/core').TypographyProps} props 
 */
const Paragraph = (props) => {
  const {
    children,
    ...rest
  } = props

  return (
    <Typography
      paragraph
      className={styles['paragraph']}
      {...rest}
    >
      { children }
    </Typography>
  )
}

export default Paragraph
