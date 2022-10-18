import { z } from 'zod';
import { EventWhereUniqueInputObjectSchema } from './objects/EventWhereUniqueInput.schema';
import { EventCreateInputObjectSchema } from './objects/EventCreateInput.schema';
import { EventUpdateInputObjectSchema } from './objects/EventUpdateInput.schema';

export const EventUpsertSchema = z.object({
  where: EventWhereUniqueInputObjectSchema,
  create: EventCreateInputObjectSchema,
  update: EventUpdateInputObjectSchema,
});
