import { z } from 'zod';
import { PopupWhereInputObjectSchema } from './objects/PopupWhereInput.schema';
import { PopupOrderByWithRelationInputObjectSchema } from './objects/PopupOrderByWithRelationInput.schema';
import { PopupWhereUniqueInputObjectSchema } from './objects/PopupWhereUniqueInput.schema';

export const PopupAggregateSchema = z.object({
  where: PopupWhereInputObjectSchema.optional(),
  orderBy: PopupOrderByWithRelationInputObjectSchema.optional(),
  cursor: PopupWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
});
