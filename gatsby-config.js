/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: "Zul Fahri Baihaqi • Portfolio",
    description: "A portfolio website showcasing my projects and skills.",
    author: "Zul Fahri Baihaqi",
    siteUrl: "https://zurihaqi.github.io",
    keywords:
      "Zul Fahri Baihaqi, portfolio, zul fahri baihaqi, zurihaqi, web developer, freelancer",
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        output: "/sitemap.xml",
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
  ],
};
