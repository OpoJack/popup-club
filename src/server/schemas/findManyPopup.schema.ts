import { z } from 'zod';
import { PopupWhereInputObjectSchema } from './objects/PopupWhereInput.schema';
import { PopupOrderByWithRelationInputObjectSchema } from './objects/PopupOrderByWithRelationInput.schema';
import { PopupWhereUniqueInputObjectSchema } from './objects/PopupWhereUniqueInput.schema';
import { PopupScalarFieldEnumSchema } from './enums/PopupScalarFieldEnum.schema';

export const PopupFindManySchema = z.object({
  where: PopupWhereInputObjectSchema.optional(),
  orderBy: PopupOrderByWithRelationInputObjectSchema.optional(),
  cursor: PopupWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(PopupScalarFieldEnumSchema).optional(),
});
