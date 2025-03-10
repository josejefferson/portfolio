const PROJECT_PATHS = [
  '/projeto/vagazero',
  '/projeto/chatbot',
  '/projeto/lampys',
  '/projeto/cranio',
  '/projeto/ifpb-lives',
  '/projeto/speak-meet-messages',
  '/projeto/mobystk',
  '/projeto/totp',
  '/projeto/weddytor',
  '/projeto/uno'
]

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://jeffersondantas.vercel.app',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  additionalPaths: async (config) => {
    return PROJECT_PATHS.map((path) => ({
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority - 0.2,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined
    }))
  }
}
