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
    Avatar: Focused,
    text: 'Focus is the key to getting things done. Be in the flow...'
  },
  {
    Avatar: Lively,
    text: 'Focus is the key to getting things done. Be in the flow...'
  },
  {
    Avatar: Industrious,
    text: 'Focus is the key to getting things done. Be in the flow...'
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

              <div
                className={styles['contentContainer']}
              >
                <Typography
                  className={styles['content']}
                >
                  {item.text}
                </Typography>
              </div>
            </div>
          ))
        }
      </div>

    </Section>
  )
}

export default SocialSkills
