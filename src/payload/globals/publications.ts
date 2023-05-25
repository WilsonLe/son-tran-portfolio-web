import { GlobalConfig } from 'payload/dist/globals/config/types';
import { Axios } from '../../services/axios';

export const publications: GlobalConfig = {
  slug: 'publications',
  fields: [
    { name: 'title', type: 'text', required: true },
    {
      name: 'publications',
      type: 'array',
      fields: [{ name: 'content', type: 'richText', required: true }],
    },
  ],
  hooks: {
    afterChange: [
      async (args) => {
        await Axios.post('/api/revalidate', {
          token: process.env.REVALIDATION_TOKEN,
          paths: ['/publications'],
        });
        return args.doc;
      },
    ],
  },
};
