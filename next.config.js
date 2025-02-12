/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  publicRuntimeConfig: {
    googleVerification: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION
  }
}

module.exports = nextConfig
