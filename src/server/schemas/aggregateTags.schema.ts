import { z } from 'zod';
import { TagsWhereInputObjectSchema } from './objects/TagsWhereInput.schema';
import { TagsOrderByWithRelationInputObjectSchema } from './objects/TagsOrderByWithRelationInput.schema';
import { TagsWhereUniqueInputObjectSchema } from './objects/TagsWhereUniqueInput.schema';

export const TagsAggregateSchema = z.object({
  where: TagsWhereInputObjectSchema.optional(),
  orderBy: TagsOrderByWithRelationInputObjectSchema.optional(),
  cursor: TagsWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
});
