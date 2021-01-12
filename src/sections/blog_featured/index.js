import React from 'react'

// Gatsby
import { Link } from 'gatsby'

// Foundation
import Icon from '../../foundation/icons'

// Material
import { Typography, Button, Chip } from '@material-ui/core'

// Organisms
import Section from '../../organisms/page_section'

// Styles
import styles from './styles.module.scss'

const DemoArticles = [
  {
    title: 'Let\'s explore microservices.',
    summary: 'This can be an intimidating topic to discus but with good reason, it\'s complicated. Why not get fimiliar with it and start playing with the idea of creating a distributed system.',
    date: Date.now(),
    tags: [
      'Thoughts',
      'Code'
    ],
    link: 'askdmalksdm',
    showcase: 'ausdgh aosdj apodj'
  },
  {
    title: 'Understanding the ',
    summary: 'lsa dj lasjd als d',
    date: Date.now(),
    tags: [
      'Thoughts',
      'Code',
    ],
    link: 'askdmalksdm',
    showcase: 'ausdgh aosdj apodj'
  },  
  {
    title: 'Understanding the poops of poosps',
    summary: 'lsa dj lasjd als d',
    date: Date.now(),
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
          className={styles['header']}
        >
          Featured Articles
        </Typography>
        <Typography
          className={styles['subheader']}
        >
          Exploring uncontroversial topics to more guide-like article. See what catches your eye, maybe we can talk about it...
        </Typography>

        <Button
          variant='contained'
          color='primary'
          component={Link}
          to='/articles'
          className={styles['ctaAction']}
          endIcon={(
            <Icon
              className={styles['icon']}
              
              name='eye'
            />
          )}
        >
          View all
        </Button>
      </div>

      {
        DemoArticles.map(article => (
          <div
            key={article.title}
            className={styles['articleContainer']}
          >
            <Typography
              variant='overline'
              className={styles['date']}
            >
              13 Nov
            </Typography>

            <Link
              to={article.link}
            >
              <Typography
                className={styles['title']}
                variant='h5'
              >
                {article.title}
              </Typography>
            </Link>
            
            <div
              className={styles['tagsContainer']}
            >
              {
                article.tags.map(tag => (
                  <Chip
                    className={styles['tag']}
                    key={tag}
                    label={tag}
                    size='small'
                    color='default'
                  />
                ))
              }
            </div>

            <Typography
              className={styles['summary']}
            >
              {article.summary}
            </Typography>
          </div>
        ))
      }
    </Section>
  )
}

export default BlogPreview
