import { z } from 'zod';
import { TagsUpdateManyMutationInputObjectSchema } from './objects/TagsUpdateManyMutationInput.schema';
import { TagsWhereInputObjectSchema } from './objects/TagsWhereInput.schema';

export const TagsUpdateManySchema = z.object({
  data: TagsUpdateManyMutationInputObjectSchema,
  where: TagsWhereInputObjectSchema.optional(),
});
