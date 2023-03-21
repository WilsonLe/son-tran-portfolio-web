import type { NextApiRequest, NextApiResponse } from 'next';
import { z } from 'zod';
import { Config } from '../../config';
import { CMSEntity } from '../../models/cmsEntity';
import { CMSWebhookEvent } from '../../models/cmsWebhookEvent';
import { Routes } from '../../models/routes';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // validate request method
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  // authorize request
  if (req.headers.authorization !== `Bearer ${Config.cmsWebhookToken}`) {
    console.error(`unauthorized: ${req.headers.authorization}`);
    return res.status(401).json({ message: 'Unauthorized' });
  }

  // parse request body
  let body: {
    event: CMSWebhookEvent;
    model: CMSEntity;
  };
  try {
    body = z
      .object({
        event: z.nativeEnum(CMSWebhookEvent),
        model: z.nativeEnum(CMSEntity),
      })
      .parse(req.body);
  } catch (error) {
    console.error(error);
    return res.status(400).json({ message: 'Invalid input' });
  }

  const entityDependencies = {
    [CMSEntity.Publication]: [Routes.Publications],
    [CMSEntity.PublicationMain]: [Routes.Publications],
    [CMSEntity.Footer]: [Routes.Home, Routes.Publications],
    [CMSEntity.Header]: [Routes.Home, Routes.Publications],
    [CMSEntity.Home]: [Routes.Home],
  };

  try {
    await Promise.all(
      entityDependencies[body.model].map((route) => res.revalidate(route))
    );
  } catch (error) {
    // If there was an error, Next.js will continue
    // to show the last successfully generated page
    console.error(error);
    return res.status(500).send({ message: 'Internal server error' });
  }
  return res.status(200).json({ message: 'ok' });
}
