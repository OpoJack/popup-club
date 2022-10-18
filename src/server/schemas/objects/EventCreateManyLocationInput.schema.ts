import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EventCreateManyLocationInput> = z
  .object({
    id: z.string().optional(),
    popupId: z.string(),
    name: z.string().optional().nullable(),
    description: z.string().optional().nullable(),
    date: z.date(),
  })
  .strict();

export const EventCreateManyLocationInputObjectSchema = Schema;
