import { z } from 'zod';
import { TagsOnPopupsWhereInputObjectSchema } from './objects/TagsOnPopupsWhereInput.schema';
import { TagsOnPopupsOrderByWithRelationInputObjectSchema } from './objects/TagsOnPopupsOrderByWithRelationInput.schema';
import { TagsOnPopupsWhereUniqueInputObjectSchema } from './objects/TagsOnPopupsWhereUniqueInput.schema';

export const TagsOnPopupsAggregateSchema = z.object({
  where: TagsOnPopupsWhereInputObjectSchema.optional(),
  orderBy: TagsOnPopupsOrderByWithRelationInputObjectSchema.optional(),
  cursor: TagsOnPopupsWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
});
