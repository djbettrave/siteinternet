/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'impression3d.inphenix-system.fr',
      },
    ],
  },
}

module.exports = nextConfig
