import React from 'react'

// Gatsby
import { Link } from 'gatsby'

// Material
import { IconButton } from '@material-ui/core'

// Foundation
import Icon from '@foundation/icons_svg'

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
    title,
    active,
    ...rest
  } = props

  return (
    <Link
      to={to}
      className={styles['navLink']}
      data-tooltip={title}
    >
      <IconButton
        className={`${styles['menuButton']} ${!!active && styles['active']}`}
        {...rest}
      >
        <Icon
          className={styles['icon']}
          name={icon}
        />
      </IconButton>
    </Link>
  )
}

export default NavLink
