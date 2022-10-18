import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagsOnPopupsUncheckedCreateWithoutTagInput> = z
  .object({
    id: z.string().optional(),
    popupId: z.string(),
  })
  .strict();

export const TagsOnPopupsUncheckedCreateWithoutTagInputObjectSchema = Schema;
