import { z } from 'zod';
import { TagsOnPopupsUncheckedCreateNestedManyWithoutPopupInputObjectSchema } from './TagsOnPopupsUncheckedCreateNestedManyWithoutPopupInput.schema';
import { EventUncheckedCreateNestedManyWithoutPopupInputObjectSchema } from './EventUncheckedCreateNestedManyWithoutPopupInput.schema';
import { LinksUncheckedCreateNestedManyWithoutPopupInputObjectSchema } from './LinksUncheckedCreateNestedManyWithoutPopupInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PopupUncheckedCreateInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    description: z.string(),
    basedIn: z.string(),
    tags: z
      .lazy(
        () =>
          TagsOnPopupsUncheckedCreateNestedManyWithoutPopupInputObjectSchema,
      )
      .optional(),
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

export const PopupUncheckedCreateInputObjectSchema = Schema;
