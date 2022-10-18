import { z } from 'zod';
import { PopupCreateWithoutTagsInputObjectSchema } from './PopupCreateWithoutTagsInput.schema';
import { PopupUncheckedCreateWithoutTagsInputObjectSchema } from './PopupUncheckedCreateWithoutTagsInput.schema';
import { PopupCreateOrConnectWithoutTagsInputObjectSchema } from './PopupCreateOrConnectWithoutTagsInput.schema';
import { PopupWhereUniqueInputObjectSchema } from './PopupWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PopupCreateNestedOneWithoutTagsInput> = z.union([
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
      connect: z.lazy(() => PopupWhereUniqueInputObjectSchema).optional(),
    })
    .strict(),
]);

export const PopupCreateNestedOneWithoutTagsInputObjectSchema = Schema;
