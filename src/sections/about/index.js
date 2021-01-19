import React from 'react'

// Organisms
import Section from '@organisms/page_section'

// Content Components
import Header from '@elements/header'
import Paragraph from '@elements/paragraph'

// Svgs
import Pres from '@svg/abstracts/presentation.svg'

// Styles
import styles from './styles.module.scss'

const H1 = Header('h2')
const H2 = Header('h3')
const H3 = Header('h4')


const AboutSection = () => {
  return (
    <Section
      className={styles['aboutSection']}
    >
      <div
        className={styles['contentContainer']}
      >
        <div
          className={styles['overviewSection']}
        >
          <H1>
            Hi there,<br/> I'm Stephan Burger
          </H1>
          <Paragraph>
          I operate in the digital space as a software developer and
          I've been working side-by-side with local businesses for the past four years to help find the best solutions to their digital problems.
          </Paragraph>
        </div>
        
        <Pres className={styles['test']} />

        <div>
          <H2>
            What I do?
          </H2>

          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed varius quam ipsum, ac sagittis ligula ornare sed.
            Ut tristique pretium velit, ut ultricies elit placerat condimentum.
            Nunc laoreet ipsum et nisi gravida volutpat.
          </Paragraph>

          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed varius quam ipsum, ac sagittis ligula ornare sed.
            Ut tristique pretium velit, ut ultricies elit placerat condimentum.
            Nunc laoreet ipsum et nisi gravida volutpat.
          </Paragraph>
        </div>

        <div>
          <H2>
            What skills do I have?
          </H2>

          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed varius quam ipsum, ac sagittis ligula ornare sed.
            Ut tristique pretium velit, ut ultricies elit placerat condimentum.
            Nunc laoreet ipsum et nisi gravida volutpat.
            
            Sed auctor, mauris eu luctus bibendum, lorem eros tristique nulla, et mattis sem ipsum id lectus.
            Cras mollis odio ac quam ultrices pretium. In vitae velit vulputate, bibendum quam vel, interdum nunc.
            Quisque augue justo, volutpat at egestas vel, vehicula ac justo. Curabitur vel nulla vel nunc sagittis vehicula.
            Aliquam nec pretium lectus, vel tincidunt lacus.
            Morbi vitae velit aliquet, viverra velit ut, consequat libero.
          </Paragraph>
        </div>

        <div>
          <H2>
            What I'm like?
          </H2>

          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed varius quam ipsum, ac sagittis ligula ornare sed.
            Ut tristique pretium velit, ut ultricies elit placerat condimentum.
            Nunc laoreet ipsum et nisi gravida volutpat.
          </Paragraph>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed varius quam ipsum, ac sagittis ligula ornare sed.
            Ut tristique pretium velit, ut ultricies elit placerat condimentum.
            Nunc laoreet ipsum et nisi gravida volutpat.
          </Paragraph>
          <H3>
            Why am I like this
          </H3>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed varius quam ipsum, ac sagittis ligula ornare sed.
            Ut tristique pretium velit, ut ultricies elit placerat condimentum.
            Nunc laoreet ipsum et nisi gravida volutpat.
          </Paragraph>
        </div>
      </div>      
    </Section>
  )
}

export default AboutSection
