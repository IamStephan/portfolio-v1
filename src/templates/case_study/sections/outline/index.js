import React from 'react'

// Material
import { Typography } from '@material-ui/core'

// Organisms
import Section from '@organisms/page_section'

// Svgs
import Spec from '@svg/abstracts/spec.svg'
import Industry from '@svg/abstracts/industry.svg'
import Scope from '@svg/abstracts/scope.svg'

// Styles
import styles from './styles.module.scss'

/**
 * 
 * @param {{
 *    goal: string,
 *    scope: string,
 *    industry: string
 * }} props 
 */
const OutlineSection = (props) => {
  const {
    goal,
    scope,
    industry
  } = props

  return (
    <Section
      className={styles['outlineSection']}
    >
      <div
        className={styles['outlineContainer']}
      >
        <div
          className={styles['outline']}
        >
          <div
            className={styles['showcaseContainer']}
          >
            <Spec
              className={styles['showcase']}
            />
          </div>

          <Typography
            variant='h4'
            gutterBottom
            className={styles['title']}
          >
            Goal
          </Typography>

          <Typography
            paragraph
            className={styles['content']}
          >
            { goal }
          </Typography>
        </div>

        <div
          className={styles['outline']}
        >
          <div
            className={styles['showcaseContainer']}
          >
            <Industry
              className={styles['showcase']}
            />
          </div>

          <Typography
            variant='h4'
            gutterBottom
            className={styles['title']}
          >
            Industry
          </Typography>

          <Typography
            paragraph
            className={styles['content']}
          >
            { industry }
          </Typography>
        </div>

        <div
          className={styles['outline']}
        >
          <div
            className={styles['showcaseContainer']}
          >
            <Scope
              className={styles['showcase']}
            />
          </div>

          <Typography
            variant='h4'
            gutterBottom
            className={styles['title']}
          >
            Scope
          </Typography>

          <Typography
            paragraph
            className={styles['content']}
          >
            { scope }
          </Typography>
        </div>
      </div>
    </Section>
  )
}

export default OutlineSection
