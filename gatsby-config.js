module.exports = {
  siteMetadata: {
    title: `Best Man Speech Tips`,
    description: `Hints and tips to help you write an amazing best man's speech.`,
    author: `Best Man T`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/rings-wedding-solid.svg`, // This path is relative to the root of the site.
      },
      resolve: 'gatsby-plugin-mailchimp',
          options: {
              endpoint: 'https://tips.us18.list-manage.com/subscribe/post?u=83d1424caa4ab5a28e9cb103d&amp;id=beac86b6a9', // add your MC list endpoint here; see instructions below
          },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
