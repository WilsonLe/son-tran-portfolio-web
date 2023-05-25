import { cloudStorage } from '@payloadcms/plugin-cloud-storage';
import { s3Adapter } from '@payloadcms/plugin-cloud-storage/s3';
import path from 'path';
import { buildConfig } from 'payload/config';
import { media } from './collections/media';
import { footer } from './globals/footer';
import { header } from './globals/header';
import { home } from './globals/home';
import { publications } from './globals/publications';

const adapter = s3Adapter({
  config: {
    forcePathStyle: true,
    region: process.env.S3_REGION as string,
    credentials: {
      accessKeyId: process.env.S3_ACCESS_KEY_ID as string,
      secretAccessKey: process.env.S3_SECRET_ACCESS_KEY as string,
    },
    endpoint: process.env.S3_ENDPOINT as string,
  },
  bucket: process.env.S3_BUCKET as string,
  acl: 'public-read',
});

export default buildConfig({
  plugins: [
    cloudStorage({
      collections: {
        media: {
          adapter,
          generateFileURL: (args) =>
            `${process.env.S3_ENDPOINT}/${process.env.S3_BUCKET}/${args.filename}`,
        },
      },
    }),
  ],
  collections: [media],
  globals: [header, footer, home, publications],
  typescript: {
    outputFile: path.resolve(__dirname, '../payload-types.ts'),
  },
});
