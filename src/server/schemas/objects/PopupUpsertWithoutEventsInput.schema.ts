import { z } from 'zod';
import { PopupUpdateWithoutEventsInputObjectSchema } from './PopupUpdateWithoutEventsInput.schema';
import { PopupUncheckedUpdateWithoutEventsInputObjectSchema } from './PopupUncheckedUpdateWithoutEventsInput.schema';
import { PopupCreateWithoutEventsInputObjectSchema } from './PopupCreateWithoutEventsInput.schema';
import { PopupUncheckedCreateWithoutEventsInputObjectSchema } from './PopupUncheckedCreateWithoutEventsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PopupUpsertWithoutEventsInput> = z
  .object({
    update: z.union([
      z.lazy(() => PopupUpdateWithoutEventsInputObjectSchema),
      z.lazy(() => PopupUncheckedUpdateWithoutEventsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => PopupCreateWithoutEventsInputObjectSchema),
      z.lazy(() => PopupUncheckedCreateWithoutEventsInputObjectSchema),
    ]),
  })
  .strict();

export const PopupUpsertWithoutEventsInputObjectSchema = Schema;
