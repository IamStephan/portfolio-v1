import React from 'react'

// Material
import { Typography } from '@material-ui/core'

// Organisms
import Section from '@organisms/page_section'

// Content Components
import { ContentSection, Paragraph, Header } from '../../content_components'

// Svgs
import Pres from '@svg/abstracts/presentation.svg'

// Styles
import styles from './styles.module.scss'

const AboutSection = () => {
  return (
    <Section
      className={styles['aboutSection']}
    >
      <div
        className={styles['contentContainer']}
      >
        <ContentSection
          className={styles['overviewSection']}
        >
          <Header
            level='h2'
          >
            Hi there,<br/> I'm Stephan Burger
          </Header>
          <Paragraph>
          I operate in the digital space as a software developer and
          I've been working side-by-side with local businesses for the past four years to help find the best solutions to their digital problems.
          </Paragraph>
        </ContentSection>
        
        <Pres className={styles['test']} />

        <ContentSection>
          <Header
            level='h3'
          >
            What I do?
          </Header>

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
        </ContentSection>

        <ContentSection>
          <Header
            level='h3'
          >
            What skills do I have?
          </Header>

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
        </ContentSection>

        <ContentSection>
          <Header
            level='h3'
          >
            What I'm like?
          </Header>

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
          <Header
            level='h5'
          >
            Why am I like this
          </Header>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed varius quam ipsum, ac sagittis ligula ornare sed.
            Ut tristique pretium velit, ut ultricies elit placerat condimentum.
            Nunc laoreet ipsum et nisi gravida volutpat.
          </Paragraph>
        </ContentSection>
      </div>      
    </Section>
  )
}

export default AboutSection
