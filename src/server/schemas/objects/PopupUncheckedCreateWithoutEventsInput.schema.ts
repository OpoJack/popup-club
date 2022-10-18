import { z } from 'zod';
import { TagsOnPopupsUncheckedCreateNestedManyWithoutPopupInputObjectSchema } from './TagsOnPopupsUncheckedCreateNestedManyWithoutPopupInput.schema';
import { LinksUncheckedCreateNestedManyWithoutPopupInputObjectSchema } from './LinksUncheckedCreateNestedManyWithoutPopupInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PopupUncheckedCreateWithoutEventsInput> = z
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
    links: z
      .lazy(() => LinksUncheckedCreateNestedManyWithoutPopupInputObjectSchema)
      .optional(),
  })
  .strict();

export const PopupUncheckedCreateWithoutEventsInputObjectSchema = Schema;
