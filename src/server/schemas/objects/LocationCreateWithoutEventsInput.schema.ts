import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LocationCreateWithoutEventsInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    address: z.string(),
    city: z.string(),
    state: z.string(),
    zip: z.string(),
    country: z.string(),
    mapsUrl: z.string(),
  })
  .strict();

export const LocationCreateWithoutEventsInputObjectSchema = Schema;
