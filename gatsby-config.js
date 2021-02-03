module.exports = {
  siteMetadata: {
    title: "Mickey Smith Webcorner",
    description: "Mickey Smith personal site and blog",
    author: "Mickey Smith",
    siteUrl: "https://www.mickeysmith.co/",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-mdx",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
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
    "gatsby-transformer-remark",
    "gatsby-plugin-postcss",
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
  ],
};
