module.exports = {
  siteMetadata: {
    title: 'wetainment',
    author: 'Christoph Benjamin Weber',
  },
  plugins: [
    'gatsby-plugin-catch-links',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-images',
        ],
      },
    },
    'gatsby-plugin-offline',
  ],
};
