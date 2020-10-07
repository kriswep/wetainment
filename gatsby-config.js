module.exports = {
  siteMetadata: {
    title: `wetainment`,
    author: {
      name: `Christoph Benjamin Weber`,
      summary: `Interested in all frontend stuff`,
    },
    description: `wetainment, blog and portfolio. Read about modern frontend technologies.`,
    siteUrl: `https://wetainment.com`,
    social: {
      twitter: `kriswep`,
    },
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.md`, `.mdx`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              linkImagesToOriginal: true,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
          'gatsby-remark-social-cards',
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `wetainment - blog and portfolio`,
        short_name: `wetainment`,
        start_url: `/`,
        background_color: `#AC9B00`,
        theme_color: `#F5DE09`,
        display: `minimal-ui`,
        icon: `content/assets/ic_launcher_512.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
        omitGoogleFont: true,
      },
    },
    {
      resolve: 'gatsby-plugin-matomo',
      options: {
        siteId: '1',
        matomoUrl: 'https://matomo.wetainment.com',
        siteUrl: 'https://wetainment.com',
        // All the optional settings
        // exclude: ['/offline-plugin-app-shell-fallback/'],
        // requireConsent: false,
        disableCookies: true,
        // localScript: '/piwik.js',
        // dev: false,
      },
    },
    // {
    //   resolve: `gatsby-plugin-plausible`,
    //   options: {
    //     domain: `benni-taichi31:19007`,
    //     customDomain: `http://localhost:8050`,
    //   },
    // },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://wetainment.com`,
        stripQueryString: true,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    'gatsby-plugin-remove-serviceworker',
  ],
};
