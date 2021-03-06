const siteAddress = new URL("https://www.tivanovit.com/");

module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {}
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Tsvetan's personal website",
        short_name: "Tsvetan's personal website",
        start_url: "/",
        background_color: "#FFF",
        theme_color: "#663399",
        display: "standalone",
        icon: "static/avatar.jpg"
      }
    },
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: "tivanovit.com",
        protocol: siteAddress.protocol.slice(0, -1),
        hostname: siteAddress.hostname
      }
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: siteAddress.href.slice(0, -1)
      }
    },
    `gatsby-plugin-offline`
  ],
  siteMetadata: {
    // Used for the site title and SEO
    title: `Tsvetan's personal website`,
    author: `Tsvetan Ivanov`,
    description: `Personal website by Tsvetan Ivanov. Sharing what I have learned as a software developer`,
    // Used for social links in the root footer
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/tvetan1`
      },
      {
        name: `github`,
        url: `https://github.com/tvetan`
      }
    ]
  }
};
