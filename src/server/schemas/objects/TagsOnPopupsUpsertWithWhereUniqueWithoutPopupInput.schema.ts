import { z } from 'zod';
import { TagsOnPopupsWhereUniqueInputObjectSchema } from './TagsOnPopupsWhereUniqueInput.schema';
import { TagsOnPopupsUpdateWithoutPopupInputObjectSchema } from './TagsOnPopupsUpdateWithoutPopupInput.schema';
import { TagsOnPopupsUncheckedUpdateWithoutPopupInputObjectSchema } from './TagsOnPopupsUncheckedUpdateWithoutPopupInput.schema';
import { TagsOnPopupsCreateWithoutPopupInputObjectSchema } from './TagsOnPopupsCreateWithoutPopupInput.schema';
import { TagsOnPopupsUncheckedCreateWithoutPopupInputObjectSchema } from './TagsOnPopupsUncheckedCreateWithoutPopupInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagsOnPopupsUpsertWithWhereUniqueWithoutPopupInput> =
  z
    .object({
      where: z.lazy(() => TagsOnPopupsWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => TagsOnPopupsUpdateWithoutPopupInputObjectSchema),
        z.lazy(() => TagsOnPopupsUncheckedUpdateWithoutPopupInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => TagsOnPopupsCreateWithoutPopupInputObjectSchema),
        z.lazy(() => TagsOnPopupsUncheckedCreateWithoutPopupInputObjectSchema),
      ]),
    })
    .strict();

export const TagsOnPopupsUpsertWithWhereUniqueWithoutPopupInputObjectSchema =
  Schema;
