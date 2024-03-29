/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    loader: 'akamai',
    path: '',
  },
  trailingSlash: true,
  experimental: {
    newNextLinkBehavior: false,
  },
};
