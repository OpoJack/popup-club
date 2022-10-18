import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { PopupOrderByWithRelationInputObjectSchema } from './PopupOrderByWithRelationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LinksOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    popupId: z.lazy(() => SortOrderSchema).optional(),
    imageUrl: z.lazy(() => SortOrderSchema).optional(),
    facebook: z.lazy(() => SortOrderSchema).optional(),
    instagram: z.lazy(() => SortOrderSchema).optional(),
    twitter: z.lazy(() => SortOrderSchema).optional(),
    website: z.lazy(() => SortOrderSchema).optional(),
    youtube: z.lazy(() => SortOrderSchema).optional(),
    popup: z.lazy(() => PopupOrderByWithRelationInputObjectSchema).optional(),
  })
  .strict();

export const LinksOrderByWithRelationInputObjectSchema = Schema;
