import { z } from 'zod';
import { TagsUpdateInputObjectSchema } from './objects/TagsUpdateInput.schema';
import { TagsWhereUniqueInputObjectSchema } from './objects/TagsWhereUniqueInput.schema';

export const TagsUpdateOneSchema = z.object({
  data: TagsUpdateInputObjectSchema,
  where: TagsWhereUniqueInputObjectSchema,
});
