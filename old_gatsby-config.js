module.exports = {
  siteMetadata: {
    title: 'wetainment',
    author: 'Christoph Benjamin Weber',
    siteUrl: 'https://wetainment.com',
  },

  plugins: [
    'gatsby-plugin-catch-links',
    'gatsby-plugin-styled-components',
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
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              classPrefix: 'language-',
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false,
            },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 590,
              linkImagesToOriginal: true,
            },
          },
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1.0725rem',
            },
          },
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
          'gatsby-remark-social-cards',
        ],
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-matomo',
      options: {
        siteId: '1',
        matomoUrl: 'https://matomo.wetainment.com',
        siteUrl: 'https://wetainment.com',
        // All the optional settings
        // exclude: ['/offline-plugin-app-shell-fallback/'],
        // requireConsent: false,
        disableCookies: false,
        // localScript: '/piwik.js',
        // dev: false,
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
    // 'gatsby-plugin-offline',
    'gatsby-plugin-remove-serviceworker',
  ],
};
