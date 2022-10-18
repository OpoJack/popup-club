import { z } from 'zod';
import { PopupWhereUniqueInputObjectSchema } from './objects/PopupWhereUniqueInput.schema';

export const PopupFindUniqueSchema = z.object({
  where: PopupWhereUniqueInputObjectSchema,
});
