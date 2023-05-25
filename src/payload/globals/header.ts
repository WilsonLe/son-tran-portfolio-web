import { GlobalConfig } from 'payload/dist/globals/config/types';

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
};
