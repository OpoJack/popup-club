import { z } from 'zod';
import { TagsWhereInputObjectSchema } from './objects/TagsWhereInput.schema';
import { TagsOrderByWithAggregationInputObjectSchema } from './objects/TagsOrderByWithAggregationInput.schema';
import { TagsScalarWhereWithAggregatesInputObjectSchema } from './objects/TagsScalarWhereWithAggregatesInput.schema';
import { TagsScalarFieldEnumSchema } from './enums/TagsScalarFieldEnum.schema';

export const TagsGroupBySchema = z.object({
  where: TagsWhereInputObjectSchema.optional(),
  orderBy: TagsOrderByWithAggregationInputObjectSchema,
  having: TagsScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(TagsScalarFieldEnumSchema),
});
