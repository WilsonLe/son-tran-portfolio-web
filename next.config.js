/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'son-tran-portfolio-cms-bucket.s3.amazonaws.com',
      'son-tran-portfolio-cms-bucket.s3.ap-southeast-1.amazonaws.com',
      'son-tran-portfolio-cms-bucket.s3-ap-southeast-1.amazonaws.com',
    ],
  },
};

module.exports = nextConfig;
