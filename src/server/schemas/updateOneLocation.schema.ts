import { z } from 'zod';
import { LocationUpdateInputObjectSchema } from './objects/LocationUpdateInput.schema';
import { LocationWhereUniqueInputObjectSchema } from './objects/LocationWhereUniqueInput.schema';

export const LocationUpdateOneSchema = z.object({
  data: LocationUpdateInputObjectSchema,
  where: LocationWhereUniqueInputObjectSchema,
});
