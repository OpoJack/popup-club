import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { PopupUpdateOneRequiredWithoutTagsNestedInputObjectSchema } from './PopupUpdateOneRequiredWithoutTagsNestedInput.schema';
import { TagsUpdateOneRequiredWithoutPopupsNestedInputObjectSchema } from './TagsUpdateOneRequiredWithoutPopupsNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagsOnPopupsUpdateInput> = z
  .object({
    id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    popup: z
      .lazy(() => PopupUpdateOneRequiredWithoutTagsNestedInputObjectSchema)
      .optional(),
    tag: z
      .lazy(() => TagsUpdateOneRequiredWithoutPopupsNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const TagsOnPopupsUpdateInputObjectSchema = Schema;
