import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { LinksCountOrderByAggregateInputObjectSchema } from './LinksCountOrderByAggregateInput.schema';
import { LinksMaxOrderByAggregateInputObjectSchema } from './LinksMaxOrderByAggregateInput.schema';
import { LinksMinOrderByAggregateInputObjectSchema } from './LinksMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LinksOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    popupId: z.lazy(() => SortOrderSchema).optional(),
    imageUrl: z.lazy(() => SortOrderSchema).optional(),
    facebook: z.lazy(() => SortOrderSchema).optional(),
    instagram: z.lazy(() => SortOrderSchema).optional(),
    twitter: z.lazy(() => SortOrderSchema).optional(),
    website: z.lazy(() => SortOrderSchema).optional(),
    youtube: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => LinksCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z.lazy(() => LinksMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => LinksMinOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const LinksOrderByWithAggregationInputObjectSchema = Schema;
