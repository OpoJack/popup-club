import { z } from 'zod';
import { LinksCreateManyInputObjectSchema } from './objects/LinksCreateManyInput.schema';

export const LinksCreateManySchema = z.object({
  data: LinksCreateManyInputObjectSchema,
});
