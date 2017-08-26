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
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'wetainment blog/portfolio',
        short_name: 'wetainment',
        start_url: '/',
        background_color: '#F4F2F3',
        theme_color: '#DC680B',
        display: 'standalone',
        orientation: 'portrait',
        icons: [
          {
            src: '/ic_launcher_48.png',
            sizes: '48x48',
            type: 'image/png',
          },
          {
            src: '/ic_launcher_72.png',
            sizes: '72x72',
            type: 'image/png',
          },
          {
            src: '/ic_launcher_96.png',
            sizes: '96x96',
            type: 'image/png',
          },
          {
            src: '/ic_launcher_144.png',
            sizes: '144x144',
            type: 'image/png',
          },
          {
            src: '/ic_launcher_192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/ic_launcher_512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: '/ic_launcher_1024.png',
            sizes: '1024x1024',
            type: 'image/png',
          },
        ],
      },
    },
    'gatsby-plugin-offline',
  ],
};
