import { z } from 'zod';
import { PopupCreateWithoutTagsInputObjectSchema } from './PopupCreateWithoutTagsInput.schema';
import { PopupUncheckedCreateWithoutTagsInputObjectSchema } from './PopupUncheckedCreateWithoutTagsInput.schema';
import { PopupCreateOrConnectWithoutTagsInputObjectSchema } from './PopupCreateOrConnectWithoutTagsInput.schema';
import { PopupUpsertWithoutTagsInputObjectSchema } from './PopupUpsertWithoutTagsInput.schema';
import { PopupWhereUniqueInputObjectSchema } from './PopupWhereUniqueInput.schema';
import { PopupUpdateWithoutTagsInputObjectSchema } from './PopupUpdateWithoutTagsInput.schema';
import { PopupUncheckedUpdateWithoutTagsInputObjectSchema } from './PopupUncheckedUpdateWithoutTagsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PopupUpdateOneRequiredWithoutTagsNestedInput> =
  z.union([
    z
      .object({
        create: z
          .union([
            z.lazy(() => PopupCreateWithoutTagsInputObjectSchema),
            z.lazy(() => PopupUncheckedCreateWithoutTagsInputObjectSchema),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connectOrCreate: z
          .lazy(() => PopupCreateOrConnectWithoutTagsInputObjectSchema)
          .optional(),
      })
      .strict(),
    z
      .object({
        upsert: z
          .lazy(() => PopupUpsertWithoutTagsInputObjectSchema)
          .optional(),
      })
      .strict(),
    z
      .object({
        connect: z.lazy(() => PopupWhereUniqueInputObjectSchema).optional(),
      })
      .strict(),
    z
      .object({
        update: z
          .union([
            z.lazy(() => PopupUpdateWithoutTagsInputObjectSchema),
            z.lazy(() => PopupUncheckedUpdateWithoutTagsInputObjectSchema),
          ])
          .optional(),
      })
      .strict(),
  ]);

export const PopupUpdateOneRequiredWithoutTagsNestedInputObjectSchema = Schema;
