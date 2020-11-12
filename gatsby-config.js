const path = require('path')

module.exports = {
  siteMetadata: {
    title: "I am Stephan",
    titleTemplate: "%s | Fullstack Engineer",
    description: "I am Stephan, a fullstack engineer.",
    url: "https://iamstephan.dev"
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `assets`, 'images'),
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
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
    `gatsby-plugin-glslify`
  ],
}
