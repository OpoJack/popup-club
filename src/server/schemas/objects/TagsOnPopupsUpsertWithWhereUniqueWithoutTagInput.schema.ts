import { z } from 'zod';
import { TagsOnPopupsWhereUniqueInputObjectSchema } from './TagsOnPopupsWhereUniqueInput.schema';
import { TagsOnPopupsUpdateWithoutTagInputObjectSchema } from './TagsOnPopupsUpdateWithoutTagInput.schema';
import { TagsOnPopupsUncheckedUpdateWithoutTagInputObjectSchema } from './TagsOnPopupsUncheckedUpdateWithoutTagInput.schema';
import { TagsOnPopupsCreateWithoutTagInputObjectSchema } from './TagsOnPopupsCreateWithoutTagInput.schema';
import { TagsOnPopupsUncheckedCreateWithoutTagInputObjectSchema } from './TagsOnPopupsUncheckedCreateWithoutTagInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagsOnPopupsUpsertWithWhereUniqueWithoutTagInput> =
  z
    .object({
      where: z.lazy(() => TagsOnPopupsWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => TagsOnPopupsUpdateWithoutTagInputObjectSchema),
        z.lazy(() => TagsOnPopupsUncheckedUpdateWithoutTagInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => TagsOnPopupsCreateWithoutTagInputObjectSchema),
        z.lazy(() => TagsOnPopupsUncheckedCreateWithoutTagInputObjectSchema),
      ]),
    })
    .strict();

export const TagsOnPopupsUpsertWithWhereUniqueWithoutTagInputObjectSchema =
  Schema;
