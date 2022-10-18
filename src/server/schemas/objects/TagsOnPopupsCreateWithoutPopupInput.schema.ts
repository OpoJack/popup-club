import { z } from 'zod';
import { TagsCreateNestedOneWithoutPopupsInputObjectSchema } from './TagsCreateNestedOneWithoutPopupsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagsOnPopupsCreateWithoutPopupInput> = z
  .object({
    id: z.string().optional(),
    tag: z.lazy(() => TagsCreateNestedOneWithoutPopupsInputObjectSchema),
  })
  .strict();

export const TagsOnPopupsCreateWithoutPopupInputObjectSchema = Schema;
