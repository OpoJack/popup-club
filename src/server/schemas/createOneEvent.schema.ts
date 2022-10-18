import { z } from 'zod';
import { EventCreateInputObjectSchema } from './objects/EventCreateInput.schema';

export const EventCreateOneSchema = z.object({
  data: EventCreateInputObjectSchema,
});
