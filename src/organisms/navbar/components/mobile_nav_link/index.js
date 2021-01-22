import React from 'react'

// Gatsby
import { Link } from 'gatsby'

// Foundation
import Icon from '@foundation/icons_svg'

// Material
import { Typography } from '@material-ui/core'

// Styles
import styles from './styles.module.scss'

/**
 * 
 * @param {{
 *    icon: string
 *    title: string,
 *    active: boolean
 *    to: string,
 *    className: string
 * }} props 
 */
const MobileNavLink = (props) => {
  const {
    icon,
    title,
    active,
    to,
    className
  } = props

  let stylesToAdd = [
    styles['mobileNavLink']
  ]

  if(active) stylesToAdd.push(styles['active'])
  if(className) stylesToAdd.push(className)

  const addedStyles = stylesToAdd.join(' ')

  return (
    <li
      className={addedStyles}
    >
      <Link
        to={to}
      >
        <Typography
          className={styles['content']}
        >
          <Icon
            name={icon}
            className={styles['icon']}
          />
          { title }
        </Typography>
      </Link>
    </li>
  )
}

export default MobileNavLink
