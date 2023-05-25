import { GlobalConfig } from 'payload/dist/globals/config/types';
import { Axios } from '../../services/axios';

export const home: GlobalConfig = {
  slug: 'home',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'text',
      required: true,
    },
    {
      name: 'favicon',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'primaryHeader',
      type: 'text',
      required: true,
    },
    {
      name: 'secondaryHeader',
      type: 'text',
      required: true,
    },
    {
      name: 'content',
      type: 'richText',
      required: true,
    },
    {
      name: 'buttonText',
      type: 'text',
      required: true,
    },
    {
      name: 'downloadFile',
      type: 'text',
      required: true,
    },
    {
      name: 'profilePicture',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
  ],
  hooks: {
    afterChange: [
      async (args) => {
        await Axios.post('/api/revalidate', {
          token: process.env.REVALIDATION_TOKEN,
          paths: ['/'],
        });
        return args.doc;
      },
    ],
  },
};
