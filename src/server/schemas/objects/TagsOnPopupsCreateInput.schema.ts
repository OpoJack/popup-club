import { z } from 'zod';
import { PopupCreateNestedOneWithoutTagsInputObjectSchema } from './PopupCreateNestedOneWithoutTagsInput.schema';
import { TagsCreateNestedOneWithoutPopupsInputObjectSchema } from './TagsCreateNestedOneWithoutPopupsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagsOnPopupsCreateInput> = z
  .object({
    id: z.string().optional(),
    popup: z.lazy(() => PopupCreateNestedOneWithoutTagsInputObjectSchema),
    tag: z.lazy(() => TagsCreateNestedOneWithoutPopupsInputObjectSchema),
  })
  .strict();

export const TagsOnPopupsCreateInputObjectSchema = Schema;
