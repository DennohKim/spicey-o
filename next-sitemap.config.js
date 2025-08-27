/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://spiceyo.food", // <-- production domain
  generateRobotsTxt: true, // (optional) generate robots.txt file
  sitemapSize: 7000, // splits sitemaps if you have tons of URLs
  changefreq: "daily",
  priority: 0.7,
  exclude: ["/admin/*", "/private/*"], // exclude pages if needed
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" },
      { userAgent: "BadBot", disallow: "/" }, // optional
    ],
  },
};
