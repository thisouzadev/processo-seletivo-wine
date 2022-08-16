// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true
// }

// module.exports = nextConfig

const withImages = require('next-images')

const nextConfig = {
  withImages: withImages({ esModule: true }),
  rectStrictMode: true
}

module.exports = nextConfig
