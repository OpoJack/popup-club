import { z } from 'zod';
import { TagsCreateManyInputObjectSchema } from './objects/TagsCreateManyInput.schema';

export const TagsCreateManySchema = z.object({
  data: TagsCreateManyInputObjectSchema,
});
