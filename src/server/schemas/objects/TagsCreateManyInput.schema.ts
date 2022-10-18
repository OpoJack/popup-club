import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagsCreateManyInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
  })
  .strict();

export const TagsCreateManyInputObjectSchema = Schema;
