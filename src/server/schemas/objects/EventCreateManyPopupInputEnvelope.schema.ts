import { z } from 'zod';
import { EventCreateManyPopupInputObjectSchema } from './EventCreateManyPopupInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EventCreateManyPopupInputEnvelope> = z
  .object({
    data: z.lazy(() => EventCreateManyPopupInputObjectSchema).array(),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const EventCreateManyPopupInputEnvelopeObjectSchema = Schema;
