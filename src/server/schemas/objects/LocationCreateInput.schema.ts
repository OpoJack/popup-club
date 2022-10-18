import { z } from 'zod';
import { EventCreateNestedManyWithoutLocationInputObjectSchema } from './EventCreateNestedManyWithoutLocationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LocationCreateInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    address: z.string(),
    city: z.string(),
    state: z.string(),
    zip: z.string(),
    country: z.string(),
    mapsUrl: z.string(),
    events: z
      .lazy(() => EventCreateNestedManyWithoutLocationInputObjectSchema)
      .optional(),
  })
  .strict();

export const LocationCreateInputObjectSchema = Schema;
