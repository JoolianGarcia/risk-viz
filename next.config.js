/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    mapbox_key:
      "pk.eyJ1Ijoiam9vbGlhbiIsImEiOiJjbGd3ZXA3Y3owYjdjM2pxdDV6MDk4NHRhIn0.jBaNMthKcmkofIU5tgYCrg",
  },
};

module.exports = nextConfig;
