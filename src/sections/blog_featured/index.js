import React from 'react'

// Templates
import Section from '../../templates/page_section'

// Styles
import styles from './styles.module.scss'

const BlogPreview = () => {
  return (
    <Section
      className={styles['blogFeaturedSection']}
    >
     {
        [1,2,3,4,5].map((num, i) => (
          <div
            key={i}
            className={`${styles['blog']} ${styles['blog'+num]}`}
          />
        ))
     }
    </Section>
  )
}

export default BlogPreview
