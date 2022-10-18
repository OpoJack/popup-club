import { z } from 'zod';
import { PopupWhereInputObjectSchema } from './PopupWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PopupRelationFilter> = z
  .object({
    is: z.lazy(() => PopupWhereInputObjectSchema).optional(),
    isNot: z.lazy(() => PopupWhereInputObjectSchema).optional(),
  })
  .strict();

export const PopupRelationFilterObjectSchema = Schema;
