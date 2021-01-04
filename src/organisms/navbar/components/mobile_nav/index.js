import React from 'react'

// Framer Motion
import { motion } from 'framer-motion'

// Material
import { IconButton } from '@material-ui/core'

// Foundation
import Icon from '../../../../foundation/icons'

// Styles
import styles from './styles.module.scss'

const MobileNav = (props) => {
  const {
    closeMobileNav
  } = props

  return (
    <nav
      className={styles['mobileNav']}
    >
      <motion.div
        className={styles['topContainer']}
        initial={{ y: '-100%' }}
        animate={{ y: 0 }}
        exit={{ y: '-100%' }}
        transition={{
          bounce: 0
        }}
      >
        <div>
          
        </div>
        <IconButton
          onClick={closeMobileNav}
        >
          <Icon
            name='close'
          />
        </IconButton>
      </motion.div>

      <motion.div
        className={styles['overlay']}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          bounce: 0
        }}
        onClick={closeMobileNav}
      />
    </nav>
  )
}

export default MobileNav
