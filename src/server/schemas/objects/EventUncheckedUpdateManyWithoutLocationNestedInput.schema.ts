import { z } from 'zod';
import { EventCreateWithoutLocationInputObjectSchema } from './EventCreateWithoutLocationInput.schema';
import { EventUncheckedCreateWithoutLocationInputObjectSchema } from './EventUncheckedCreateWithoutLocationInput.schema';
import { EventCreateOrConnectWithoutLocationInputObjectSchema } from './EventCreateOrConnectWithoutLocationInput.schema';
import { EventUpsertWithWhereUniqueWithoutLocationInputObjectSchema } from './EventUpsertWithWhereUniqueWithoutLocationInput.schema';
import { EventCreateManyLocationInputEnvelopeObjectSchema } from './EventCreateManyLocationInputEnvelope.schema';
import { EventWhereUniqueInputObjectSchema } from './EventWhereUniqueInput.schema';
import { EventUpdateWithWhereUniqueWithoutLocationInputObjectSchema } from './EventUpdateWithWhereUniqueWithoutLocationInput.schema';
import { EventUpdateManyWithWhereWithoutLocationInputObjectSchema } from './EventUpdateManyWithWhereWithoutLocationInput.schema';
import { EventScalarWhereInputObjectSchema } from './EventScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EventUncheckedUpdateManyWithoutLocationNestedInput> =
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
        upsert: z
          .union([
            z.lazy(
              () => EventUpsertWithWhereUniqueWithoutLocationInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  EventUpsertWithWhereUniqueWithoutLocationInputObjectSchema,
              )
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
        set: z
          .union([
            z.lazy(() => EventWhereUniqueInputObjectSchema),
            z.lazy(() => EventWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        disconnect: z
          .union([
            z.lazy(() => EventWhereUniqueInputObjectSchema),
            z.lazy(() => EventWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        delete: z
          .union([
            z.lazy(() => EventWhereUniqueInputObjectSchema),
            z.lazy(() => EventWhereUniqueInputObjectSchema).array(),
          ])
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
    z
      .object({
        update: z
          .union([
            z.lazy(
              () => EventUpdateWithWhereUniqueWithoutLocationInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  EventUpdateWithWhereUniqueWithoutLocationInputObjectSchema,
              )
              .array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        updateMany: z
          .union([
            z.lazy(
              () => EventUpdateManyWithWhereWithoutLocationInputObjectSchema,
            ),
            z
              .lazy(
                () => EventUpdateManyWithWhereWithoutLocationInputObjectSchema,
              )
              .array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        deleteMany: z
          .union([
            z.lazy(() => EventScalarWhereInputObjectSchema),
            z.lazy(() => EventScalarWhereInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
  ]);

export const EventUncheckedUpdateManyWithoutLocationNestedInputObjectSchema =
  Schema;
