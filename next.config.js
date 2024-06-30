/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  experimental: { 
    nftTracing: true 
  },
  async rewrites() {
    return [
      {
        source: '/api/:path',
        destination: 'https://h4v0lcgy.api.sanity.io/v1/data/query/production?query',
      },
    ]
  },
}
