import { z } from 'zod';
import { TagsWhereInputObjectSchema } from './objects/TagsWhereInput.schema';

export const TagsDeleteManySchema = z.object({
  where: TagsWhereInputObjectSchema.optional(),
});
