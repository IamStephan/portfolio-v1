import React from 'react'

// Material
import { Typography } from '@material-ui/core'

const OrderedList = (props) => {
  const {
    children
  } = props

  return (
    <ol>
      <Typography>
        {children}
      </Typography>
    </ol>
  )
}

export default OrderedList
