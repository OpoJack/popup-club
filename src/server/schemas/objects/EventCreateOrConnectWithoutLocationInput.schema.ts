import { z } from 'zod';
import { EventWhereUniqueInputObjectSchema } from './EventWhereUniqueInput.schema';
import { EventCreateWithoutLocationInputObjectSchema } from './EventCreateWithoutLocationInput.schema';
import { EventUncheckedCreateWithoutLocationInputObjectSchema } from './EventUncheckedCreateWithoutLocationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EventCreateOrConnectWithoutLocationInput> = z
  .object({
    where: z.lazy(() => EventWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => EventCreateWithoutLocationInputObjectSchema),
      z.lazy(() => EventUncheckedCreateWithoutLocationInputObjectSchema),
    ]),
  })
  .strict();

export const EventCreateOrConnectWithoutLocationInputObjectSchema = Schema;
