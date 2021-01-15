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
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `content`,
    //     path: `${__dirname}/content`,
    //   },
    // },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    // `gatsby-plugin-mdx`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/
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
          '@modules': 'src/modules',
          '@organisms': 'src/organisms',
          '@sections': 'src/sections',
          '@stores': 'src/stores',
          '@templates': 'src/templates',
          '@utils': 'src/utils',
          '@svg': 'src/assets/svg'
        }
      }
    }
  ],
}
