import { z } from 'zod';
import { TagsOnPopupsCreateManyPopupInputObjectSchema } from './TagsOnPopupsCreateManyPopupInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagsOnPopupsCreateManyPopupInputEnvelope> = z
  .object({
    data: z.lazy(() => TagsOnPopupsCreateManyPopupInputObjectSchema).array(),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const TagsOnPopupsCreateManyPopupInputEnvelopeObjectSchema = Schema;
