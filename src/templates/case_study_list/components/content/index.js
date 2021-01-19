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
                gutterBottom
                className={styles['header']}
              >
                All my case studies
              </Typography>
    
              <Typography
                className={styles['subheader']}
                variant='h5'
                gutterBottom
              >
                My past work showcasing my growth from knowing nothing to who I am today.
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