import { z } from 'zod';
import { PopupWhereInputObjectSchema } from './objects/PopupWhereInput.schema';

export const PopupDeleteManySchema = z.object({
  where: PopupWhereInputObjectSchema.optional(),
});
