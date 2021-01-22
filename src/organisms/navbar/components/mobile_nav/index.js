import React from 'react'

// Gatsby
import { Link } from 'gatsby'

// SVGs
import { ReactComponent as MenuText } from '@svg/text/menu.svg'

// Material
import { Typography } from '@material-ui/core'

// Foundation
import Icon from '@foundation/icons_svg'

// Components
import MobileNavLink from '../mobile_nav_link'

// Styles
import styles from './styles.module.scss'

/**
 * 
 * @param {{
 *    isOpen: boolean,
 *    closeMobileNav: Function,
 *    isLinkActive: Function
 * }} props 
 */
const MobileNav = (props) => {
  const {
    isOpen,
    closeMobileNav,
    isLinkActive
  } = props

  return (
    <nav
      className={`${styles['mobileNav']} ${isOpen ? styles['open'] : ''}`}
    >
      <ul
        className={styles['sliderContainer']}
      >
        <MobileNavLink
          className={styles['slide']}
          to='/'
          title='Home'
          icon='home-smile-two-line'
          active={isLinkActive('__home__')}
        />

        <MobileNavLink
          className={styles['slide']}
          to='/articles'
          title='Articles'
          icon='article-line'
          active={isLinkActive(['articles', 'article'])}
        />

        <MobileNavLink
          className={styles['slide']}
          to='/studies'
          title='Case Studies'
          icon='projector-2-line'
          active={isLinkActive(['studies', 'study'])}
        />

        <MobileNavLink
          className={styles['slide']}
          to='/about'
          title='About Me'
          icon='file-user-line'
          active={isLinkActive('about')}
        />

        <MobileNavLink
          className={styles['slide']}
          to='/contact'
          title='Contact Me'
          icon='door-open-line'
          active={isLinkActive('contact')}
        />
      </ul>

      <div
        className={styles['textOverlay']}
      >
        <MenuText
          className={styles['text']}
        />
      </div>

      <div
        className={styles['overlay']}
        onClick={closeMobileNav}
      />
    </nav>
  )
}

export default MobileNav
