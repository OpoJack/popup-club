import { z } from 'zod';
import { PopupCreateManyInputObjectSchema } from './objects/PopupCreateManyInput.schema';

export const PopupCreateManySchema = z.object({
  data: PopupCreateManyInputObjectSchema,
});
