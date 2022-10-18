import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { PopupRelationFilterObjectSchema } from './PopupRelationFilter.schema';
import { PopupWhereInputObjectSchema } from './PopupWhereInput.schema';
import { TagsRelationFilterObjectSchema } from './TagsRelationFilter.schema';
import { TagsWhereInputObjectSchema } from './TagsWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagsOnPopupsWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => TagsOnPopupsWhereInputObjectSchema),
        z.lazy(() => TagsOnPopupsWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => TagsOnPopupsWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => TagsOnPopupsWhereInputObjectSchema),
        z.lazy(() => TagsOnPopupsWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    popup: z
      .union([
        z.lazy(() => PopupRelationFilterObjectSchema),
        z.lazy(() => PopupWhereInputObjectSchema),
      ])
      .optional(),
    popupId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    tag: z
      .union([
        z.lazy(() => TagsRelationFilterObjectSchema),
        z.lazy(() => TagsWhereInputObjectSchema),
      ])
      .optional(),
    tagId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
  })
  .strict();

export const TagsOnPopupsWhereInputObjectSchema = Schema;
