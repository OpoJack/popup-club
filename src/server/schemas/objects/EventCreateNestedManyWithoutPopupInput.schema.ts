import { z } from 'zod';
import { EventCreateWithoutPopupInputObjectSchema } from './EventCreateWithoutPopupInput.schema';
import { EventUncheckedCreateWithoutPopupInputObjectSchema } from './EventUncheckedCreateWithoutPopupInput.schema';
import { EventCreateOrConnectWithoutPopupInputObjectSchema } from './EventCreateOrConnectWithoutPopupInput.schema';
import { EventCreateManyPopupInputEnvelopeObjectSchema } from './EventCreateManyPopupInputEnvelope.schema';
import { EventWhereUniqueInputObjectSchema } from './EventWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EventCreateNestedManyWithoutPopupInput> =
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
        createMany: z
          .lazy(() => EventCreateManyPopupInputEnvelopeObjectSchema)
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

export const EventCreateNestedManyWithoutPopupInputObjectSchema = Schema;
