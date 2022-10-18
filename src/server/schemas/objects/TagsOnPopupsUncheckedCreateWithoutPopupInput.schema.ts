import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagsOnPopupsUncheckedCreateWithoutPopupInput> = z
  .object({
    id: z.string().optional(),
    tagId: z.string(),
  })
  .strict();

export const TagsOnPopupsUncheckedCreateWithoutPopupInputObjectSchema = Schema;
