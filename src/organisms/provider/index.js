import React from 'react'

// Material
import { ThemeProvider } from '@material-ui/core'

// Foundation
import { theme } from '../../foundation/theme'
import '../../foundation/reset.scss'

const Provider = props => {
  const {
    children
  } = props

  return (
    <ThemeProvider
      theme={theme}
    >
      { children }
    </ThemeProvider>
  )
}

export default Provider
