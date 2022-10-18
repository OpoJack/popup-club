import { z } from 'zod';
import { TagsWhereUniqueInputObjectSchema } from './objects/TagsWhereUniqueInput.schema';

export const TagsDeleteOneSchema = z.object({
  where: TagsWhereUniqueInputObjectSchema,
});
