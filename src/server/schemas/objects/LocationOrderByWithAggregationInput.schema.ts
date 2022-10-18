import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { LocationCountOrderByAggregateInputObjectSchema } from './LocationCountOrderByAggregateInput.schema';
import { LocationMaxOrderByAggregateInputObjectSchema } from './LocationMaxOrderByAggregateInput.schema';
import { LocationMinOrderByAggregateInputObjectSchema } from './LocationMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LocationOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    address: z.lazy(() => SortOrderSchema).optional(),
    city: z.lazy(() => SortOrderSchema).optional(),
    state: z.lazy(() => SortOrderSchema).optional(),
    zip: z.lazy(() => SortOrderSchema).optional(),
    country: z.lazy(() => SortOrderSchema).optional(),
    mapsUrl: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => LocationCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z.lazy(() => LocationMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => LocationMinOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const LocationOrderByWithAggregationInputObjectSchema = Schema;
