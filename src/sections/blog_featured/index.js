import React from 'react'

// Material
import { Typography } from '@material-ui/core'

// Organisms
import Section from '../../organisms/page_section'

// Styles
import styles from './styles.module.scss'

const DemoArticles = [
  {
    title: 'Understanding the poops of poosps',
    summary: 'lsa dj lasjd als d',
    tags: [
      'Thoughts',
      'Code'
    ],
    link: 'askdmalksdm',
    showcase: 'ausdgh aosdj apodj'
  }
]

const BlogPreview = () => {
  return (
    <Section
      className={styles['blogFeaturedSection']}
    >
      <div
      className={styles['contentContainer']}
      >
        <Typography
          variant='h2'
          className={styles['title']}
        >
          Featured Articles
        </Typography>
        <Typography
          className={styles['subtitle']}
        >
          asdjsa dnlas da sdk aksd a dmasn dmasn dmna sdmna dmnas dmnas dans dabdobwq od jpodj owiqhd oi
        </Typography>
      </div>
    </Section>
  )
}

export default BlogPreview
