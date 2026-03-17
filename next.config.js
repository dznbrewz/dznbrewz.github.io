/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Optional: Add basePath if you are deploying to https://<username>.github.io/<repo-name>/
  // basePath: '/your-repo-name',
}

module.exports = nextConfig
