import { z } from 'zod';
import { EventCreateManyLocationInputObjectSchema } from './EventCreateManyLocationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EventCreateManyLocationInputEnvelope> = z
  .object({
    data: z.lazy(() => EventCreateManyLocationInputObjectSchema).array(),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const EventCreateManyLocationInputEnvelopeObjectSchema = Schema;
