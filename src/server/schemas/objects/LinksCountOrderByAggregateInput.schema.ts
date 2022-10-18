import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LinksCountOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    popupId: z.lazy(() => SortOrderSchema).optional(),
    imageUrl: z.lazy(() => SortOrderSchema).optional(),
    facebook: z.lazy(() => SortOrderSchema).optional(),
    instagram: z.lazy(() => SortOrderSchema).optional(),
    twitter: z.lazy(() => SortOrderSchema).optional(),
    website: z.lazy(() => SortOrderSchema).optional(),
    youtube: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const LinksCountOrderByAggregateInputObjectSchema = Schema;
