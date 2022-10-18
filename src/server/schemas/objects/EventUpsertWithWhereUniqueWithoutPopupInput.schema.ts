import { z } from 'zod';
import { EventWhereUniqueInputObjectSchema } from './EventWhereUniqueInput.schema';
import { EventUpdateWithoutPopupInputObjectSchema } from './EventUpdateWithoutPopupInput.schema';
import { EventUncheckedUpdateWithoutPopupInputObjectSchema } from './EventUncheckedUpdateWithoutPopupInput.schema';
import { EventCreateWithoutPopupInputObjectSchema } from './EventCreateWithoutPopupInput.schema';
import { EventUncheckedCreateWithoutPopupInputObjectSchema } from './EventUncheckedCreateWithoutPopupInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EventUpsertWithWhereUniqueWithoutPopupInput> = z
  .object({
    where: z.lazy(() => EventWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => EventUpdateWithoutPopupInputObjectSchema),
      z.lazy(() => EventUncheckedUpdateWithoutPopupInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => EventCreateWithoutPopupInputObjectSchema),
      z.lazy(() => EventUncheckedCreateWithoutPopupInputObjectSchema),
    ]),
  })
  .strict();

export const EventUpsertWithWhereUniqueWithoutPopupInputObjectSchema = Schema;
