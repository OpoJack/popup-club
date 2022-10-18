import { z } from 'zod';
import { TagsOnPopupsWhereUniqueInputObjectSchema } from './TagsOnPopupsWhereUniqueInput.schema';
import { TagsOnPopupsUpdateWithoutPopupInputObjectSchema } from './TagsOnPopupsUpdateWithoutPopupInput.schema';
import { TagsOnPopupsUncheckedUpdateWithoutPopupInputObjectSchema } from './TagsOnPopupsUncheckedUpdateWithoutPopupInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagsOnPopupsUpdateWithWhereUniqueWithoutPopupInput> =
  z
    .object({
      where: z.lazy(() => TagsOnPopupsWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => TagsOnPopupsUpdateWithoutPopupInputObjectSchema),
        z.lazy(() => TagsOnPopupsUncheckedUpdateWithoutPopupInputObjectSchema),
      ]),
    })
    .strict();

export const TagsOnPopupsUpdateWithWhereUniqueWithoutPopupInputObjectSchema =
  Schema;
