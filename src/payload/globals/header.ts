import { GlobalConfig } from 'payload/dist/globals/config/types';
import { Axios } from '../../services/axios';

export const header: GlobalConfig = {
  slug: 'header',
  fields: [
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'navigations',
      type: 'array',
      fields: [
        { name: 'href', type: 'text', required: true },
        { name: 'text', type: 'text', required: true },
      ],
      required: true,
    },
  ],
  hooks: {
    afterChange: [
      async (args) => {
        await Axios.post('/api/revalidate', {
          token: process.env.REVALIDATION_TOKEN,
          paths: ['/', '/publications'],
        });
        return args.doc;
      },
    ],
  },
};
