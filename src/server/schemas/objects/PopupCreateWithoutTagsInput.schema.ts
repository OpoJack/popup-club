import { z } from 'zod';
import { EventCreateNestedManyWithoutPopupInputObjectSchema } from './EventCreateNestedManyWithoutPopupInput.schema';
import { LinksCreateNestedManyWithoutPopupInputObjectSchema } from './LinksCreateNestedManyWithoutPopupInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PopupCreateWithoutTagsInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    description: z.string(),
    basedIn: z.string(),
    isHot: z.boolean(),
    orderType: z.string(),
    events: z
      .lazy(() => EventCreateNestedManyWithoutPopupInputObjectSchema)
      .optional(),
    links: z
      .lazy(() => LinksCreateNestedManyWithoutPopupInputObjectSchema)
      .optional(),
  })
  .strict();

export const PopupCreateWithoutTagsInputObjectSchema = Schema;
