import { z } from 'zod';
import { LinksWhereInputObjectSchema } from './LinksWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LinksListRelationFilter> = z
  .object({
    every: z.lazy(() => LinksWhereInputObjectSchema).optional(),
    some: z.lazy(() => LinksWhereInputObjectSchema).optional(),
    none: z.lazy(() => LinksWhereInputObjectSchema).optional(),
  })
  .strict();

export const LinksListRelationFilterObjectSchema = Schema;
