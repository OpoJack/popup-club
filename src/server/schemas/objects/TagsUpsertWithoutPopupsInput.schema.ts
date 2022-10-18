import { z } from 'zod';
import { TagsUpdateWithoutPopupsInputObjectSchema } from './TagsUpdateWithoutPopupsInput.schema';
import { TagsUncheckedUpdateWithoutPopupsInputObjectSchema } from './TagsUncheckedUpdateWithoutPopupsInput.schema';
import { TagsCreateWithoutPopupsInputObjectSchema } from './TagsCreateWithoutPopupsInput.schema';
import { TagsUncheckedCreateWithoutPopupsInputObjectSchema } from './TagsUncheckedCreateWithoutPopupsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagsUpsertWithoutPopupsInput> = z
  .object({
    update: z.union([
      z.lazy(() => TagsUpdateWithoutPopupsInputObjectSchema),
      z.lazy(() => TagsUncheckedUpdateWithoutPopupsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => TagsCreateWithoutPopupsInputObjectSchema),
      z.lazy(() => TagsUncheckedCreateWithoutPopupsInputObjectSchema),
    ]),
  })
  .strict();

export const TagsUpsertWithoutPopupsInputObjectSchema = Schema;
