/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  optimizeFonts: false,
  compiler: {
    styledComponents: true
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  },
  async rewrites() {
    return [
      {
        source: '/sobre',
        destination: '/about',
      },
      {
        source: '/contato',
        destination: '/contact',
      },
      {
        source: '/politicasprivacidade',
        destination: '/privacypolicy',
      },
      {
        source: '/termosdeuso',
        destination: '/termsofuse',
      },
    ]
  }
}

module.exports = nextConfig
