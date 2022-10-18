import { z } from 'zod';
import { LinksWhereUniqueInputObjectSchema } from './objects/LinksWhereUniqueInput.schema';
import { LinksCreateInputObjectSchema } from './objects/LinksCreateInput.schema';
import { LinksUpdateInputObjectSchema } from './objects/LinksUpdateInput.schema';

export const LinksUpsertSchema = z.object({
  where: LinksWhereUniqueInputObjectSchema,
  create: LinksCreateInputObjectSchema,
  update: LinksUpdateInputObjectSchema,
});
