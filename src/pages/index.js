import React from 'react'

// Templates
import Page from '../templates/page'

// Sections
import Hero from '../sections/hero'
import CaseStudyFeatured from '../sections/case_study_featured'
import SkillSet from '../sections/skill_set'
import BlogFeatured from '../sections/blog_featured'
import CTA from '../sections/cta'

const index = () => {
  return <App />
}

const App = () => {
  return (
    <Page>
      <Hero />
      <CaseStudyFeatured />
      <SkillSet />
      {/* <BlogFeatured /> */}
      <CTA />
    </Page>
  )
}

export default index


