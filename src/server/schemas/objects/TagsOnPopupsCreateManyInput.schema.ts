import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagsOnPopupsCreateManyInput> = z
  .object({
    id: z.string().optional(),
    popupId: z.string(),
    tagId: z.string(),
  })
  .strict();

export const TagsOnPopupsCreateManyInputObjectSchema = Schema;
