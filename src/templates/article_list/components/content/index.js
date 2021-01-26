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
import { getArticleLink, getArticlePage } from '@utils/getLink'

// Styles
import styles from './styles.module.scss'

/**
 * 
 * @param {{
 *    articles: Array<{
 *      frontmatter {
 *        title: string
 *        overview: string
 *        tags: Array<string>
 *        date: string
 *        showcase: *
 *      }
 * 
 *      fields {
 *        slug
 *      }
 * 
 *      timeToRead
 *    }>
 *    currentPage,
 *    pageCount
 * }} props 
 */
const Content = (props) => {
  const {
    articles,
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
                Let's explore some topics
              </Typography>
    
              <Typography
                className={styles['subheader']}
                variant='h5'
                component='p'
                gutterBottom
              >
                My past work showcasing my growth from knowing nothing to who I am today.
              </Typography>
            </div>
          )
        }
       
        {
          articles.map(article => (
            <Link
              to={getArticleLink(article.fields.slug)}
              key={article.fields.slug}
              className={styles['articleContainer']}
            >
              {
                article.frontmatter.showcase && (
                  <div
                    className={styles['showcaseContainer']}
                  >
                    <Img
                      className={styles['showcase']}
                      fluid={article.frontmatter.showcase.childImageSharp.fluid}
                    />
                  </div>
                )
              }
              
              <div
                className={styles['content']}
              >
                <Typography
                  variant='h4'
                  component='h2'
                  className={styles['title']}
                  gutterBottom
                >
                  {article.frontmatter.title}
                </Typography>

                <div
                  className={styles['tagsContainer']}
                >
                  {
                    article.frontmatter.tags.map(tag => (
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
                  variant='body2'
                  className={styles['meta']}
                  paragraph
                >
                  {article.frontmatter.date} • <b>{article.timeToRead} min read</b>
                </Typography>

                <Typography
                  paragraph
                  className={styles['overview']}
                >
                  {article.excerpt}
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
              to={getArticlePage(item.page)}
              {...item}
            />
          )}
        />
      </div>
    </Section>
  )
}

export default Content