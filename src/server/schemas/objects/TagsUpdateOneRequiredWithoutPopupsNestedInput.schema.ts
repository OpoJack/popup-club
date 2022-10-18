import { z } from 'zod';
import { TagsCreateWithoutPopupsInputObjectSchema } from './TagsCreateWithoutPopupsInput.schema';
import { TagsUncheckedCreateWithoutPopupsInputObjectSchema } from './TagsUncheckedCreateWithoutPopupsInput.schema';
import { TagsCreateOrConnectWithoutPopupsInputObjectSchema } from './TagsCreateOrConnectWithoutPopupsInput.schema';
import { TagsUpsertWithoutPopupsInputObjectSchema } from './TagsUpsertWithoutPopupsInput.schema';
import { TagsWhereUniqueInputObjectSchema } from './TagsWhereUniqueInput.schema';
import { TagsUpdateWithoutPopupsInputObjectSchema } from './TagsUpdateWithoutPopupsInput.schema';
import { TagsUncheckedUpdateWithoutPopupsInputObjectSchema } from './TagsUncheckedUpdateWithoutPopupsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagsUpdateOneRequiredWithoutPopupsNestedInput> =
  z.union([
    z
      .object({
        create: z
          .union([
            z.lazy(() => TagsCreateWithoutPopupsInputObjectSchema),
            z.lazy(() => TagsUncheckedCreateWithoutPopupsInputObjectSchema),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connectOrCreate: z
          .lazy(() => TagsCreateOrConnectWithoutPopupsInputObjectSchema)
          .optional(),
      })
      .strict(),
    z
      .object({
        upsert: z
          .lazy(() => TagsUpsertWithoutPopupsInputObjectSchema)
          .optional(),
      })
      .strict(),
    z
      .object({
        connect: z.lazy(() => TagsWhereUniqueInputObjectSchema).optional(),
      })
      .strict(),
    z
      .object({
        update: z
          .union([
            z.lazy(() => TagsUpdateWithoutPopupsInputObjectSchema),
            z.lazy(() => TagsUncheckedUpdateWithoutPopupsInputObjectSchema),
          ])
          .optional(),
      })
      .strict(),
  ]);

export const TagsUpdateOneRequiredWithoutPopupsNestedInputObjectSchema = Schema;
