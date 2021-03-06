module.exports = {
  siteMetadata: {
    title: "Mickey Smith Webcorner",
    description: "Mickey Smith personal site and blog",
    author: "Mickey Smith",
    siteUrl: "https://www.mickeysmith.co/",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-postcss",
    "gatsby-plugin-sitemap",
    "gatsby-transformer-remark",
    "gatsby-plugin-mdx",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: `${__dirname}/src/pages`,
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "markdown-pages",
        path: `${__dirname}/src/markdown-pages`,
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "G-GZ9DXY0B64", // Google Analytics / GA
        ],
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Mickey Smith`,
        short_name: `Mickey Smith`,
        description: `Personal website for Mickey Smith`,
        lang: `en`,
        icon: `src/images/terminal.png`,
        start_url: `/`,
      },
    },
  ],
};
