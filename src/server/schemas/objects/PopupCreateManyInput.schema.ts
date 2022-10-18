import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PopupCreateManyInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    description: z.string(),
    basedIn: z.string(),
    isHot: z.boolean(),
    orderType: z.string(),
  })
  .strict();

export const PopupCreateManyInputObjectSchema = Schema;
