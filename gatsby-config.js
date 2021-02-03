module.exports = {
  siteMetadata: {
    title: "Mickey Smith Webcorner",
    description: "Mickey Smith personal site and blog",
    author: "Mickey Smith",
    siteUrl: "https://main.d33jpt7udphr59.amplifyapp.com/",
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
          "UA-181946115-1"
        ],
      },
    },
  ],
};
