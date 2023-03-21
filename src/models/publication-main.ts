import { z } from 'zod';
import { NonEmptyString } from './nonEmptyString';
import { PublicationData } from './publication';

export const PublicationMainData = z
  .object({
    title: NonEmptyString,
    publications: z.array(PublicationData).default([]),
  })
  .default({ title: 'Publications', publications: [] });

export type PublicationMainData = z.infer<typeof PublicationMainData>;
