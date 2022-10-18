import { z } from 'zod';
import { TagsWhereUniqueInputObjectSchema } from './objects/TagsWhereUniqueInput.schema';
import { TagsCreateInputObjectSchema } from './objects/TagsCreateInput.schema';
import { TagsUpdateInputObjectSchema } from './objects/TagsUpdateInput.schema';

export const TagsUpsertSchema = z.object({
  where: TagsWhereUniqueInputObjectSchema,
  create: TagsCreateInputObjectSchema,
  update: TagsUpdateInputObjectSchema,
});
