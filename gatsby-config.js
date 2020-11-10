const path = require('path')

module.exports = {
  siteMetadata: {
    title: "I am Stephan",
    titleTemplate: "%s | Fullstack Engineer",
    description: "I am Stephan, a fullstack engineer.",
    url: "https:iamstephan.dev",
    image: "", // Path to your image you placed in the 'static' folder
    // twitterUsername: "",
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
    // {
    //   resolve: "gatsby-plugin-react-svg",
    //   options: {
    //     rule: {
    //       include: /assets/
    //     }
    //   }
    // },
    {
      resolve: "gatsby-plugin-typography",
      options: {
        pathToConfigModule: "src/foundation/typography"
      }
    }
  ],
}
