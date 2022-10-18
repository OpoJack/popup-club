import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { TagsUpdateOneRequiredWithoutPopupsNestedInputObjectSchema } from './TagsUpdateOneRequiredWithoutPopupsNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagsOnPopupsUpdateWithoutPopupInput> = z
  .object({
    id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    tag: z
      .lazy(() => TagsUpdateOneRequiredWithoutPopupsNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const TagsOnPopupsUpdateWithoutPopupInputObjectSchema = Schema;
