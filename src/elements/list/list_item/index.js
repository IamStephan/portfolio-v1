import React from 'react'

// Material
import { Typography } from '@material-ui/core'

// Styles
import styles from './styles.module.scss'

const ListItem = ({ children }) =>{
  return (
    <li
      className={styles['text']}
    >
      <Typography
        
      >
        { children }
      </Typography>
    </li>
  )
}

export default ListItem
