import { z } from 'zod';
import { TagsOnPopupsWhereInputObjectSchema } from './objects/TagsOnPopupsWhereInput.schema';
import { TagsOnPopupsOrderByWithRelationInputObjectSchema } from './objects/TagsOnPopupsOrderByWithRelationInput.schema';
import { TagsOnPopupsWhereUniqueInputObjectSchema } from './objects/TagsOnPopupsWhereUniqueInput.schema';
import { TagsOnPopupsScalarFieldEnumSchema } from './enums/TagsOnPopupsScalarFieldEnum.schema';

export const TagsOnPopupsFindFirstSchema = z.object({
  where: TagsOnPopupsWhereInputObjectSchema.optional(),
  orderBy: TagsOnPopupsOrderByWithRelationInputObjectSchema.optional(),
  cursor: TagsOnPopupsWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(TagsOnPopupsScalarFieldEnumSchema).optional(),
});
