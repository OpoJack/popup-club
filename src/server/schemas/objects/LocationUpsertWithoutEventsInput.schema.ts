import { z } from 'zod';
import { LocationUpdateWithoutEventsInputObjectSchema } from './LocationUpdateWithoutEventsInput.schema';
import { LocationUncheckedUpdateWithoutEventsInputObjectSchema } from './LocationUncheckedUpdateWithoutEventsInput.schema';
import { LocationCreateWithoutEventsInputObjectSchema } from './LocationCreateWithoutEventsInput.schema';
import { LocationUncheckedCreateWithoutEventsInputObjectSchema } from './LocationUncheckedCreateWithoutEventsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LocationUpsertWithoutEventsInput> = z
  .object({
    update: z.union([
      z.lazy(() => LocationUpdateWithoutEventsInputObjectSchema),
      z.lazy(() => LocationUncheckedUpdateWithoutEventsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => LocationCreateWithoutEventsInputObjectSchema),
      z.lazy(() => LocationUncheckedCreateWithoutEventsInputObjectSchema),
    ]),
  })
  .strict();

export const LocationUpsertWithoutEventsInputObjectSchema = Schema;
