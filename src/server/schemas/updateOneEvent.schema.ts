import { z } from 'zod';
import { EventUpdateInputObjectSchema } from './objects/EventUpdateInput.schema';
import { EventWhereUniqueInputObjectSchema } from './objects/EventWhereUniqueInput.schema';

export const EventUpdateOneSchema = z.object({
  data: EventUpdateInputObjectSchema,
  where: EventWhereUniqueInputObjectSchema,
});
