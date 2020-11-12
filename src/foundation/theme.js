// Material
import { createMuiTheme } from '@material-ui/core'

const headerStyles = {
  fontFamily: [
    '"Ubuntu"',
    'Arial',
    '"Helvetica Neue"'
  ].join(', '),
  fontWeight: 'bold'
}

const bodyStyles = {
  fontFamily: [
    '"Open Sans"',
    'Arial',
    '"Helvetica Neue"'
  ].join(', ')
}

// Global Theme
const theme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      dark: 'hsl(6, 63%, 37%)',
      main: 'hsl(6, 63%, 46%)',
      light: 'hsl(6, 63%, 53%)'
    },
    secondary: {
      dark: 'hsl(0, 0%, 10%)',
      main: 'hsl(0, 0%, 19%)',
      light: 'hsl(0, 0%, 35%)'
    },
    success: {
      dark: 'hsl(145, 63%, 35%)',
      main: 'hsl(145, 63%, 42%)',
      light: 'hsl(145, 63%, 54%)'
    },
    info: {
      dark: 'hsl(168, 76%, 26%)',
      main: 'hsl(168, 76%, 36%)',
      light: 'hsl(169, 76%, 42%)'
    },
    warning: {
      dark: 'hsl(37, 90%, 40%)',
      main: 'hsl(37, 90%, 51%)',
      light: 'hsl(37, 90%, 60%)'
    },
    error: {
      dark: 'hsl(6, 63%, 37%)',
      main: 'hsl(6, 63%, 46%)',
      light: 'hsl(6, 63%, 53%)'
    }
  },
  typography: {
    fontFamily: [
      '"Ubuntu"',
      '"Open Sans"',
      'Arial',
      '"Helvetica Neue"'
    ].join(', '),

    /**
     * Headers
     */
    h1: headerStyles,
    h2: headerStyles,
    h3: headerStyles,
    h4: headerStyles,
    h5: headerStyles,
    h6: headerStyles,


    /**
     * Body
     */
    subtitle1: bodyStyles,
    subtitle2: bodyStyles,
    body1: bodyStyles,
    body2: bodyStyles,
    caption: bodyStyles,
    overline: bodyStyles,

    /**
     * Button 
     */
    button: {
      textTransform: 'capitalize',
      fontWeight: 'bold',
      ...bodyStyles,
    }
  },
  props: {
    MuiButton: {
      disableElevation: true,
      disableRipple: true
    }
  }
})

export {
  theme
}