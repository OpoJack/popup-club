import { z } from 'zod';
import { EventWhereUniqueInputObjectSchema } from './EventWhereUniqueInput.schema';
import { EventUpdateWithoutLocationInputObjectSchema } from './EventUpdateWithoutLocationInput.schema';
import { EventUncheckedUpdateWithoutLocationInputObjectSchema } from './EventUncheckedUpdateWithoutLocationInput.schema';
import { EventCreateWithoutLocationInputObjectSchema } from './EventCreateWithoutLocationInput.schema';
import { EventUncheckedCreateWithoutLocationInputObjectSchema } from './EventUncheckedCreateWithoutLocationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EventUpsertWithWhereUniqueWithoutLocationInput> =
  z
    .object({
      where: z.lazy(() => EventWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => EventUpdateWithoutLocationInputObjectSchema),
        z.lazy(() => EventUncheckedUpdateWithoutLocationInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => EventCreateWithoutLocationInputObjectSchema),
        z.lazy(() => EventUncheckedCreateWithoutLocationInputObjectSchema),
      ]),
    })
    .strict();

export const EventUpsertWithWhereUniqueWithoutLocationInputObjectSchema =
  Schema;
