import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { TagsOnPopupsListRelationFilterObjectSchema } from './TagsOnPopupsListRelationFilter.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';
import { EventListRelationFilterObjectSchema } from './EventListRelationFilter.schema';
import { LinksListRelationFilterObjectSchema } from './LinksListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PopupWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => PopupWhereInputObjectSchema),
        z.lazy(() => PopupWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => PopupWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => PopupWhereInputObjectSchema),
        z.lazy(() => PopupWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    name: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    description: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    basedIn: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    tags: z.lazy(() => TagsOnPopupsListRelationFilterObjectSchema).optional(),
    isHot: z
      .union([z.lazy(() => BoolFilterObjectSchema), z.boolean()])
      .optional(),
    orderType: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    events: z.lazy(() => EventListRelationFilterObjectSchema).optional(),
    links: z.lazy(() => LinksListRelationFilterObjectSchema).optional(),
  })
  .strict();

export const PopupWhereInputObjectSchema = Schema;
