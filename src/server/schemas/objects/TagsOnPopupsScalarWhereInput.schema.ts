import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagsOnPopupsScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => TagsOnPopupsScalarWhereInputObjectSchema),
        z.lazy(() => TagsOnPopupsScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => TagsOnPopupsScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => TagsOnPopupsScalarWhereInputObjectSchema),
        z.lazy(() => TagsOnPopupsScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    popupId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    tagId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
  })
  .strict();

export const TagsOnPopupsScalarWhereInputObjectSchema = Schema;
