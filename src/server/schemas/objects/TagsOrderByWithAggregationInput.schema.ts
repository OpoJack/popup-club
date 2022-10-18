import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { TagsCountOrderByAggregateInputObjectSchema } from './TagsCountOrderByAggregateInput.schema';
import { TagsMaxOrderByAggregateInputObjectSchema } from './TagsMaxOrderByAggregateInput.schema';
import { TagsMinOrderByAggregateInputObjectSchema } from './TagsMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagsOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    _count: z.lazy(() => TagsCountOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => TagsMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => TagsMinOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const TagsOrderByWithAggregationInputObjectSchema = Schema;
