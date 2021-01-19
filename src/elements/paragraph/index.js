import React from 'react'

// Material
import { Typography } from '@material-ui/core'

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
      {...rest}
    >
      { children }
    </Typography>
  )
}

export default Paragraph
