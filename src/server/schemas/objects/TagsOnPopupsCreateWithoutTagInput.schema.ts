import { z } from 'zod';
import { PopupCreateNestedOneWithoutTagsInputObjectSchema } from './PopupCreateNestedOneWithoutTagsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagsOnPopupsCreateWithoutTagInput> = z
  .object({
    id: z.string().optional(),
    popup: z.lazy(() => PopupCreateNestedOneWithoutTagsInputObjectSchema),
  })
  .strict();

export const TagsOnPopupsCreateWithoutTagInputObjectSchema = Schema;
