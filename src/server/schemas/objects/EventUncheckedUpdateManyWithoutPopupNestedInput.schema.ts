import { z } from 'zod';
import { EventCreateWithoutPopupInputObjectSchema } from './EventCreateWithoutPopupInput.schema';
import { EventUncheckedCreateWithoutPopupInputObjectSchema } from './EventUncheckedCreateWithoutPopupInput.schema';
import { EventCreateOrConnectWithoutPopupInputObjectSchema } from './EventCreateOrConnectWithoutPopupInput.schema';
import { EventUpsertWithWhereUniqueWithoutPopupInputObjectSchema } from './EventUpsertWithWhereUniqueWithoutPopupInput.schema';
import { EventCreateManyPopupInputEnvelopeObjectSchema } from './EventCreateManyPopupInputEnvelope.schema';
import { EventWhereUniqueInputObjectSchema } from './EventWhereUniqueInput.schema';
import { EventUpdateWithWhereUniqueWithoutPopupInputObjectSchema } from './EventUpdateWithWhereUniqueWithoutPopupInput.schema';
import { EventUpdateManyWithWhereWithoutPopupInputObjectSchema } from './EventUpdateManyWithWhereWithoutPopupInput.schema';
import { EventScalarWhereInputObjectSchema } from './EventScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EventUncheckedUpdateManyWithoutPopupNestedInput> =
  z.union([
    z
      .object({
        create: z
          .union([
            z.lazy(() => EventCreateWithoutPopupInputObjectSchema),
            z.lazy(() => EventCreateWithoutPopupInputObjectSchema).array(),
            z.lazy(() => EventUncheckedCreateWithoutPopupInputObjectSchema),
            z
              .lazy(() => EventUncheckedCreateWithoutPopupInputObjectSchema)
              .array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connectOrCreate: z
          .union([
            z.lazy(() => EventCreateOrConnectWithoutPopupInputObjectSchema),
            z
              .lazy(() => EventCreateOrConnectWithoutPopupInputObjectSchema)
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
              () => EventUpsertWithWhereUniqueWithoutPopupInputObjectSchema,
            ),
            z
              .lazy(
                () => EventUpsertWithWhereUniqueWithoutPopupInputObjectSchema,
              )
              .array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        createMany: z
          .lazy(() => EventCreateManyPopupInputEnvelopeObjectSchema)
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
              () => EventUpdateWithWhereUniqueWithoutPopupInputObjectSchema,
            ),
            z
              .lazy(
                () => EventUpdateWithWhereUniqueWithoutPopupInputObjectSchema,
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
            z.lazy(() => EventUpdateManyWithWhereWithoutPopupInputObjectSchema),
            z
              .lazy(() => EventUpdateManyWithWhereWithoutPopupInputObjectSchema)
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

export const EventUncheckedUpdateManyWithoutPopupNestedInputObjectSchema =
  Schema;
