import { z } from 'zod';
import { LinksCreateInputObjectSchema } from './objects/LinksCreateInput.schema';

export const LinksCreateOneSchema = z.object({
  data: LinksCreateInputObjectSchema,
});
