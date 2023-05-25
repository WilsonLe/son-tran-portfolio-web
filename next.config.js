const path = require('path');
const { withPayload } = require('@payloadcms/next-payload');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'son-tran-portfolio-cms-bucket.s3.amazonaws.com',
      'son-tran-portfolio-cms-bucket.s3.ap-southeast-1.amazonaws.com',
      'son-tran-portfolio-cms-bucket.s3-ap-southeast-1.amazonaws.com',
      's3.localhost.localstack.cloud',
    ],
  },
};

const payloadConfig = {
  configPath: path.resolve(__dirname, './src/payload/payload.config.ts'),
  payloadPath: path.resolve(process.cwd(), './src/payload/payloadClient.ts'),
};

module.exports = withPayload(nextConfig, payloadConfig);
