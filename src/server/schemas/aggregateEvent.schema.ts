import { z } from 'zod';
import { EventWhereInputObjectSchema } from './objects/EventWhereInput.schema';
import { EventOrderByWithRelationInputObjectSchema } from './objects/EventOrderByWithRelationInput.schema';
import { EventWhereUniqueInputObjectSchema } from './objects/EventWhereUniqueInput.schema';

export const EventAggregateSchema = z.object({
  where: EventWhereInputObjectSchema.optional(),
  orderBy: EventOrderByWithRelationInputObjectSchema.optional(),
  cursor: EventWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
});
