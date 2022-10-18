import { z } from 'zod';
import { TagsOnPopupsWhereUniqueInputObjectSchema } from './TagsOnPopupsWhereUniqueInput.schema';
import { TagsOnPopupsCreateWithoutTagInputObjectSchema } from './TagsOnPopupsCreateWithoutTagInput.schema';
import { TagsOnPopupsUncheckedCreateWithoutTagInputObjectSchema } from './TagsOnPopupsUncheckedCreateWithoutTagInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagsOnPopupsCreateOrConnectWithoutTagInput> = z
  .object({
    where: z.lazy(() => TagsOnPopupsWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => TagsOnPopupsCreateWithoutTagInputObjectSchema),
      z.lazy(() => TagsOnPopupsUncheckedCreateWithoutTagInputObjectSchema),
    ]),
  })
  .strict();

export const TagsOnPopupsCreateOrConnectWithoutTagInputObjectSchema = Schema;
