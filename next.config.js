/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'github.com',
        port: '',
        pathname: '/Daniel-Guimaraes.png',
      },
    ],
  },
}

module.exports = nextConfig
