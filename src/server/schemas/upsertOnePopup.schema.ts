import { z } from 'zod';
import { PopupWhereUniqueInputObjectSchema } from './objects/PopupWhereUniqueInput.schema';
import { PopupCreateInputObjectSchema } from './objects/PopupCreateInput.schema';
import { PopupUpdateInputObjectSchema } from './objects/PopupUpdateInput.schema';

export const PopupUpsertSchema = z.object({
  where: PopupWhereUniqueInputObjectSchema,
  create: PopupCreateInputObjectSchema,
  update: PopupUpdateInputObjectSchema,
});
