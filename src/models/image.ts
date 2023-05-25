import { z } from 'zod';
import { NonEmptyString } from './nonEmptyString';

export const ImageData = z
  .object({
    src: NonEmptyString.optional(),
    url: NonEmptyString.optional(),
    alt: NonEmptyString.nullable().transform((alt) =>
      alt !== null ? alt : ''
    ),
  })
  .transform((obj) => ({ ...obj, src: obj.url }));

export type ImageData = z.infer<typeof ImageData>;
