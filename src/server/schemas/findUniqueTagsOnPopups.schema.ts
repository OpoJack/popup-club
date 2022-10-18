import { z } from 'zod';
import { TagsOnPopupsWhereUniqueInputObjectSchema } from './objects/TagsOnPopupsWhereUniqueInput.schema';

export const TagsOnPopupsFindUniqueSchema = z.object({
  where: TagsOnPopupsWhereUniqueInputObjectSchema,
});
