import { z } from 'zod';
import { EventWhereUniqueInputObjectSchema } from './EventWhereUniqueInput.schema';
import { EventUpdateWithoutLocationInputObjectSchema } from './EventUpdateWithoutLocationInput.schema';
import { EventUncheckedUpdateWithoutLocationInputObjectSchema } from './EventUncheckedUpdateWithoutLocationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EventUpdateWithWhereUniqueWithoutLocationInput> =
  z
    .object({
      where: z.lazy(() => EventWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => EventUpdateWithoutLocationInputObjectSchema),
        z.lazy(() => EventUncheckedUpdateWithoutLocationInputObjectSchema),
      ]),
    })
    .strict();

export const EventUpdateWithWhereUniqueWithoutLocationInputObjectSchema =
  Schema;
