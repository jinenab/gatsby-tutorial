require("dotenv").config({
  path:`.env.${process.env.NODE_ENV}`
})

module.exports = {
  siteMetadata: {
    title: "Gatsby Tutorial",
    description: "some random dectiption",
    author: "@johndoe",
    data: ["item1", "item2"],
    person: { name: "Jinen", age: 23 },
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `i63zedzhc27c`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken:process.env.ACCESS_TOKEN
      },
    },
  ],
}
