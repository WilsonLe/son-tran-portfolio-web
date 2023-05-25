import { GlobalConfig } from 'payload/dist/globals/config/types';

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
};
