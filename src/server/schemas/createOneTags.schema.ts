import { z } from 'zod';
import { TagsCreateInputObjectSchema } from './objects/TagsCreateInput.schema';

export const TagsCreateOneSchema = z.object({
  data: TagsCreateInputObjectSchema,
});
