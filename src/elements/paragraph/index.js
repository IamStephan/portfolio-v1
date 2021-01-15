import React from 'react'

// Material
import { Typography, TypographyProps } from '@material-ui/core'

/**
 * 
 * @param {TypographyProps} props 
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
