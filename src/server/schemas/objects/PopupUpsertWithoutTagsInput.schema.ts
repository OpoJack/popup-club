import { z } from 'zod';
import { PopupUpdateWithoutTagsInputObjectSchema } from './PopupUpdateWithoutTagsInput.schema';
import { PopupUncheckedUpdateWithoutTagsInputObjectSchema } from './PopupUncheckedUpdateWithoutTagsInput.schema';
import { PopupCreateWithoutTagsInputObjectSchema } from './PopupCreateWithoutTagsInput.schema';
import { PopupUncheckedCreateWithoutTagsInputObjectSchema } from './PopupUncheckedCreateWithoutTagsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PopupUpsertWithoutTagsInput> = z
  .object({
    update: z.union([
      z.lazy(() => PopupUpdateWithoutTagsInputObjectSchema),
      z.lazy(() => PopupUncheckedUpdateWithoutTagsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => PopupCreateWithoutTagsInputObjectSchema),
      z.lazy(() => PopupUncheckedCreateWithoutTagsInputObjectSchema),
    ]),
  })
  .strict();

export const PopupUpsertWithoutTagsInputObjectSchema = Schema;
