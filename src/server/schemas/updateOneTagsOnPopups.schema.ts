import { z } from 'zod';
import { TagsOnPopupsUpdateInputObjectSchema } from './objects/TagsOnPopupsUpdateInput.schema';
import { TagsOnPopupsWhereUniqueInputObjectSchema } from './objects/TagsOnPopupsWhereUniqueInput.schema';

export const TagsOnPopupsUpdateOneSchema = z.object({
  data: TagsOnPopupsUpdateInputObjectSchema,
  where: TagsOnPopupsWhereUniqueInputObjectSchema,
});
