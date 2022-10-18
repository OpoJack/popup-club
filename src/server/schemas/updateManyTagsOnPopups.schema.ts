import { z } from 'zod';
import { TagsOnPopupsUpdateManyMutationInputObjectSchema } from './objects/TagsOnPopupsUpdateManyMutationInput.schema';
import { TagsOnPopupsWhereInputObjectSchema } from './objects/TagsOnPopupsWhereInput.schema';

export const TagsOnPopupsUpdateManySchema = z.object({
  data: TagsOnPopupsUpdateManyMutationInputObjectSchema,
  where: TagsOnPopupsWhereInputObjectSchema.optional(),
});
