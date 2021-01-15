import React from 'react'

// Gatsby
import { Link } from 'gatsby'

// Material
import { IconButton } from '@material-ui/core'

// Router
import { useMatch } from '@reach/router'

// Foundation
import Icon from '@foundation/icons'

// Styles
import styles from './styles.module.scss'

/**
 * 
 * @param {{
 *    icon: string
 *    title: string,
 *    to: string
 * }} props 
 */
const NavLink = (props) => {
  const {
    icon,
    to,
    ...rest
  } = props

  return (
    <Link
      to={to}
    >
      <IconButton
        className={styles['menuButton']}
        {...rest}
      >
        <Icon
          className={styles['icon']}
          name={icon}
          size='massive'
        />
      </IconButton>
    </Link>
  )
}

export default NavLink
