import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { LocationOrderByWithRelationInputObjectSchema } from './LocationOrderByWithRelationInput.schema';
import { PopupOrderByWithRelationInputObjectSchema } from './PopupOrderByWithRelationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EventOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    popupId: z.lazy(() => SortOrderSchema).optional(),
    locationId: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    description: z.lazy(() => SortOrderSchema).optional(),
    date: z.lazy(() => SortOrderSchema).optional(),
    location: z
      .lazy(() => LocationOrderByWithRelationInputObjectSchema)
      .optional(),
    popup: z.lazy(() => PopupOrderByWithRelationInputObjectSchema).optional(),
  })
  .strict();

export const EventOrderByWithRelationInputObjectSchema = Schema;
