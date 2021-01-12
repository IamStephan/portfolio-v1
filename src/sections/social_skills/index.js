import React from 'react'

// Material
import { Typography } from '@material-ui/core'

// Organisms
import Section from '../../organisms/page_section'

// Styles
import styles from './styles.module.scss'

// Svgs
import Focused from '../../assets/svg/abstracts/focused.svg'
import Lively from '../../assets/svg/abstracts/lively.svg'
import Industrious from '../../assets/svg/abstracts/industrious.svg'

const Social_Skills_Info = [
  {
    Avatar: Focused
  },
  {
    Avatar: Lively
  },
  {
    Avatar: Industrious
  },
]

const SocialSkills = () => {
  return (
    <Section
      className={styles['socialSkillsSection']}
    >

      <div
        className={styles['skillsContainer']}
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
            </div>
          ))
        }
      </div>

    </Section>
  )
}

export default SocialSkills
