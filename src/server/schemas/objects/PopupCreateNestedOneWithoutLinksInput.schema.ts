import { z } from 'zod';
import { PopupCreateWithoutLinksInputObjectSchema } from './PopupCreateWithoutLinksInput.schema';
import { PopupUncheckedCreateWithoutLinksInputObjectSchema } from './PopupUncheckedCreateWithoutLinksInput.schema';
import { PopupCreateOrConnectWithoutLinksInputObjectSchema } from './PopupCreateOrConnectWithoutLinksInput.schema';
import { PopupWhereUniqueInputObjectSchema } from './PopupWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PopupCreateNestedOneWithoutLinksInput> = z.union(
  [
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
        connect: z.lazy(() => PopupWhereUniqueInputObjectSchema).optional(),
      })
      .strict(),
  ],
);

export const PopupCreateNestedOneWithoutLinksInputObjectSchema = Schema;
