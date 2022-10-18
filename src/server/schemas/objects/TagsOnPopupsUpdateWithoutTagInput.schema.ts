import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { PopupUpdateOneRequiredWithoutTagsNestedInputObjectSchema } from './PopupUpdateOneRequiredWithoutTagsNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagsOnPopupsUpdateWithoutTagInput> = z
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
  })
  .strict();

export const TagsOnPopupsUpdateWithoutTagInputObjectSchema = Schema;
