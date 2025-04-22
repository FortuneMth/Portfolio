/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export', // 👈 THIS is what was missing!
}

module.exports = nextConfig;
