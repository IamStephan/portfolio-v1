import React from 'react'

// Gatsby
import { Link } from 'gatsby'

// Foundation
import Icon from '@foundation/icons_svg'

// Material
import { Chip, Typography } from '@material-ui/core'

// MDX
import { MDXRenderer } from 'gatsby-plugin-mdx'

// Organisms
import Section from '@organisms/page_section'

// Utils
import { getArticleLink } from '@utils/getLink'

// Styles
import styles from './styles.module.scss'

/**
 * 
 * @param {{
 *    frontmatter: *
 *    meta: *
 *    body: *
 * }} props 
 */
const Content = (props) => {
  const {
    frontmatter,
    meta,
    body
  } = props

  return (
    <Section
      className={styles['contentSection']}
    >
      <div
        className={styles['headerContainer']}
      >
        
        <Typography
          className={styles['header']}
          variant='h2'
        >
          {frontmatter.title}
        </Typography>

        <div
          className={styles['tagsContainer']}
        >
          {
            frontmatter.tags.map(tag => (
              <Chip
                className={styles['tag']}
                key={`tag-${tag}`}
                color='primary'
                size='small'
                label={tag}
              />
            ))
          }
        </div>

        <div
          className={styles['meta']}
        >
          <Typography
            variant='body2'
          >
            { frontmatter.date } • <b>{ meta.timeToRead } min read</b>
          </Typography>
        </div>
      </div>

      
      
      <div
        className={styles['contentContainer']}
      >
        <MDXRenderer>
          {body}
        </MDXRenderer>
      </div>

      <div
        className={styles['nextPrevContainer']}
      >
        {
          meta.next && (
            <Link
              to={getArticleLink(meta.next.fields.slug)}
              className={styles['nextContainer']}
            >
              <Typography
                variant='h3'
                color='primary'
                className={styles['link']}
              >
                Next
              </Typography>

              <Typography
                className={styles['title']}
              >
                {meta.next.frontmatter.title}
              </Typography>

              <Icon
                name='arrow-left-circle-line'
                className={styles['icon']}
              />
            </Link>
          )
        }
        
        {
          meta.prev && (
            <Link
              to={getArticleLink(meta.prev.fields.slug)}
              className={styles['prevContainer']}
            >
              <Typography
                variant='h3'
                color='primary'
                className={styles['link']}
              >
                Prev
              </Typography>

              <Typography
                className={styles['title']}
              >
                {meta.prev.frontmatter.title}
              </Typography>
              

              <Icon
                name='arrow-right-circle-line'
                className={styles['icon']}
              />
            </Link>
          )
        }
        
      </div>
    </Section>
  )
}

export default Content
