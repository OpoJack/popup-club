import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { TagsOnPopupsUncheckedUpdateManyWithoutTagNestedInputObjectSchema } from './TagsOnPopupsUncheckedUpdateManyWithoutTagNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagsUncheckedUpdateInput> = z
  .object({
    id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    name: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    popups: z
      .lazy(
        () => TagsOnPopupsUncheckedUpdateManyWithoutTagNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const TagsUncheckedUpdateInputObjectSchema = Schema;
