import { z } from 'zod';
import { EventUncheckedCreateNestedManyWithoutLocationInputObjectSchema } from './EventUncheckedCreateNestedManyWithoutLocationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LocationUncheckedCreateInput> = z
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
      .lazy(
        () => EventUncheckedCreateNestedManyWithoutLocationInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const LocationUncheckedCreateInputObjectSchema = Schema;
