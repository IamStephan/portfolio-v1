import React from 'react'

// Organisms
import Navbar from '@organisms/navbar'
import Footer from '@organisms/footer'

// Styles
import styles from './styles.module.scss'

const Container = (props) => {
  const {
    children,
    location
  } = props

  return (
    <>
      <Navbar
        location={location}
      />

      <main
        className={styles['page']}
      >
        { children }

        <Footer />
        
      </main>
    </>
  )
}

export default Container
