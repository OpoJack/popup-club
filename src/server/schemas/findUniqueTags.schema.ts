import { z } from 'zod';
import { TagsWhereUniqueInputObjectSchema } from './objects/TagsWhereUniqueInput.schema';

export const TagsFindUniqueSchema = z.object({
  where: TagsWhereUniqueInputObjectSchema,
});
