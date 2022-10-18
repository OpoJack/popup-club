import { z } from 'zod';
import { TagsOnPopupsUncheckedCreateNestedManyWithoutTagInputObjectSchema } from './TagsOnPopupsUncheckedCreateNestedManyWithoutTagInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagsUncheckedCreateInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    popups: z
      .lazy(
        () => TagsOnPopupsUncheckedCreateNestedManyWithoutTagInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const TagsUncheckedCreateInputObjectSchema = Schema;
