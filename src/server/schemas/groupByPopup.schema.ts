import { z } from 'zod';
import { PopupWhereInputObjectSchema } from './objects/PopupWhereInput.schema';
import { PopupOrderByWithAggregationInputObjectSchema } from './objects/PopupOrderByWithAggregationInput.schema';
import { PopupScalarWhereWithAggregatesInputObjectSchema } from './objects/PopupScalarWhereWithAggregatesInput.schema';
import { PopupScalarFieldEnumSchema } from './enums/PopupScalarFieldEnum.schema';

export const PopupGroupBySchema = z.object({
  where: PopupWhereInputObjectSchema.optional(),
  orderBy: PopupOrderByWithAggregationInputObjectSchema,
  having: PopupScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(PopupScalarFieldEnumSchema),
});
