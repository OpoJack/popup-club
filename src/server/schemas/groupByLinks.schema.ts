import { z } from 'zod';
import { LinksWhereInputObjectSchema } from './objects/LinksWhereInput.schema';
import { LinksOrderByWithAggregationInputObjectSchema } from './objects/LinksOrderByWithAggregationInput.schema';
import { LinksScalarWhereWithAggregatesInputObjectSchema } from './objects/LinksScalarWhereWithAggregatesInput.schema';
import { LinksScalarFieldEnumSchema } from './enums/LinksScalarFieldEnum.schema';

export const LinksGroupBySchema = z.object({
  where: LinksWhereInputObjectSchema.optional(),
  orderBy: LinksOrderByWithAggregationInputObjectSchema,
  having: LinksScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(LinksScalarFieldEnumSchema),
});
