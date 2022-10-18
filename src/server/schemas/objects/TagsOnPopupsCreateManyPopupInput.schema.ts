import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagsOnPopupsCreateManyPopupInput> = z
  .object({
    id: z.string().optional(),
    tagId: z.string(),
  })
  .strict();

export const TagsOnPopupsCreateManyPopupInputObjectSchema = Schema;
