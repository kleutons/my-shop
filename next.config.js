/** @type {import('next').NextConfig} */
const nextConfig = {
      images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'kleutons.github.io',
            port: '',
            pathname: '/api-myshop/**',
          },
        ],
      },
}

module.exports = nextConfig
