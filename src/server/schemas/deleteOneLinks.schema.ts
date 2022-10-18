import { z } from 'zod';
import { LinksWhereUniqueInputObjectSchema } from './objects/LinksWhereUniqueInput.schema';

export const LinksDeleteOneSchema = z.object({
  where: LinksWhereUniqueInputObjectSchema,
});
