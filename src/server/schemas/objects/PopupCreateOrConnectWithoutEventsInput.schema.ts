import { z } from 'zod';
import { PopupWhereUniqueInputObjectSchema } from './PopupWhereUniqueInput.schema';
import { PopupCreateWithoutEventsInputObjectSchema } from './PopupCreateWithoutEventsInput.schema';
import { PopupUncheckedCreateWithoutEventsInputObjectSchema } from './PopupUncheckedCreateWithoutEventsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PopupCreateOrConnectWithoutEventsInput> = z
  .object({
    where: z.lazy(() => PopupWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => PopupCreateWithoutEventsInputObjectSchema),
      z.lazy(() => PopupUncheckedCreateWithoutEventsInputObjectSchema),
    ]),
  })
  .strict();

export const PopupCreateOrConnectWithoutEventsInputObjectSchema = Schema;
