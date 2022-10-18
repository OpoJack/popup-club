import { z } from 'zod';
import { TagsOnPopupsCreateInputObjectSchema } from './objects/TagsOnPopupsCreateInput.schema';

export const TagsOnPopupsCreateOneSchema = z.object({
  data: TagsOnPopupsCreateInputObjectSchema,
});
