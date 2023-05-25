import { GlobalConfig } from 'payload/dist/globals/config/types';
import { Axios } from '../../services/axios';

export const footer: GlobalConfig = {
  slug: 'footer',
  fields: [
    {
      name: 'columns',
      type: 'array',
      fields: [{ name: 'content', type: 'richText', required: true }],
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
