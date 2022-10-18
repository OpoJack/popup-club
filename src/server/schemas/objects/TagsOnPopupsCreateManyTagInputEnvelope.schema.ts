import { z } from 'zod';
import { TagsOnPopupsCreateManyTagInputObjectSchema } from './TagsOnPopupsCreateManyTagInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagsOnPopupsCreateManyTagInputEnvelope> = z
  .object({
    data: z.lazy(() => TagsOnPopupsCreateManyTagInputObjectSchema).array(),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const TagsOnPopupsCreateManyTagInputEnvelopeObjectSchema = Schema;
