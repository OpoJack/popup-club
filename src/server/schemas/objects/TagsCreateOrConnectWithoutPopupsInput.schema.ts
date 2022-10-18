import { z } from 'zod';
import { TagsWhereUniqueInputObjectSchema } from './TagsWhereUniqueInput.schema';
import { TagsCreateWithoutPopupsInputObjectSchema } from './TagsCreateWithoutPopupsInput.schema';
import { TagsUncheckedCreateWithoutPopupsInputObjectSchema } from './TagsUncheckedCreateWithoutPopupsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagsCreateOrConnectWithoutPopupsInput> = z
  .object({
    where: z.lazy(() => TagsWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => TagsCreateWithoutPopupsInputObjectSchema),
      z.lazy(() => TagsUncheckedCreateWithoutPopupsInputObjectSchema),
    ]),
  })
  .strict();

export const TagsCreateOrConnectWithoutPopupsInputObjectSchema = Schema;
