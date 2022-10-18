import { z } from 'zod';
import { TagsWhereInputObjectSchema } from './TagsWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagsRelationFilter> = z
  .object({
    is: z.lazy(() => TagsWhereInputObjectSchema).optional(),
    isNot: z.lazy(() => TagsWhereInputObjectSchema).optional(),
  })
  .strict();

export const TagsRelationFilterObjectSchema = Schema;
