import { z } from 'zod';
import { TagsOnPopupsCreateManyInputObjectSchema } from './objects/TagsOnPopupsCreateManyInput.schema';

export const TagsOnPopupsCreateManySchema = z.object({
  data: TagsOnPopupsCreateManyInputObjectSchema,
});
