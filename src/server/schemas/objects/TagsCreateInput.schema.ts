import { z } from 'zod';
import { TagsOnPopupsCreateNestedManyWithoutTagInputObjectSchema } from './TagsOnPopupsCreateNestedManyWithoutTagInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagsCreateInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    popups: z
      .lazy(() => TagsOnPopupsCreateNestedManyWithoutTagInputObjectSchema)
      .optional(),
  })
  .strict();

export const TagsCreateInputObjectSchema = Schema;
