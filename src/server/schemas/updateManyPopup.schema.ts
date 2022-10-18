import { z } from 'zod';
import { PopupUpdateManyMutationInputObjectSchema } from './objects/PopupUpdateManyMutationInput.schema';
import { PopupWhereInputObjectSchema } from './objects/PopupWhereInput.schema';

export const PopupUpdateManySchema = z.object({
  data: PopupUpdateManyMutationInputObjectSchema,
  where: PopupWhereInputObjectSchema.optional(),
});
