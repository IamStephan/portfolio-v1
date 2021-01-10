import React from 'react'

// Material
import { TextField, Button } from '@material-ui/core'

// SVGs
import LetsTalk from '../../assets/svg/text/lets_talk.svg'

// Styles
import styles from './styles.module.scss'

const ContactForm = () => {
  return (
    <form
      className={styles['contactForm']}
    >
      <LetsTalk
        className={styles['letstalk']}
      />
      <TextField
        className={styles['item']}
        variant='outlined'
        label='Full Name'
        fullWidth
      />

      <TextField
        className={styles['item']}
        variant='outlined'
        label='Email'
        fullWidth
      />

      <TextField
        className={styles['item']}
        variant='outlined'
        label='Hi There'
        fullWidth
        multiline
        rows={3}
      />

      <div
        className={styles['action']}
      >
        <Button
          variant='contained'
          color='primary'
          disableElevation
        >
          Submit
        </Button>
      </div>
    </form>
  )
}

export default ContactForm
