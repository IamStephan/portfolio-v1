const path = require('path')

module.exports = {
  siteMetadata: {
    title: "I am Stephan",
    titleTemplate: "%s | Software Developer",
    description: "I am Stephan, a software developer.",
    url: "https://iamstephan.dev"
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-transformer-json`,
      options: {
        typeName: 'Studies'
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `studies`,
        path: `${__dirname}/content/case_studies`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `articles`,
        path: `${__dirname}/content/articles`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-remark-images`,
      options: {
        maxWidth: 900,
        linkImagesToOriginal: false,
        backgroundColor: `none`,
        disableBgImageOnAlpha: true
      },
    },
    `gatsby-remark-prismjs`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 900,
              linkImagesToOriginal: false,
              backgroundColor: `none`,
              disableBgImageOnAlpha: true
            },
          },
          `gatsby-remark-prismjs`
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-svgr',
      options: {
        include: /assets/,
        svgoConfig: {
          plugins: [
            { removeViewBox: false }
          ],
        }
      }
    },
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        stylesProvider: {
          injectFirst: true
        }
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `I Am Stephan`,
        short_name: `iamStephan`,
        start_url: `/`,
        background_color: `#C0392B`,
        theme_color: `#C0392B`,
        display: `minimal-ui`,
        icon: `src/assets/images/site/icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `#C0392B`,
      },
    },
    '@bumped-inc/gatsby-plugin-optional-chaining',
    {
      resolve: 'gatsby-plugin-alias-imports',
      options: {
        alias: {
          '@foundation': 'src/foundation',
          '@elements': 'src/elements',
          '@organisms': 'src/organisms',
          '@sections': 'src/sections',
          '@templates': 'src/templates',
          '@svg': 'src/assets/svg',
          '@utils': 'src/utils'
        }
      }
    }
  ],
}
