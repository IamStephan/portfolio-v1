// Material
import { createMuiTheme } from '@material-ui/core'

const headerStyles = {
  fontFamily: [
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
      dark: '#9e2f2f',
      main: '#e24444',
      light: '#e76969'
    },
    secondary: {
      dark: '#354a4c',
      main: '#354a4c',
      light: '#70878a'
    },
    success: {
      dark: '#44884e',
      main: '#62C370',
      light: '#81cf8c'
    },
    info: {
      dark: '#354a4c',
      main: '#4D6A6D',
      light: '#70878a'
    },
    warning: {
      dark: '#9e2f2f',
      main: '#e24444',
      light: '#e76969'
    },
    error: {
      dark: '#9e2f2f',
      main: '#e24444',
      light: '#e76969'
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