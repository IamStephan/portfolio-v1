import React from 'react'

// Material
import { Typography } from '@material-ui/core'

/**
 * 
 * @param {import('@material-ui/core').TypographyProps} props
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
