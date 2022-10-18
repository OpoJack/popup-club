import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagsOnPopupsCreateManyTagInput> = z
  .object({
    id: z.string().optional(),
    popupId: z.string(),
  })
  .strict();

export const TagsOnPopupsCreateManyTagInputObjectSchema = Schema;
