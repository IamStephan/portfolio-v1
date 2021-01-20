import React from 'react'

// Gatsby
import { Link } from 'gatsby'

// Material
import { IconButton } from '@material-ui/core'

// Foundation
import Icon from '@foundation/icons'

// Styles
import styles from './styles.module.scss'

/**
 * 
 * @param {{
 *    icon: string
 *    title: string,
 *    active: boolean
 *    to: string
 * }} props 
 */
const NavLink = (props) => {
  const {
    icon,
    to,
    active,
    ...rest
  } = props

  return (
    <Link
      to={to}
      className={styles['navLink']}
    >
      <IconButton
        className={`${styles['menuButton']} ${!!active && styles['active']}`}
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
