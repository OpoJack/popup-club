import { z } from 'zod';
import { PopupCreateNestedOneWithoutEventsInputObjectSchema } from './PopupCreateNestedOneWithoutEventsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EventCreateWithoutLocationInput> = z
  .object({
    id: z.string().optional(),
    name: z.string().optional().nullable(),
    description: z.string().optional().nullable(),
    date: z.date(),
    popup: z.lazy(() => PopupCreateNestedOneWithoutEventsInputObjectSchema),
  })
  .strict();

export const EventCreateWithoutLocationInputObjectSchema = Schema;
