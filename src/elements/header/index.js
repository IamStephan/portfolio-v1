import React from 'react'

// Material
import { Typography } from '@material-ui/core'

/**
 * 
 * @param {import('@material-ui/core').TypographyProps} props
 */
const Header = (variant, component) => (props) => {
  const {
    children,
    ...rest
  } = props

  let propsToAdd = rest

  if(component) propsToAdd.component = component

  return (
    <Typography
      gutterBottom
      variant={variant}
      {...propsToAdd}
    >
      {children}
    </Typography>
  )
}

export default Header
