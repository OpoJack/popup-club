import { z } from 'zod';
import { EventUncheckedCreateNestedManyWithoutPopupInputObjectSchema } from './EventUncheckedCreateNestedManyWithoutPopupInput.schema';
import { LinksUncheckedCreateNestedManyWithoutPopupInputObjectSchema } from './LinksUncheckedCreateNestedManyWithoutPopupInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PopupUncheckedCreateWithoutTagsInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    description: z.string(),
    basedIn: z.string(),
    isHot: z.boolean(),
    orderType: z.string(),
    events: z
      .lazy(() => EventUncheckedCreateNestedManyWithoutPopupInputObjectSchema)
      .optional(),
    links: z
      .lazy(() => LinksUncheckedCreateNestedManyWithoutPopupInputObjectSchema)
      .optional(),
  })
  .strict();

export const PopupUncheckedCreateWithoutTagsInputObjectSchema = Schema;
