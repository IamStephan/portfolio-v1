import React from 'react'

// Material
import { Typography } from '@material-ui/core'

// Organisms
import Section from '@organisms/page_section'

// Styles
import styles from './styles.module.scss'

// Elements
import HeaderConst from '@elements/header'
import Paragraph from '@elements/paragraph'
import { ListItem, UnorderedList } from '@elements/list'


const HeaderOne = HeaderConst('h3')
const HeaderTwo = HeaderConst('h4')
const HeaderThree = HeaderConst('h5')

const AboutSection = () => {
  return (
    <Section
      className={styles['aboutSection']}
    >
      <div
        className={styles['aboutContainer']}
      >
        <HeaderOne>
          Who am I and what do I do?
        </HeaderOne>
        <Paragraph>
          My name is Stephan Burger, a software developer with 4 years’ experience.
          I plan, design, code, deploy and maintain software solutions that businesses use to either boost their online presence or to promote productivity and efficiency.
          It can be as simple as a landing page or a cross-platform application that requires cross-device syncing and authentication.
          I enjoy starting from the ground up, but I don’t reinvent the wheel.
          Sometimes curiosity gets the best of me and I just start reinventing.
        </Paragraph>

        <Paragraph>
          
        </Paragraph>

        <br/>

        <HeaderOne>
          My skills and toolsets
        </HeaderOne>

        <br />

        <HeaderOne>
          What do I do in my free time?
        </HeaderOne>
        <Paragraph>
          There are 3 things I enjoy to the core; learning, tinkering, and skateboarding.
          When I’m not busy learning something new, you’ll find me tinkering away on something.
          And when things get too much, you might end up finding me at the local skatepark.
          In each case, there’ll be music playing in the background.
        </Paragraph>
      </div>      
    </Section>
  )
}

export default AboutSection
