import { z } from 'zod';
import { PopupUpdateWithoutLinksInputObjectSchema } from './PopupUpdateWithoutLinksInput.schema';
import { PopupUncheckedUpdateWithoutLinksInputObjectSchema } from './PopupUncheckedUpdateWithoutLinksInput.schema';
import { PopupCreateWithoutLinksInputObjectSchema } from './PopupCreateWithoutLinksInput.schema';
import { PopupUncheckedCreateWithoutLinksInputObjectSchema } from './PopupUncheckedCreateWithoutLinksInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PopupUpsertWithoutLinksInput> = z
  .object({
    update: z.union([
      z.lazy(() => PopupUpdateWithoutLinksInputObjectSchema),
      z.lazy(() => PopupUncheckedUpdateWithoutLinksInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => PopupCreateWithoutLinksInputObjectSchema),
      z.lazy(() => PopupUncheckedCreateWithoutLinksInputObjectSchema),
    ]),
  })
  .strict();

export const PopupUpsertWithoutLinksInputObjectSchema = Schema;
