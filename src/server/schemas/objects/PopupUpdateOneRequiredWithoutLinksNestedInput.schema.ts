import { z } from 'zod';
import { PopupCreateWithoutLinksInputObjectSchema } from './PopupCreateWithoutLinksInput.schema';
import { PopupUncheckedCreateWithoutLinksInputObjectSchema } from './PopupUncheckedCreateWithoutLinksInput.schema';
import { PopupCreateOrConnectWithoutLinksInputObjectSchema } from './PopupCreateOrConnectWithoutLinksInput.schema';
import { PopupUpsertWithoutLinksInputObjectSchema } from './PopupUpsertWithoutLinksInput.schema';
import { PopupWhereUniqueInputObjectSchema } from './PopupWhereUniqueInput.schema';
import { PopupUpdateWithoutLinksInputObjectSchema } from './PopupUpdateWithoutLinksInput.schema';
import { PopupUncheckedUpdateWithoutLinksInputObjectSchema } from './PopupUncheckedUpdateWithoutLinksInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PopupUpdateOneRequiredWithoutLinksNestedInput> =
  z.union([
    z
      .object({
        create: z
          .union([
            z.lazy(() => PopupCreateWithoutLinksInputObjectSchema),
            z.lazy(() => PopupUncheckedCreateWithoutLinksInputObjectSchema),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connectOrCreate: z
          .lazy(() => PopupCreateOrConnectWithoutLinksInputObjectSchema)
          .optional(),
      })
      .strict(),
    z
      .object({
        upsert: z
          .lazy(() => PopupUpsertWithoutLinksInputObjectSchema)
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
            z.lazy(() => PopupUpdateWithoutLinksInputObjectSchema),
            z.lazy(() => PopupUncheckedUpdateWithoutLinksInputObjectSchema),
          ])
          .optional(),
      })
      .strict(),
  ]);

export const PopupUpdateOneRequiredWithoutLinksNestedInputObjectSchema = Schema;
