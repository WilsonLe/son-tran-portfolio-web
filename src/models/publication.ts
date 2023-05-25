import { z } from 'zod';
import { serializeHTML } from '../serializeHtml';

export const PublicationData = z.object({
  content: z.any().transform(serializeHTML).default(''),
});

export type PublicationData = z.infer<typeof PublicationData>;
