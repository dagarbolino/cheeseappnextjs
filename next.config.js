/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cheeseapi.alex-webdev.fr',
        pathname: '/media/**',
      },
    ],
  },
  typescript: {
    tsconfigPath: './tsconfig.json'
  },
  webpack: (config, { dev }) => {
    if (!dev) {
      config.devtool = false;
    }
    return config;
  }
}

module.exports = nextConfig