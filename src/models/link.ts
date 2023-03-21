import { z } from 'zod';
import { NonEmptyString } from './nonEmptyString';

export const LinkData = z.object({
  href: NonEmptyString,
  text: NonEmptyString,
});

export type LinkData = z.infer<typeof LinkData>;
