import { z } from 'zod';
import { LinksWhereUniqueInputObjectSchema } from './objects/LinksWhereUniqueInput.schema';

export const LinksFindUniqueSchema = z.object({
  where: LinksWhereUniqueInputObjectSchema,
});
