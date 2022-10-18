import { z } from 'zod';

export const LocationScalarFieldEnumSchema = z.enum([
  'id',
  'name',
  'address',
  'city',
  'state',
  'zip',
  'country',
  'mapsUrl',
]);
