import React, { useState, useEffect } from 'react'

// Gatsby
import { Link } from 'gatsby'

// Foundation
import Icon from '@foundation/icons_svg'

// Material
import { IconButton } from '@material-ui/core'

// Logo
import { ReactComponent as Logo } from '@svg/logo/icon.svg'

// Components
import NavLink from './components/nav_link'
import MobileNav from './components/mobile_nav'

// Styles
import styles from './styles.module.scss'

/**
 * 
 * @param {{
 *    location: Location
 * }} props 
 */
const Navbar = props => {
  const {
    location
  } = props

  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)

  const path = location.pathname

  useEffect(() => {
    setIsMobileNavOpen(false)
  }, [path])

  function _isLinkActive(linksToCheck) {
    /**
     * Only Check for first level paths
     */
    const checkPath = location.pathname.split('/')[1]

    // Home page is active
    if(!checkPath) {
      if(typeof linksToCheck === 'string' && linksToCheck === '__home__') return true
      return false
    }

    if(typeof linksToCheck === 'string') {
      return checkPath === linksToCheck
    }

    if(Array.isArray(linksToCheck)) {
      return linksToCheck.includes(checkPath)
    }

    return false
  }

  function _toggleMobileNav() {
    setIsMobileNavOpen(prev => !prev)
  }

  function _closeMobileNav() {
    setIsMobileNavOpen(false)
  }

  return (
    <>
      <nav
        className={styles['navbarDesktop']}
      >
        <section
          className={styles['logoSection']}
        >
          <Link
            to='/'
          >
            <Logo
              className={styles['logo']}
            />
          </Link>
        </section>

        <section
          className={styles['linksSection']}
        >
          <NavLink
            title='Case Studies'
            icon='projector-2-line'
            to='/studies'
            active={_isLinkActive(['studies', 'study'])}
          />

          <NavLink
            title='Articles'
            icon='article-line'
            to='/articles'
            active={_isLinkActive(['articles', 'article'])}
          />

          <NavLink
            title='About'
            icon='file-user-line'
            to='/about'
            active={_isLinkActive('about')}

          />

          <NavLink
            title='Contact'
            icon='door-open-line'
            to='/contact'
            active={_isLinkActive(['contact', 'success', 'failed'])}
          />
        </section>
      </nav>

      <nav
        className={styles['navbarMobile']}
      >
        <div
          className={styles['logoSection']}
        >
          <Link
            to='/'
          >
            <Logo
              className={styles['logo']}
            />
          </Link>
        </div>

        <div
          className={styles['menuSection']}
        >
          <IconButton
            onClick={_toggleMobileNav}
          >
            <Icon
              name='menu-line'
            />
          </IconButton>
        </div>
      </nav>

      <MobileNav
        isOpen={isMobileNavOpen}
        closeMobileNav={_closeMobileNav}
        isLinkActive={_isLinkActive}
      />
    </>
  )
}

export default Navbar
