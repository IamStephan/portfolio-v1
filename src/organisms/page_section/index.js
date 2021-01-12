import React from 'react'

// Styles
import styles from './styles.module.scss'

/**
 * 
 * @param {{
 *    isClamped: boolean,
 *    isPadded: boolean,
 *    gutter: ('top' | 'bottom' | 'both' | 'none')
 *    className: string,
 *    children: *
 * }} props 
 */
const PageSection = props => {
  const {
    isClamped = true,
    isPadded = true,
    gutter = 'bottom',
    className,
    children
  } = props

  let stylesToAdd = []

  if(isClamped) stylesToAdd.push(styles['isClamped'])
  if(isPadded) stylesToAdd.push(styles['isPadded'])
  if(gutter) {
    stylesToAdd.push(styles['gutter'])
    stylesToAdd.push(styles[gutter])
  }
  if(isPadded) stylesToAdd.push(styles['isPadded'])
  if(className) stylesToAdd.push(className)

  const addedStyles = stylesToAdd.join(' ')

  return (
    <section
      className={`${styles['section']} ${addedStyles}`}
    >
      { children }
    </section>
  )
}

export default PageSection
