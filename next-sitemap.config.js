/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.wisdom-construction.com',
  generateRobotsTxt: true,
  sitemapSize: 5000,
  output: 'export',
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
  additionalPaths: async () => {
    return [
      {
        loc: 'https://www.wisdom-construction.com/our-achievements',
        priority: 1,
        lastmod: new Date().toISOString(),
      },
      {
        loc: 'https://www.wisdom-construction.com/about',
        priority: 1,
        lastmod: new Date().toISOString(),
      },
    ];
  },
};
