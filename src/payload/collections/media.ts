import { CollectionConfig } from 'payload/dist/collections/config/types';

export const media: CollectionConfig = {
  slug: 'media',
  upload: {
    staticURL: '/media',
    staticDir: 'media',
    adminThumbnail: ({ doc }) => (typeof doc.url === 'string' ? doc.url : ''),
    disableLocalStorage: true,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
      admin: {
        description:
          "What text to display when there's an error loading image. This should be a textual description of the image. I.e My profile picture",
      },
    },
    {
      name: 'src',
      type: 'text',
      admin: { hidden: true },
    },
  ],
};
