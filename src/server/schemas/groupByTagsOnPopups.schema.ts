import { z } from 'zod';
import { TagsOnPopupsWhereInputObjectSchema } from './objects/TagsOnPopupsWhereInput.schema';
import { TagsOnPopupsOrderByWithAggregationInputObjectSchema } from './objects/TagsOnPopupsOrderByWithAggregationInput.schema';
import { TagsOnPopupsScalarWhereWithAggregatesInputObjectSchema } from './objects/TagsOnPopupsScalarWhereWithAggregatesInput.schema';
import { TagsOnPopupsScalarFieldEnumSchema } from './enums/TagsOnPopupsScalarFieldEnum.schema';

export const TagsOnPopupsGroupBySchema = z.object({
  where: TagsOnPopupsWhereInputObjectSchema.optional(),
  orderBy: TagsOnPopupsOrderByWithAggregationInputObjectSchema,
  having: TagsOnPopupsScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(TagsOnPopupsScalarFieldEnumSchema),
});
