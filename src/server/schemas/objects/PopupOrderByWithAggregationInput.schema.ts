import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { PopupCountOrderByAggregateInputObjectSchema } from './PopupCountOrderByAggregateInput.schema';
import { PopupMaxOrderByAggregateInputObjectSchema } from './PopupMaxOrderByAggregateInput.schema';
import { PopupMinOrderByAggregateInputObjectSchema } from './PopupMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PopupOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    description: z.lazy(() => SortOrderSchema).optional(),
    basedIn: z.lazy(() => SortOrderSchema).optional(),
    isHot: z.lazy(() => SortOrderSchema).optional(),
    orderType: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => PopupCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z.lazy(() => PopupMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => PopupMinOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const PopupOrderByWithAggregationInputObjectSchema = Schema;
