import { Chip, Typography } from '@material-ui/core'
import React from 'react'

// Templates
import Page from '@organisms/page'
import Section from '@organisms/page_section'

// Svgs
import Pres from '@svg/abstracts/presentation.svg'

// Styles
import styles from './styles.module.scss'

const ArticleDummyData = [
  {
    date: '14 Jan',
    title: 'Let Explore microservices',
    tags: [
      'Code',
      'Thoughts'
    ],
    summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dapibus diam lacus. Morbi quis ipsum et elit elementum hendrerit. Donec vitae ex sed diam ornare tristique ut eget risus. Praesent at porta felis, nec volutpat leo. Curabitur tellus eros, fermentum eget vestibulum vel, efficitur sed nisl.'
  },
  {
    date: '20 Dec',
    title: 'Javascript and its fun quirks',
    tags: [
      'Code',
      'Thoughts'
    ],
    summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dapibus diam lacus. Morbi quis ipsum et elit elementum hendrerit. Donec vitae ex sed diam ornare tristique ut eget risus. Praesent at porta felis, nec volutpat leo. Curabitur tellus eros, fermentum eget vestibulum vel, efficitur sed nisl.'
  }
]

const Articles = () => {
  return (
    <Page>
      <Section
        className={styles['articleList']}
      >
        <div
          className={styles['tags']}
        >
          Tags
        </div>
        <div
          className={styles['something']}
        >
          something
        </div>
        <div
          className={styles['featured']}
        >
          Featured
        </div>
        <div
          className={styles['list']}
        >
          <div
            className={styles['article']}
          >
            {
              ArticleDummyData.map(item => (
                <div
                  className={styles['article']}
                >
                  {/* <div
                    className={styles['showcase']}
                  >
                    <Pres />
                  </div> */}
                  <Typography
                    variant='overline'
                  >
                    <b>{item.date}</b>
                  </Typography>
                  
                  <div
                    className={styles['tagsContainer']}
                  >
                    {
                      item.tags.map(tag => (
                        <Chip
                          label={tag}
                          className={styles['tag']}
                          variant='outlined'
                          color='secondary'
                          size='small'
                        />
                      ))
                    }
                  </div>
                  <Typography
                    variant='h3'
                    gutterBottom
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    paragraph
                  >
                    {item.summary}
                  </Typography>
                </div>
              ))
            }
          </div>
        </div>

        <div
          className={styles['pagination']}
        >
          Pagination
        </div>
      </Section>
    </Page>
  )
}

export default Articles
