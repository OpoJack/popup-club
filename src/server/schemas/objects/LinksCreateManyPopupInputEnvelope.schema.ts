import { z } from 'zod';
import { LinksCreateManyPopupInputObjectSchema } from './LinksCreateManyPopupInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LinksCreateManyPopupInputEnvelope> = z
  .object({
    data: z.lazy(() => LinksCreateManyPopupInputObjectSchema).array(),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const LinksCreateManyPopupInputEnvelopeObjectSchema = Schema;
