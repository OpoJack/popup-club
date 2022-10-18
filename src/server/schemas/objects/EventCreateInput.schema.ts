import { z } from 'zod';
import { LocationCreateNestedOneWithoutEventsInputObjectSchema } from './LocationCreateNestedOneWithoutEventsInput.schema';
import { PopupCreateNestedOneWithoutEventsInputObjectSchema } from './PopupCreateNestedOneWithoutEventsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EventCreateInput> = z
  .object({
    id: z.string().optional(),
    name: z.string().optional().nullable(),
    description: z.string().optional().nullable(),
    date: z.date(),
    location: z.lazy(
      () => LocationCreateNestedOneWithoutEventsInputObjectSchema,
    ),
    popup: z.lazy(() => PopupCreateNestedOneWithoutEventsInputObjectSchema),
  })
  .strict();

export const EventCreateInputObjectSchema = Schema;
