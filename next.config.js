// /** @type {import('next').NextConfig} */
// module.exports = {
//   reactStrictMode: true,
// }

const withPlugins = require('next-compose-plugins')

module.exports = withPlugins(
  [],
  {
    // Other Config Here...
    // reactStrictMode: true,
    webpack(config) {
      return config
    },
    experimental: {
      scrollRestoration: true,
    },
    eslint: {
      // Warning: Dangerously allow production builds to successfully complete even if
      // your project has ESLint errors.
      ignoreDuringBuilds: true,
    },
    // replacing Terser with SWC for minifying JavaScript up to 7x faster
    swcMinify: true,
    // https://nextjs.org/docs/advanced-features/i18n-routing
    i18n: {
      locales: [
        'en',
        // 'zh-Hans',
      ],
      defaultLocale: 'en',
    },
    serverRuntimeConfig: {
      // Will only be available on the server side
    },
    publicRuntimeConfig: {
      // Will be available on both server and client
      CORE_API_URL: process.env.CORE_API_URL || 'https://api-dev.web3games.com/client/v1',
      MARKETPLACE_API_URL: process.env.MARKETPLACE_API_URL || 'https://api-marketplace-dev.web3games.com/client/v1',
      APP_URL: process.env.APP_URL || 'http://localhost:3000',
      // NODE_ENV: process.env.NODE_ENV || 'production',
    },
  })
