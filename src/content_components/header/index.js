import React from 'react'

// Material
import { Typography, TypographyProps } from '@material-ui/core'


/**
 * @typedef {object} HeaderProps
 * @property {'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'} level
 * @property {number} age
 */
/**
 * 
 * @param {TypographyProps & HeaderProps} props 
 */
const Header = (props) => {
  const {
    children,
    level = 'h1',
    ...rest
  } = props

  return (
    <Typography
      gutterBottom
      variant={level}
      {...rest}
    >
      { children }
    </Typography>
  )
}

export default Header
