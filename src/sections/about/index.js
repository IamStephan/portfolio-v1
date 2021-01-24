import React from 'react'

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
          I enjoy starting from the ground up while not reinventing the wheel but
          sometimes curiosity gets the best of me and I just start reinventing.
        </Paragraph>

        <br/>

        <HeaderOne>
          My skills and toolsets
        </HeaderOne>
        <Paragraph>
          Every project has its own set of problems and requirements.
          Besides having a strong plan, one needs to be able to choose the right stack for the job.
          Combined with having a strong foundation, no project is unconquerable.
          That's why I've been pushing myself to keep on learning, making way for the stack I've come to love
          and enjoy:
        </Paragraph>

        <HeaderTwo>
          Languages:
        </HeaderTwo>
        <UnorderedList>
          <ListItem>
            Javascript
          </ListItem>
          <ListItem>
            Typescript
          </ListItem>
          <ListItem>
            NodeJS
          </ListItem>
          <ListItem>
            Python
          </ListItem>
          <ListItem>
            HTML and CSS
          </ListItem>
        </UnorderedList>

        <HeaderTwo>
          Tools and Libraries:
        </HeaderTwo>
        <UnorderedList>
          <ListItem>
            React
          </ListItem>
          <ListItem>
            Gatsby
          </ListItem>
          <ListItem>
            React Native
          </ListItem>
          <ListItem>
            Electron
          </ListItem>
        </UnorderedList>

        <HeaderTwo>
          Databases:
        </HeaderTwo>
        <UnorderedList>
          <ListItem>
            MongoDB <b>[NoSQL]</b>
          </ListItem>
          <ListItem>
            Postgres <b>[SQL]</b>
          </ListItem>
          <ListItem>
            GunJS <b>[Graph]</b>
          </ListItem>
          <ListItem>
            Graphql
          </ListItem>
        </UnorderedList>

        <HeaderTwo>
          Services:
        </HeaderTwo>
        <UnorderedList>
          <ListItem>
            Firebase
          </ListItem>
          <ListItem>
            Digital Ocean
          </ListItem>
          <ListItem>
            AWS
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
          Enjoying each one whilst listening to my favourite playlists.
        </Paragraph>
      </div>      
    </Section>
  )
}

export default AboutSection
