import { z } from 'zod';
import { NonEmptyString } from './nonEmptyString';

export const PublicationData = z.object({ content: NonEmptyString });

export type PublicationData = z.infer<typeof PublicationData>;
