import { z } from 'zod';
import { EventCreateManyInputObjectSchema } from './objects/EventCreateManyInput.schema';

export const EventCreateManySchema = z.object({
  data: EventCreateManyInputObjectSchema,
});
