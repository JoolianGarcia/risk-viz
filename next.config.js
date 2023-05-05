/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    TOKEAPBOX_ACCESS_TOKEN: process.env.NEXT_PUBLIC_TOKEAPBOX_ACCESS_TOKEN,
  },
};

module.exports = nextConfig;
