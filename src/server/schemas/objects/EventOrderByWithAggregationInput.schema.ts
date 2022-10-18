import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { EventCountOrderByAggregateInputObjectSchema } from './EventCountOrderByAggregateInput.schema';
import { EventMaxOrderByAggregateInputObjectSchema } from './EventMaxOrderByAggregateInput.schema';
import { EventMinOrderByAggregateInputObjectSchema } from './EventMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EventOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    popupId: z.lazy(() => SortOrderSchema).optional(),
    locationId: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    description: z.lazy(() => SortOrderSchema).optional(),
    date: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => EventCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z.lazy(() => EventMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => EventMinOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const EventOrderByWithAggregationInputObjectSchema = Schema;
