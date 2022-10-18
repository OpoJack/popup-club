import { z } from 'zod';
import { EventWhereUniqueInputObjectSchema } from './EventWhereUniqueInput.schema';
import { EventUpdateWithoutPopupInputObjectSchema } from './EventUpdateWithoutPopupInput.schema';
import { EventUncheckedUpdateWithoutPopupInputObjectSchema } from './EventUncheckedUpdateWithoutPopupInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EventUpdateWithWhereUniqueWithoutPopupInput> = z
  .object({
    where: z.lazy(() => EventWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => EventUpdateWithoutPopupInputObjectSchema),
      z.lazy(() => EventUncheckedUpdateWithoutPopupInputObjectSchema),
    ]),
  })
  .strict();

export const EventUpdateWithWhereUniqueWithoutPopupInputObjectSchema = Schema;
