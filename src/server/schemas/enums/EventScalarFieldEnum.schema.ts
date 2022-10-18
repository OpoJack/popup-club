import { z } from 'zod';

export const EventScalarFieldEnumSchema = z.enum([
  'id',
  'popupId',
  'locationId',
  'name',
  'description',
  'date',
]);
