import React from 'react'

// Organisms
import Page from '@organisms/page'

// Sections
import AboutShowcase from '@sections/about_showcase'
import AboutSection from '@sections/about'
import CTA from '@sections/cta'

/**
 * NOTE:
 * =====
 * Trying to follow a content | article type style to
 * the about me since the other styles don't feel right
 * 
 * Maybe this will make more sense
 */
const About = () => {
  return (
    <Page
      title='About Me'
      description='I am a software developer focused on creating impactful software.'
    >
      <AboutShowcase />
      <AboutSection />
      <CTA />
    </Page>
  )
}

export default About
