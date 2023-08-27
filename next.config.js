/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname: 'localhost',
      },
    ],
  },
}

const withVideos = require('next-videos');

module.exports = withVideos();

