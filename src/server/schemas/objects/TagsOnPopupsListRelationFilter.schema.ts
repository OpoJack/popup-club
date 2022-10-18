import { z } from 'zod';
import { TagsOnPopupsWhereInputObjectSchema } from './TagsOnPopupsWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagsOnPopupsListRelationFilter> = z
  .object({
    every: z.lazy(() => TagsOnPopupsWhereInputObjectSchema).optional(),
    some: z.lazy(() => TagsOnPopupsWhereInputObjectSchema).optional(),
    none: z.lazy(() => TagsOnPopupsWhereInputObjectSchema).optional(),
  })
  .strict();

export const TagsOnPopupsListRelationFilterObjectSchema = Schema;
