import React from 'react'

// Gatsby
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image/withIEPolyfill'

// Templates
import Section from '../../templates/page_section'

// Styles
import styles from './styles.module.scss'

// Brand Logos
import Css from '../../assets/svg/brand_logos/css3.svg'
import DigitalO from '../../assets/svg/brand_logos/digitalocean.svg'
import Electron from '../../assets/svg/brand_logos/electron.svg'
import Figma from '../../assets/svg/brand_logos/figma.svg'
import Firebase from '../../assets/svg/brand_logos/firebase.svg'
import Gtsby from '../../assets/svg/brand_logos/gatsby.svg'
import Git from '../../assets/svg/brand_logos/git.svg'
import Github from '../../assets/svg/brand_logos/github.svg'
import Grpqgl from '../../assets/svg/brand_logos/graphql.svg'
import Hml5 from '../../assets/svg/brand_logos/html5.svg'
import Js from '../../assets/svg/brand_logos/javascript.svg'
import Mongo from '../../assets/svg/brand_logos/mongodb.svg'
import Ndejs from '../../assets/svg/brand_logos/node-dot-js.svg'
import Python from '../../assets/svg/brand_logos/python.svg'
import Ract from '../../assets/svg/brand_logos/rct.svg'
import Sass from '../../assets/svg/brand_logos/sass.svg'
import Strapi from '../../assets/svg/brand_logos/strapi.svg'
import StyldCom from '../../assets/svg/brand_logos/styled-components.svg'
import Ts from '../../assets/svg/brand_logos/typescript.svg'
import Vsc from '../../assets/svg/brand_logos/visualstudiocode.svg'
import Vue from '../../assets/svg/brand_logos/vue-dot-js.svg'
import Icon from '../../foundation/icons'

const ICONS = [
  Css,
  DigitalO,
  Electron,
  Figma,
  Firebase,
  Gtsby,
  Git,
  Github,
  Grpqgl,
  Hml5,
  Js,
  Mongo,
  Ndejs,
  Python,
  Ract,
  Sass,
  Strapi,
  StyldCom,
  Ts,
  Vsc,
  Vue
]

/**
 * NOTE:
 * =====
 * There is a center version of the image but it
 * looks more off than the orignal one
 */
// Static Query
const query = graphql`
  {
    skills: file(relativePath: {eq: "skills/skills_tools.png"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const SkillSet = () => {
  const { skills: { childImageSharp: { fluid: skillsImage } } } = useStaticQuery(query)

  const skills = [
    ...ICONS,
    ...ICONS
  ]

  return (
    <Section
      className={styles['skillset']}
    >
       <Img
        fluid={skillsImage}
        className={styles['imgSkill']}
        objectFit='contain'
        draggable={false}
      />
      <div
        className={styles['skills']}
      >
        <div
          className={styles['faderStart']}
        />

        <div
          className={styles['set']}
        >
          {
            skills.map((Icon, i) => (
              <div
                className={styles['iconContainer']}
                key={i}
              >
                <Icon
                  className={styles['icon']}
                />
              </div>
              
            ))
          }
        </div>

        <div
          className={styles['set']}
        >
          {
            skills.map((Icon, i) => (
              <div
                className={styles['iconContainer']}
                key={i}
              >
                <Icon
                  className={styles['icon']}
                />
              </div>
              
            ))
          }
        </div>

        <div
          className={styles['faderEnd']}
        />
      </div>
    </Section>
  )
}

export default SkillSet
