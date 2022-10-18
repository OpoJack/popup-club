import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { EventOrderByRelationAggregateInputObjectSchema } from './EventOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LocationOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    address: z.lazy(() => SortOrderSchema).optional(),
    city: z.lazy(() => SortOrderSchema).optional(),
    state: z.lazy(() => SortOrderSchema).optional(),
    zip: z.lazy(() => SortOrderSchema).optional(),
    country: z.lazy(() => SortOrderSchema).optional(),
    mapsUrl: z.lazy(() => SortOrderSchema).optional(),
    events: z
      .lazy(() => EventOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const LocationOrderByWithRelationInputObjectSchema = Schema;
