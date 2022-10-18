import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { TagsOnPopupsOrderByRelationAggregateInputObjectSchema } from './TagsOnPopupsOrderByRelationAggregateInput.schema';
import { EventOrderByRelationAggregateInputObjectSchema } from './EventOrderByRelationAggregateInput.schema';
import { LinksOrderByRelationAggregateInputObjectSchema } from './LinksOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PopupOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    description: z.lazy(() => SortOrderSchema).optional(),
    basedIn: z.lazy(() => SortOrderSchema).optional(),
    tags: z
      .lazy(() => TagsOnPopupsOrderByRelationAggregateInputObjectSchema)
      .optional(),
    isHot: z.lazy(() => SortOrderSchema).optional(),
    orderType: z.lazy(() => SortOrderSchema).optional(),
    events: z
      .lazy(() => EventOrderByRelationAggregateInputObjectSchema)
      .optional(),
    links: z
      .lazy(() => LinksOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const PopupOrderByWithRelationInputObjectSchema = Schema;
