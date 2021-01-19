import React from 'react'

// Material
import { Typography, TypographyProps } from '@material-ui/core'

/**
 * 
 * @param {TypographyProps} props
 */
const Header = (variant) => (props) => {
  const {
    children,
    ...rest
  } = props

  return (
    <Typography
      gutterBottom
      variant={variant}
      {...rest}
    >
      {children}
    </Typography>
  )
}

export default Header
