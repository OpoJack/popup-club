import { z } from 'zod';
import { LinksWhereInputObjectSchema } from './objects/LinksWhereInput.schema';
import { LinksOrderByWithRelationInputObjectSchema } from './objects/LinksOrderByWithRelationInput.schema';
import { LinksWhereUniqueInputObjectSchema } from './objects/LinksWhereUniqueInput.schema';

export const LinksAggregateSchema = z.object({
  where: LinksWhereInputObjectSchema.optional(),
  orderBy: LinksOrderByWithRelationInputObjectSchema.optional(),
  cursor: LinksWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
});
