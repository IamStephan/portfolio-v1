import React from 'react'

// Gatsby
import Img from 'gatsby-image'

// Foundation
import Icon from '@foundation/icons_svg'

// Material
import { Typography, Chip, Button } from '@material-ui/core'

// Modules
import Zoom from '@modules/image_zoom'

// Organisms
import Section from '@organisms/page_section'

// Styles
import styles from './styles.module.scss'

/**
 * 
 * @param {{
 *    title: string
 *    children: *
 *    previewLink: string
 *    repositoryLink: string
 *    tags: Array<string>
 *    showcase: *
 * }} props
 */
const OverviewSection = (props) => {
  const {
    title,
    children,
    tags,
    previewLink,
    repositoryLink,
    showcase
  } = props

  return (
    <Section
      className={styles['overviewSection']}
    >
      <div
        className={styles['overviewContainer']}
      >
        <div
          className={styles['contentContainer']}
        >
          <div
            className={styles['tagsContainer']}
          >
            {
              !!tags && tags.map(tag => (
                <Chip
                  // key={tag}
                  className={styles['tag']}
                  label={tag}
                  size='small'
                  color='primary'
                />
              ))
            }
          </div>

          <Typography
            className={styles['title']}
            variant='h2'
            component='h1'
            gutterBottom
          >
            { title }
          </Typography>

          <Typography
            className={styles['summary']}
            paragraph
          >
            { children }
          </Typography>

          <div
            className={styles['actionContainer']}
          >
            <Button
              variant='contained'
              color='primary'
              className={styles['action']}
              component='a'
              target='_blank'
              href={previewLink ? previewLink.toLowerCase() : ''}
              disabled={!previewLink}
              endIcon={(
                <Icon
                  name='eye-fill'
                  className={styles['icon']}
                />
              )}
            >
              Live Preview
            </Button>

            <Button
              variant='outlined'
              color='secondary'
              className={styles['action']}
              component='a'
              target='_blank'
              href={repositoryLink ? repositoryLink : ''}
              disabled={!repositoryLink}
              endIcon={(
                <Icon
                  name={repositoryLink ? 'git-repository-fill' : 'git-repository-private-fill'}
                  className={styles['icon']}
                />
              )}
            >
              Repository
            </Button>
          </div>
        </div>
        
        <Zoom>
          <div
            className={styles['showcaseContainer']}
          >
            <Img
              fluid={showcase}
              className={styles['showcase']}
            />
          </div>
        </Zoom>
      </div>
    </Section>
  )
}

export default OverviewSection
