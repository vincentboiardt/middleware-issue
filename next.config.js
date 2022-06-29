/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    defaultLocale: 'default',
    locales: ['default', 'en', 'sv', 'de', 'fr'],
    localeDetection: false,
  },
}

module.exports = nextConfig
