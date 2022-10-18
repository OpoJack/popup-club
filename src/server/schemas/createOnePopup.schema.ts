import { z } from 'zod';
import { PopupCreateInputObjectSchema } from './objects/PopupCreateInput.schema';

export const PopupCreateOneSchema = z.object({
  data: PopupCreateInputObjectSchema,
});
