import { z } from 'zod';
import { TagsOnPopupsCreateNestedManyWithoutPopupInputObjectSchema } from './TagsOnPopupsCreateNestedManyWithoutPopupInput.schema';
import { EventCreateNestedManyWithoutPopupInputObjectSchema } from './EventCreateNestedManyWithoutPopupInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PopupCreateWithoutLinksInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    description: z.string(),
    basedIn: z.string(),
    tags: z
      .lazy(() => TagsOnPopupsCreateNestedManyWithoutPopupInputObjectSchema)
      .optional(),
    isHot: z.boolean(),
    orderType: z.string(),
    events: z
      .lazy(() => EventCreateNestedManyWithoutPopupInputObjectSchema)
      .optional(),
  })
  .strict();

export const PopupCreateWithoutLinksInputObjectSchema = Schema;
