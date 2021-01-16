import React from 'react'

import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image/withIEPolyfill'

// Templates
import Page from '@templates/case_study'

// Sections
import Overview from '@templates/case_study/sections/overview'
import Outline from '@templates/case_study/sections/outline'

// Element
import Paragraph from '@elements/paragraph'

const query = graphql`
  {
    test: file(relativePath: {eq: "test_imgs/mockup_test.png"}) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Example = () => {
  const { test: { childImageSharp: { fluid: testImage } } } = useStaticQuery(query)

  return (
    <Page>
      <Overview
        title='Gerimed Mobility'
        showcase={testImage}
        tags={[
          'E-commerce',
          'Website'
        ]}
      >
        <Paragraph>
          Gerimed Mobility has been operating in the medical sphere for a few years.
          Gerimed Mobility has been operating in the medical sphere for a few years.
          Gerimed Mobility has been operating in the medical sphere for a few years.
        </Paragraph>
      </Overview>

      <Outline
        goal='Providing customers the ease of purchasing online and having an extensive product catalog.'
        industry='A mixture between retail and medical supplies. Also provides customers with a rental option.'
        scope='Admin management portal, with a landing page and a rich online shopping experience.'
      />

      
    </Page>
  )
}

export default Example
