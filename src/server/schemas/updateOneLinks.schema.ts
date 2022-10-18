import { z } from 'zod';
import { LinksUpdateInputObjectSchema } from './objects/LinksUpdateInput.schema';
import { LinksWhereUniqueInputObjectSchema } from './objects/LinksWhereUniqueInput.schema';

export const LinksUpdateOneSchema = z.object({
  data: LinksUpdateInputObjectSchema,
  where: LinksWhereUniqueInputObjectSchema,
});
