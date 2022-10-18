import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { TagsOnPopupsOrderByRelationAggregateInputObjectSchema } from './TagsOnPopupsOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagsOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    popups: z
      .lazy(() => TagsOnPopupsOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const TagsOrderByWithRelationInputObjectSchema = Schema;
