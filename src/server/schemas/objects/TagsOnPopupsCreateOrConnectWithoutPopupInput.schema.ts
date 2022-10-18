import { z } from 'zod';
import { TagsOnPopupsWhereUniqueInputObjectSchema } from './TagsOnPopupsWhereUniqueInput.schema';
import { TagsOnPopupsCreateWithoutPopupInputObjectSchema } from './TagsOnPopupsCreateWithoutPopupInput.schema';
import { TagsOnPopupsUncheckedCreateWithoutPopupInputObjectSchema } from './TagsOnPopupsUncheckedCreateWithoutPopupInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagsOnPopupsCreateOrConnectWithoutPopupInput> = z
  .object({
    where: z.lazy(() => TagsOnPopupsWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => TagsOnPopupsCreateWithoutPopupInputObjectSchema),
      z.lazy(() => TagsOnPopupsUncheckedCreateWithoutPopupInputObjectSchema),
    ]),
  })
  .strict();

export const TagsOnPopupsCreateOrConnectWithoutPopupInputObjectSchema = Schema;
