import { z } from 'zod';
import { PopupCreateNestedOneWithoutLinksInputObjectSchema } from './PopupCreateNestedOneWithoutLinksInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LinksCreateInput> = z
  .object({
    id: z.string().optional(),
    imageUrl: z.string().optional().nullable(),
    facebook: z.string().optional().nullable(),
    instagram: z.string().optional().nullable(),
    twitter: z.string().optional().nullable(),
    website: z.string().optional().nullable(),
    youtube: z.string().optional().nullable(),
    popup: z.lazy(() => PopupCreateNestedOneWithoutLinksInputObjectSchema),
  })
  .strict();

export const LinksCreateInputObjectSchema = Schema;
