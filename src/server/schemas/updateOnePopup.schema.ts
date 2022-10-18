import { z } from 'zod';
import { PopupUpdateInputObjectSchema } from './objects/PopupUpdateInput.schema';
import { PopupWhereUniqueInputObjectSchema } from './objects/PopupWhereUniqueInput.schema';

export const PopupUpdateOneSchema = z.object({
  data: PopupUpdateInputObjectSchema,
  where: PopupWhereUniqueInputObjectSchema,
});
