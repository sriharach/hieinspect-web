/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.wisdom-construction.com',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  output: 'export',
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/about'],
      },
    ],
  },
  additionalPaths: async () => {
    return [
      {
        loc: 'https://www.wisdom-construction.com/our-achievements',
        lastmod: new Date().toISOString(),
      },
    ];
  },
};
