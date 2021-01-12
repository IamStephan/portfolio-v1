import React from 'react'

// Organisms
import Page from '../../organisms/page'

// Sections
import AboutShowcase from '../../sections/about_showcase'
import SocialSkills from '../../sections/social_skills'
import Freelance from '../../sections/freelance_option'

const About = () => {
  return (
    <Page>
      <AboutShowcase />
      <SocialSkills />
      <Freelance />
    </Page>
  )
}

export default About
