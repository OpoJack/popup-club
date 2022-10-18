import { z } from 'zod';
import { LocationCreateWithoutEventsInputObjectSchema } from './LocationCreateWithoutEventsInput.schema';
import { LocationUncheckedCreateWithoutEventsInputObjectSchema } from './LocationUncheckedCreateWithoutEventsInput.schema';
import { LocationCreateOrConnectWithoutEventsInputObjectSchema } from './LocationCreateOrConnectWithoutEventsInput.schema';
import { LocationWhereUniqueInputObjectSchema } from './LocationWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LocationCreateNestedOneWithoutEventsInput> =
  z.union([
    z
      .object({
        create: z
          .union([
            z.lazy(() => LocationCreateWithoutEventsInputObjectSchema),
            z.lazy(() => LocationUncheckedCreateWithoutEventsInputObjectSchema),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connectOrCreate: z
          .lazy(() => LocationCreateOrConnectWithoutEventsInputObjectSchema)
          .optional(),
      })
      .strict(),
    z
      .object({
        connect: z.lazy(() => LocationWhereUniqueInputObjectSchema).optional(),
      })
      .strict(),
  ]);

export const LocationCreateNestedOneWithoutEventsInputObjectSchema = Schema;
