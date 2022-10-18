import { z } from 'zod';
import { TagsOnPopupsWhereInputObjectSchema } from './objects/TagsOnPopupsWhereInput.schema';

export const TagsOnPopupsDeleteManySchema = z.object({
  where: TagsOnPopupsWhereInputObjectSchema.optional(),
});
