import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { TagsOnPopupsListRelationFilterObjectSchema } from './TagsOnPopupsListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagsWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => TagsWhereInputObjectSchema),
        z.lazy(() => TagsWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => TagsWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => TagsWhereInputObjectSchema),
        z.lazy(() => TagsWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    name: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    popups: z.lazy(() => TagsOnPopupsListRelationFilterObjectSchema).optional(),
  })
  .strict();

export const TagsWhereInputObjectSchema = Schema;
