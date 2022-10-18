import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagsOnPopupsUncheckedCreateInput> = z
  .object({
    id: z.string().optional(),
    popupId: z.string(),
    tagId: z.string(),
  })
  .strict();

export const TagsOnPopupsUncheckedCreateInputObjectSchema = Schema;
