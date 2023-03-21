import { z } from 'zod';
import { NonEmptyString } from './nonEmptyString';

export const ImageData = z.object({
  src: NonEmptyString,
  alt: NonEmptyString.nullable().transform((alt) => (alt !== null ? alt : '')),
});

export type ImageData = z.infer<typeof ImageData>;
