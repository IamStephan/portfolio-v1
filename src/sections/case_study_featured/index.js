import React from 'react'

// Template
import Section from '../../templates/page_section'

// Styles
import styles from './styles.module.scss'

const CaseStudyPreview = () => {
  const cells = Array(8 * 8).fill(1)
  return (
    <Section
      className={styles['caseStudyFeaturedSection']}
    >
      <div
        className={styles['title']}
      >

      </div>
    </Section>
  )
}

export default CaseStudyPreview
