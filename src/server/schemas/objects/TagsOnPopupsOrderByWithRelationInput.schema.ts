import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { PopupOrderByWithRelationInputObjectSchema } from './PopupOrderByWithRelationInput.schema';
import { TagsOrderByWithRelationInputObjectSchema } from './TagsOrderByWithRelationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagsOnPopupsOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    popup: z.lazy(() => PopupOrderByWithRelationInputObjectSchema).optional(),
    popupId: z.lazy(() => SortOrderSchema).optional(),
    tag: z.lazy(() => TagsOrderByWithRelationInputObjectSchema).optional(),
    tagId: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const TagsOnPopupsOrderByWithRelationInputObjectSchema = Schema;
