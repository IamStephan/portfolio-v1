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
          I plan, design, code, deploy and maintain software solutions that businesses use to either help boost their online presence or to promote productivity and efficiency.
          It can be as simple as a landing page or a cross-platform application that requires cross-device syncing and authentication.
          I enjoy starting from the ground up, but I don’t reinvent the wheel.
          Sometimes curiosity gets the best of me and I just start reinventing.
        </Paragraph>

        <br />

        <HeaderOne>
          What are my skills?
        </HeaderOne>
        <Paragraph>
          Being a developer means more than meets the eye.
          You need the ability and skills required to develop simple to complex applications, while also being a great team player.
        </Paragraph>

        <br />

        <HeaderTwo>
          Technical Skills
        </HeaderTwo>
        <Paragraph>
          Something I pride myself on, is the ability to keep learning new concepts and tools.
          Learning, however, can only develop applications once the work starts.
          Only when you have a foundation, can you start creating and innovating.
          Now, I hear you asking, what does my foundation look like?
        </Paragraph>
        <UnorderedList>
          <ListItem>
            Javascript
          </ListItem>
          <ListItem>
            Typescript
          </ListItem>
          <ListItem>
            Python
          </ListItem>
          <ListItem>
            CSS (SASS)
          </ListItem>
          <ListItem>
            HTML
          </ListItem>
        </UnorderedList>
        <Paragraph>
          With this foundations you start expanding into more depths, developing your stack and methods for getting the job done.
          What does my my stack look like?
        </Paragraph>
        <UnorderedList>
          <ListItem>
            Sass
          </ListItem>
          <ListItem>
            React
          </ListItem>
          <ListItem>
            Mobx, Redux, Zustand and Xstate
          </ListItem>
          <ListItem>
            Gatsby
          </ListItem>
          <ListItem>
            Netlify
          </ListItem>
          <ListItem>
            And much more...
          </ListItem>
        </UnorderedList>

        <Paragraph>
          Creating for the web has made me realise how crazy we, as developers, can get when pushing technology further.
          Because most of what I do on the web can easily be expanded into more specific domains.
          These domains include desktop, mobile and even server development. Each having their own set of tools that I'm quiet comfortable in:
        </Paragraph>
        <UnorderedList>
          <ListItem>
            React Native (For mobile)
          </ListItem>
          <ListItem>
            Electron (For Desktop)
          </ListItem>
          <ListItem>
            NodeJs and its accompanying libraries (For Servers)
          </ListItem>
        </UnorderedList>

        <Paragraph>
          When it's time to deploy I have few more tools at my disposal:
        </Paragraph>
        <UnorderedList>
          <ListItem>
            Firebase, AWS or Digital Ocean
          </ListItem>
          <ListItem>
            Headless CMS's (Like Strapi)
          </ListItem>
        </UnorderedList>

        <br />

        <HeaderTwo>
          Soft Skills
        </HeaderTwo>
        <Paragraph>
          Being apart of a team is a great way to create impactful applications, but you also need the ability to work on your own.
          Balancing the two can often be a complex task, that's why you need well developed soft skills.
          Having that in mind what are my soft skills?
        </Paragraph>
        <UnorderedList>
          <ListItem>
            Industiousness    
          </ListItem>
          <ListItem>
            Disciplined   
          </ListItem>
          <ListItem>
            Articulated
          </ListItem>
          <ListItem>
            Team player    
          </ListItem>
          <ListItem>
            Friendly
          </ListItem>
        </UnorderedList>

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
