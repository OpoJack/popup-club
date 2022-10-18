import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { TagsOnPopupsUncheckedUpdateManyWithoutPopupNestedInputObjectSchema } from './TagsOnPopupsUncheckedUpdateManyWithoutPopupNestedInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { EventUncheckedUpdateManyWithoutPopupNestedInputObjectSchema } from './EventUncheckedUpdateManyWithoutPopupNestedInput.schema';
import { LinksUncheckedUpdateManyWithoutPopupNestedInputObjectSchema } from './LinksUncheckedUpdateManyWithoutPopupNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PopupUncheckedUpdateInput> = z
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
    description: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    basedIn: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    tags: z
      .lazy(
        () =>
          TagsOnPopupsUncheckedUpdateManyWithoutPopupNestedInputObjectSchema,
      )
      .optional(),
    isHot: z
      .union([
        z.boolean(),
        z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    orderType: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    events: z
      .lazy(() => EventUncheckedUpdateManyWithoutPopupNestedInputObjectSchema)
      .optional(),
    links: z
      .lazy(() => LinksUncheckedUpdateManyWithoutPopupNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const PopupUncheckedUpdateInputObjectSchema = Schema;
