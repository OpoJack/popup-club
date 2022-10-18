import { z } from 'zod';
import { LinksUpdateManyMutationInputObjectSchema } from './objects/LinksUpdateManyMutationInput.schema';
import { LinksWhereInputObjectSchema } from './objects/LinksWhereInput.schema';

export const LinksUpdateManySchema = z.object({
  data: LinksUpdateManyMutationInputObjectSchema,
  where: LinksWhereInputObjectSchema.optional(),
});
