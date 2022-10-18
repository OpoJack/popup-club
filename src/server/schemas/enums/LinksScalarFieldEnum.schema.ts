import { z } from 'zod';

export const LinksScalarFieldEnumSchema = z.enum([
  'id',
  'popupId',
  'imageUrl',
  'facebook',
  'instagram',
  'twitter',
  'website',
  'youtube',
]);
