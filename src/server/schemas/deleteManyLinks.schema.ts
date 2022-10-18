import { z } from 'zod';
import { LinksWhereInputObjectSchema } from './objects/LinksWhereInput.schema';

export const LinksDeleteManySchema = z.object({
  where: LinksWhereInputObjectSchema.optional(),
});
