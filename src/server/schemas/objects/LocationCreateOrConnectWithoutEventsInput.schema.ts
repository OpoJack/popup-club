import { z } from 'zod';
import { LocationWhereUniqueInputObjectSchema } from './LocationWhereUniqueInput.schema';
import { LocationCreateWithoutEventsInputObjectSchema } from './LocationCreateWithoutEventsInput.schema';
import { LocationUncheckedCreateWithoutEventsInputObjectSchema } from './LocationUncheckedCreateWithoutEventsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LocationCreateOrConnectWithoutEventsInput> = z
  .object({
    where: z.lazy(() => LocationWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => LocationCreateWithoutEventsInputObjectSchema),
      z.lazy(() => LocationUncheckedCreateWithoutEventsInputObjectSchema),
    ]),
  })
  .strict();

export const LocationCreateOrConnectWithoutEventsInputObjectSchema = Schema;
