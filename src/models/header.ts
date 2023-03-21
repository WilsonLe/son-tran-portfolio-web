import { z } from 'zod';
import { ImageData } from './image';
import { LinkData } from './link';

export const HeaderData = z
  .object({
    logo: ImageData,
    navigations: z.array(LinkData),
  })
  .default({
    logo: {
      src: '/denison.jpg',
      alt: 'Denison University logo',
    },
    navigations: [
      { href: '/', text: 'Home' },
      { href: '/publications', text: 'Publications' },
    ],
  });

export type HeaderData = z.infer<typeof HeaderData>;
