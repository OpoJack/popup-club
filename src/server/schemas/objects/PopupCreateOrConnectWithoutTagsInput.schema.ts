import { z } from 'zod';
import { PopupWhereUniqueInputObjectSchema } from './PopupWhereUniqueInput.schema';
import { PopupCreateWithoutTagsInputObjectSchema } from './PopupCreateWithoutTagsInput.schema';
import { PopupUncheckedCreateWithoutTagsInputObjectSchema } from './PopupUncheckedCreateWithoutTagsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PopupCreateOrConnectWithoutTagsInput> = z
  .object({
    where: z.lazy(() => PopupWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => PopupCreateWithoutTagsInputObjectSchema),
      z.lazy(() => PopupUncheckedCreateWithoutTagsInputObjectSchema),
    ]),
  })
  .strict();

export const PopupCreateOrConnectWithoutTagsInputObjectSchema = Schema;
