import { z } from 'zod';
import { PopupCreateWithoutEventsInputObjectSchema } from './PopupCreateWithoutEventsInput.schema';
import { PopupUncheckedCreateWithoutEventsInputObjectSchema } from './PopupUncheckedCreateWithoutEventsInput.schema';
import { PopupCreateOrConnectWithoutEventsInputObjectSchema } from './PopupCreateOrConnectWithoutEventsInput.schema';
import { PopupWhereUniqueInputObjectSchema } from './PopupWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PopupCreateNestedOneWithoutEventsInput> =
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
        connect: z.lazy(() => PopupWhereUniqueInputObjectSchema).optional(),
      })
      .strict(),
  ]);

export const PopupCreateNestedOneWithoutEventsInputObjectSchema = Schema;
