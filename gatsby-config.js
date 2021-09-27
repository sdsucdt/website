module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.sdsucyberdefense.org',
    title: 'SDSU Cyber Defense Team',
    description: 'Landing page for SDSU Cyber Defense Team',
  },
  plugins: [
    'gatsby-plugin-gatsby-cloud',
    'gatsby-plugin-image',
    'gatsby-plugin-postcss',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: './src/content',
      },
      __key: 'content',
    },
  ],
};
