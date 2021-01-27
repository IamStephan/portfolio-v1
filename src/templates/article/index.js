import React from 'react'

// Gatsby
import { graphql, Link } from 'gatsby'

// Elements
import Header from '@elements/header'
import Paragraph from '@elements/paragraph'
import Divider from '@elements/divider'
import Seperator from '@elements/seperator'
import Blockquote from '@elements/blockquote'
import { ListItem, OrderedList, UnorderedList } from '@elements/list'

// Organisms
import Page from '@organisms/page'

// MDX
import { MDXProvider } from '@mdx-js/react'

// Components
import Content from './components/content'

const components = {
  /**
   * BASIC
   */
  h1: Header('h3', 'h2'),
  h2: Header('h4', 'h3'),
  h3: Header('h5', 'h4'),
  // explicitly disable these headers
  h4:() => null,
  h5:() => null,
  h6:() => null,
  p: Paragraph,
  hr: Divider,
  blockquote: Blockquote,

  /**
   * LIST
   */
  li: ListItem,
  ol: OrderedList,
  ul: UnorderedList,
  

  /**
   * SHORTCODES
   */
  Link,
  Seperator
}

const Article = (props) => {
  const {
    data,
    pageContext
  } = props

  const frontmatter = data.mdx.frontmatter
  const meta = {
    timeToRead: data.mdx.timeToRead,
    prev: pageContext.prev,
    next: pageContext.next,
  }
  const body = data.mdx.body

  console.log(pageContext)

  return (
    <Page
      title={`${frontmatter.title} | Article`}
      description={frontmatter.excerpt}
      article
    >
      <MDXProvider
        components={components}
      >
        <Content
          frontmatter={frontmatter}
          meta={meta}
          body={body}
        />
      </MDXProvider>
    </Page>
  )
}

export default Article

export const query = graphql`
  query ArticleBySlug($slug: String!){
    mdx(
      fields: {
        slug: {
          eq: $slug
        }
      }
    ) {
      frontmatter {
        date(formatString: "DD MMM YY")
        tags
        title
        showcase {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }

      timeToRead
      excerpt(pruneLength: 50)
      body
    }
  }
`
