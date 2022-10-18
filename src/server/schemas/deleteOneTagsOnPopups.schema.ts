import { z } from 'zod';
import { TagsOnPopupsWhereUniqueInputObjectSchema } from './objects/TagsOnPopupsWhereUniqueInput.schema';

export const TagsOnPopupsDeleteOneSchema = z.object({
  where: TagsOnPopupsWhereUniqueInputObjectSchema,
});
