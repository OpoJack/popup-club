import { z } from 'zod';
import { LocationCreateInputObjectSchema } from './objects/LocationCreateInput.schema';

export const LocationCreateOneSchema = z.object({
  data: LocationCreateInputObjectSchema,
});
