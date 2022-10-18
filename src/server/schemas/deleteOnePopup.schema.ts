import { z } from 'zod';
import { PopupWhereUniqueInputObjectSchema } from './objects/PopupWhereUniqueInput.schema';

export const PopupDeleteOneSchema = z.object({
  where: PopupWhereUniqueInputObjectSchema,
});
