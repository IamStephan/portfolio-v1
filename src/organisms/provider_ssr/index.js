import React from 'react'

// Material
import { ThemeProvider } from '@material-ui/core'

// Foundation
import { theme } from '../../foundation/theme'


const ProviderSSR = props => {
  return (
    <ThemeProvider
      theme={theme}
    >
      { props.children }
    </ThemeProvider>
  )
}

export default ProviderSSR
