import { z } from 'zod';
import { LocationCreateWithoutEventsInputObjectSchema } from './LocationCreateWithoutEventsInput.schema';
import { LocationUncheckedCreateWithoutEventsInputObjectSchema } from './LocationUncheckedCreateWithoutEventsInput.schema';
import { LocationCreateOrConnectWithoutEventsInputObjectSchema } from './LocationCreateOrConnectWithoutEventsInput.schema';
import { LocationUpsertWithoutEventsInputObjectSchema } from './LocationUpsertWithoutEventsInput.schema';
import { LocationWhereUniqueInputObjectSchema } from './LocationWhereUniqueInput.schema';
import { LocationUpdateWithoutEventsInputObjectSchema } from './LocationUpdateWithoutEventsInput.schema';
import { LocationUncheckedUpdateWithoutEventsInputObjectSchema } from './LocationUncheckedUpdateWithoutEventsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LocationUpdateOneRequiredWithoutEventsNestedInput> =
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
        upsert: z
          .lazy(() => LocationUpsertWithoutEventsInputObjectSchema)
          .optional(),
      })
      .strict(),
    z
      .object({
        connect: z.lazy(() => LocationWhereUniqueInputObjectSchema).optional(),
      })
      .strict(),
    z
      .object({
        update: z
          .union([
            z.lazy(() => LocationUpdateWithoutEventsInputObjectSchema),
            z.lazy(() => LocationUncheckedUpdateWithoutEventsInputObjectSchema),
          ])
          .optional(),
      })
      .strict(),
  ]);

export const LocationUpdateOneRequiredWithoutEventsNestedInputObjectSchema =
  Schema;
