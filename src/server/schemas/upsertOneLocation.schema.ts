import { z } from 'zod';
import { LocationWhereUniqueInputObjectSchema } from './objects/LocationWhereUniqueInput.schema';
import { LocationCreateInputObjectSchema } from './objects/LocationCreateInput.schema';
import { LocationUpdateInputObjectSchema } from './objects/LocationUpdateInput.schema';

export const LocationUpsertSchema = z.object({
  where: LocationWhereUniqueInputObjectSchema,
  create: LocationCreateInputObjectSchema,
  update: LocationUpdateInputObjectSchema,
});
