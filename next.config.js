const withImages = require('next-images')

module.exports = withImages({
  esModule: true,
  trailingSlash: true,
  async headers() {
    return [
      {
        source: '/:path*/',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          }
        ]
      }
    ]
  }
})
