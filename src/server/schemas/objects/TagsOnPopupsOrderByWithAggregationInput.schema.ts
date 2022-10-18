import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { TagsOnPopupsCountOrderByAggregateInputObjectSchema } from './TagsOnPopupsCountOrderByAggregateInput.schema';
import { TagsOnPopupsMaxOrderByAggregateInputObjectSchema } from './TagsOnPopupsMaxOrderByAggregateInput.schema';
import { TagsOnPopupsMinOrderByAggregateInputObjectSchema } from './TagsOnPopupsMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagsOnPopupsOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    popupId: z.lazy(() => SortOrderSchema).optional(),
    tagId: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => TagsOnPopupsCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => TagsOnPopupsMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => TagsOnPopupsMinOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const TagsOnPopupsOrderByWithAggregationInputObjectSchema = Schema;
