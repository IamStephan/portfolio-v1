import React, { useState } from 'react'

// Gatsby
import { Link } from 'gatsby'

// Framer Motion
import { AnimatePresence } from 'framer-motion'

// Foundation
import Icon from '@foundation/icons'

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

  function _isLinkActive(linksToCheck) {
    /**
     * Only Check for first level paths
     */
    const checkPath = location.pathname.split('/')[1]

    // Home page is active
    if(!checkPath) return false

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
            title='Articles'
            icon='article'
            to='/articles'
            active={_isLinkActive(['articles', 'article'])}
          />

          <NavLink
            title='Case Studies'
            icon='projector-2'
            to='/studies'
            active={_isLinkActive(['studies', 'study'])}
          />

          <NavLink
            title='About'
            icon='account-pin-circle'
            to='/about'
            active={_isLinkActive('about')}

          />

          <NavLink
            title='Contact'
            icon='door-open'
            to='/contact'
            active={_isLinkActive('contact')}

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
              name='menu'
            />
          </IconButton>
        </div>
      </nav>

      <AnimatePresence>
        { isMobileNavOpen && <MobileNav closeMobileNav={_closeMobileNav} /> }
      </AnimatePresence>
    </>
  )
}

export default Navbar
