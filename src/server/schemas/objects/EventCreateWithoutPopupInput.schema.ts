import { z } from 'zod';
import { LocationCreateNestedOneWithoutEventsInputObjectSchema } from './LocationCreateNestedOneWithoutEventsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EventCreateWithoutPopupInput> = z
  .object({
    id: z.string().optional(),
    name: z.string().optional().nullable(),
    description: z.string().optional().nullable(),
    date: z.date(),
    location: z.lazy(
      () => LocationCreateNestedOneWithoutEventsInputObjectSchema,
    ),
  })
  .strict();

export const EventCreateWithoutPopupInputObjectSchema = Schema;
