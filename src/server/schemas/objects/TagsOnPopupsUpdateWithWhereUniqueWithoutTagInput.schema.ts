import { z } from 'zod';
import { TagsOnPopupsWhereUniqueInputObjectSchema } from './TagsOnPopupsWhereUniqueInput.schema';
import { TagsOnPopupsUpdateWithoutTagInputObjectSchema } from './TagsOnPopupsUpdateWithoutTagInput.schema';
import { TagsOnPopupsUncheckedUpdateWithoutTagInputObjectSchema } from './TagsOnPopupsUncheckedUpdateWithoutTagInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagsOnPopupsUpdateWithWhereUniqueWithoutTagInput> =
  z
    .object({
      where: z.lazy(() => TagsOnPopupsWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => TagsOnPopupsUpdateWithoutTagInputObjectSchema),
        z.lazy(() => TagsOnPopupsUncheckedUpdateWithoutTagInputObjectSchema),
      ]),
    })
    .strict();

export const TagsOnPopupsUpdateWithWhereUniqueWithoutTagInputObjectSchema =
  Schema;
