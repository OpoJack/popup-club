import { z } from 'zod';
import { EventCreateWithoutLocationInputObjectSchema } from './EventCreateWithoutLocationInput.schema';
import { EventUncheckedCreateWithoutLocationInputObjectSchema } from './EventUncheckedCreateWithoutLocationInput.schema';
import { EventCreateOrConnectWithoutLocationInputObjectSchema } from './EventCreateOrConnectWithoutLocationInput.schema';
import { EventCreateManyLocationInputEnvelopeObjectSchema } from './EventCreateManyLocationInputEnvelope.schema';
import { EventWhereUniqueInputObjectSchema } from './EventWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EventCreateNestedManyWithoutLocationInput> =
  z.union([
    z
      .object({
        create: z
          .union([
            z.lazy(() => EventCreateWithoutLocationInputObjectSchema),
            z.lazy(() => EventCreateWithoutLocationInputObjectSchema).array(),
            z.lazy(() => EventUncheckedCreateWithoutLocationInputObjectSchema),
            z
              .lazy(() => EventUncheckedCreateWithoutLocationInputObjectSchema)
              .array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connectOrCreate: z
          .union([
            z.lazy(() => EventCreateOrConnectWithoutLocationInputObjectSchema),
            z
              .lazy(() => EventCreateOrConnectWithoutLocationInputObjectSchema)
              .array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        createMany: z
          .lazy(() => EventCreateManyLocationInputEnvelopeObjectSchema)
          .optional(),
      })
      .strict(),
    z
      .object({
        connect: z
          .union([
            z.lazy(() => EventWhereUniqueInputObjectSchema),
            z.lazy(() => EventWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
  ]);

export const EventCreateNestedManyWithoutLocationInputObjectSchema = Schema;
