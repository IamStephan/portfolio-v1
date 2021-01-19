import React from 'react'

// Material
import { Typography } from '@material-ui/core'

const UnorderedList = (props) => {
  const {
    children
  } = props

  return (
    <ul>
      <Typography>
        {children}
      </Typography>
    </ul>
  )
}

export default UnorderedList