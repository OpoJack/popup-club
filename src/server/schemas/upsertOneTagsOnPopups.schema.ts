import { z } from 'zod';
import { TagsOnPopupsWhereUniqueInputObjectSchema } from './objects/TagsOnPopupsWhereUniqueInput.schema';
import { TagsOnPopupsCreateInputObjectSchema } from './objects/TagsOnPopupsCreateInput.schema';
import { TagsOnPopupsUpdateInputObjectSchema } from './objects/TagsOnPopupsUpdateInput.schema';

export const TagsOnPopupsUpsertSchema = z.object({
  where: TagsOnPopupsWhereUniqueInputObjectSchema,
  create: TagsOnPopupsCreateInputObjectSchema,
  update: TagsOnPopupsUpdateInputObjectSchema,
});
