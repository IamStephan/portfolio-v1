import React from 'react'

// Organisms
import Page from '@organisms/page'

// Sections
import Hero from '@sections/hero'
import CaseStudyFeatured from '@sections/case_study_featured'
import SkillFeatured from '@sections/skills_featured'
import BlogFeatured from '@sections/blog_featured'
import CTA from '@sections/cta'

const index = () => {
  return <App />
}

const App = () => {
  return (
    <Page
      title='I am Stephan'
      description='I am a software developer that creates impactful software solutions that propel businesses to success.'
    >
      <Hero />
      <SkillFeatured />
      <CaseStudyFeatured />
      <BlogFeatured />
      <CTA />
    </Page>
  )
}

export default index


