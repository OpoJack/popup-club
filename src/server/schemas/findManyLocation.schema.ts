import { z } from 'zod';
import { LocationWhereInputObjectSchema } from './objects/LocationWhereInput.schema';
import { LocationOrderByWithRelationInputObjectSchema } from './objects/LocationOrderByWithRelationInput.schema';
import { LocationWhereUniqueInputObjectSchema } from './objects/LocationWhereUniqueInput.schema';
import { LocationScalarFieldEnumSchema } from './enums/LocationScalarFieldEnum.schema';

export const LocationFindManySchema = z.object({
  where: LocationWhereInputObjectSchema.optional(),
  orderBy: LocationOrderByWithRelationInputObjectSchema.optional(),
  cursor: LocationWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(LocationScalarFieldEnumSchema).optional(),
});
