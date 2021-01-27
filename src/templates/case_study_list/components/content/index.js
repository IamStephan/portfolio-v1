import React from 'react'

// Gatsby
import { Link } from 'gatsby'
import Img from 'gatsby-image/withIEPolyfill'

// Material
import { Chip, Typography } from '@material-ui/core'
import { Pagination, PaginationItem } from '@material-ui/lab'

// Organisms
import Section from '@organisms/page_section'

// Utils
import { getStudyLink, getStudyPage } from '@utils/getLink'

// Styles
import styles from './styles.module.scss'

/**
 * 
 * @param {{
 *    studies: Array<{
 *      title: string
 *      overview: string
 *      tags: Array<string>
 *      previewLink: string
 *      showcase: *
 *    }>
 *    currentPage,
 *    pageCount
 * }} props 
 */
const Content = (props) => {
  const {
    studies,
    currentPage,
    pageCount
  } = props

  return (
    <Section
      className={styles['contentSection']}
    >
      <div
        className={styles['contentContainer']}
      >
        {
          currentPage === 1 && (
            <div
              className={styles['headerContainer']}
            >
              <Typography
                variant='h2'
                component='h1'
                gutterBottom
                className={styles['header']}
              >
                All my case studies
              </Typography>
    
              <Typography
                className={styles['subheader']}
                component='p'
                variant='h5'
                gutterBottom
              >
                Some of the work that I found to be particularly interesting.
              </Typography>
            </div>
          )
        }
       
        {
          studies.map(study => (
            <Link
              to={getStudyLink(study.fields.slug)}
              key={study.fields.slug}
              className={styles['studyContainer']}
            >
              <div
                className={styles['showcaseContainer']}
              >
                <Img
                  fluid={study.showcase.childImageSharp.fluid}
                  className={styles['showcase']}
                  alt={study.title}
                />
              </div>

              <div
                className={styles['content']}
              >
                <div
                  className={styles['tagsContainer']}
                >
                  {
                    study.tags.map(tag => (
                      <Chip
                        key={`tag-${tag}`}
                        label={tag}
                        className={styles['tag']}
                        color='primary'
                        size='small'
                      />
                    ))
                  }
                </div>
                <Typography
                  variant='h4'
                  component='h2'
                  className={styles['title']}
                  gutterBottom
                >
                  {study.title}
                </Typography>

                <Typography
                  paragraph
                  className={styles['overview']}
                >
                  {study.overview}
                </Typography>
              </div>
            </Link>
          ))
        }
      </div>

      <div
        className={styles['paginationContainer']}
      >
        <Pagination
          color='primary'
          page={currentPage}
          count={pageCount}
          hideNextButton
          hidePrevButton
          size='large'
          renderItem={item => (
            <PaginationItem
              component={Link}
              to={getStudyPage(item.page)}
              {...item}
            />
          )}
        />
      </div>
    </Section>
  )
}

export default Content