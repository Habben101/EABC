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
        permanent: true,
      },
      {
        source: '/Contact',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/Live',
        destination: '/live',
        permanent: true,
      },
      {
        source: '/Login',
        destination: '/login',
        permanent: true,
      },
    ]
  },
}


