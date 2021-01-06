import React from 'react'

// Material
import { Typography } from '@material-ui/core'

// Templates
import Section from '../../templates/page_section'

// Styles
import styles from './styles.module.scss'

// Svgs
import Focused from '../../assets/svg/abstracts/focused.svg'
import Lively from '../../assets/svg/abstracts/lively.svg'
import Industrious from '../../assets/svg/abstracts/industrious.svg'

const Social_Skills_Info = [
  {
    title: 'Focused',
    Avatar: Focused
  },
  {
    title: 'Lively',
    Avatar: Lively
  },
  {
    title: 'Industroius',
    Avatar: Industrious
  },
]

const SocialSkills = () => {
  return (
    <Section
      className={styles['socialSkillsSection']}
    >
      {
        Social_Skills_Info.map(item => (
          <div
            key={item.title}
            className={styles['socialSkill']}
          >
            <div
              className={styles['avatarContainer']}
            >
              <item.Avatar
                className={styles['avatar']}
              />
            </div>

            <div
              className={styles['titleContainer']}
            >
              <Typography
                className={styles['title']}
                variant='h3'
              >
                <b>{item.title}</b>
              </Typography>
            </div>
          </div>
        ))
      }
    </Section>
  )
}

export default SocialSkills
