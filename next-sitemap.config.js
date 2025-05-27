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
        priority: 0.8, // เพิ่ม priority
        lastmod: new Date().toISOString(),
      },
      {
        loc: 'https://www.wisdom-construction.com/about',
        priority: 0.6,
        lastmod: new Date().toISOString(),
      },
    ];
  },
};
