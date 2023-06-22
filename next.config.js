/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  reactStrictMode: true,
};

module.exports = nextConfig;

module.exports = {
  async redirects() {
    return [
      {
        source: '/About',
        destination: '/about',
        permanent: false,
      },
      {
        source: '/Contact',
        destination: '/contact',
        permanent: false,
      },
      {
        source: '/Live',
        destination: '/live',
        permanent: false,
      },
      {
        source: '/Login',
        destination: '/login',
        permanent: false,
      },
    ]
  },
}


