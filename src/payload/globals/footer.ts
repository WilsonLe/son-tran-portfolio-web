import { GlobalConfig } from 'payload/dist/globals/config/types';

export const footer: GlobalConfig = {
  slug: 'footer',
  fields: [
    {
      name: 'columns',
      type: 'array',
      fields: [{ name: 'content', type: "richText", required: true }],
      required: true,
    },
  ],
};
