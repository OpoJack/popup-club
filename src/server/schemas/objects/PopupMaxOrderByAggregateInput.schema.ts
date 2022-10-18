import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PopupMaxOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    description: z.lazy(() => SortOrderSchema).optional(),
    basedIn: z.lazy(() => SortOrderSchema).optional(),
    isHot: z.lazy(() => SortOrderSchema).optional(),
    orderType: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const PopupMaxOrderByAggregateInputObjectSchema = Schema;
