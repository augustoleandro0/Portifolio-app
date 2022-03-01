/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

  const compiler = {
    // Enables the styled-components SWC transform
    styledComponents: true,
  }

module.exports = {nextConfig, compiler}
