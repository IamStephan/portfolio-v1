import React from 'react'

// Templates
import Page from '../../templates/page'

// Sections
import AboutShowcase from '../../sections/about_showcase'
import SkillSet from '../../sections/skill_set'
import SocialSkills from '../../sections/social_skills'
import Freelance from '../../sections/freelance_option'

const About = () => {
  return (
    <Page>
      <AboutShowcase />
      <SkillSet />
      <SocialSkills />
      <Freelance />
    </Page>
  )
}

export default About
