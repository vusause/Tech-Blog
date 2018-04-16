module.exports = {
  siteMetadata: {
    title: `Mike's Tech Blog`,
  },
  pathPrefix: `/blog`,
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    }
  ],
}
