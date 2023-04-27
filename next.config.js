/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    mapbox_key:
      "pk.eyJ1Ijoiam9vbGlhbiIsImEiOiJjbGd6YjgxYWcwYWZpM3FveHoyNWRmY2t4In0.dGvhZK7fqrao1Sjd5BYaxg",
  },
};

module.exports = nextConfig;
