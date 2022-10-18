import { z } from 'zod';
import { PopupCreateWithoutEventsInputObjectSchema } from './PopupCreateWithoutEventsInput.schema';
import { PopupUncheckedCreateWithoutEventsInputObjectSchema } from './PopupUncheckedCreateWithoutEventsInput.schema';
import { PopupCreateOrConnectWithoutEventsInputObjectSchema } from './PopupCreateOrConnectWithoutEventsInput.schema';
import { PopupUpsertWithoutEventsInputObjectSchema } from './PopupUpsertWithoutEventsInput.schema';
import { PopupWhereUniqueInputObjectSchema } from './PopupWhereUniqueInput.schema';
import { PopupUpdateWithoutEventsInputObjectSchema } from './PopupUpdateWithoutEventsInput.schema';
import { PopupUncheckedUpdateWithoutEventsInputObjectSchema } from './PopupUncheckedUpdateWithoutEventsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PopupUpdateOneRequiredWithoutEventsNestedInput> =
  z.union([
    z
      .object({
        create: z
          .union([
            z.lazy(() => PopupCreateWithoutEventsInputObjectSchema),
            z.lazy(() => PopupUncheckedCreateWithoutEventsInputObjectSchema),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connectOrCreate: z
          .lazy(() => PopupCreateOrConnectWithoutEventsInputObjectSchema)
          .optional(),
      })
      .strict(),
    z
      .object({
        upsert: z
          .lazy(() => PopupUpsertWithoutEventsInputObjectSchema)
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
            z.lazy(() => PopupUpdateWithoutEventsInputObjectSchema),
            z.lazy(() => PopupUncheckedUpdateWithoutEventsInputObjectSchema),
          ])
          .optional(),
      })
      .strict(),
  ]);

export const PopupUpdateOneRequiredWithoutEventsNestedInputObjectSchema =
  Schema;
