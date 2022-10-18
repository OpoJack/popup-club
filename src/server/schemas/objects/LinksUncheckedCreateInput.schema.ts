import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LinksUncheckedCreateInput> = z
  .object({
    id: z.string().optional(),
    popupId: z.string(),
    imageUrl: z.string().optional().nullable(),
    facebook: z.string().optional().nullable(),
    instagram: z.string().optional().nullable(),
    twitter: z.string().optional().nullable(),
    website: z.string().optional().nullable(),
    youtube: z.string().optional().nullable(),
  })
  .strict();

export const LinksUncheckedCreateInputObjectSchema = Schema;
