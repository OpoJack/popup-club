import { z } from 'zod';
import { EventWhereUniqueInputObjectSchema } from './EventWhereUniqueInput.schema';
import { EventCreateWithoutPopupInputObjectSchema } from './EventCreateWithoutPopupInput.schema';
import { EventUncheckedCreateWithoutPopupInputObjectSchema } from './EventUncheckedCreateWithoutPopupInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EventCreateOrConnectWithoutPopupInput> = z
  .object({
    where: z.lazy(() => EventWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => EventCreateWithoutPopupInputObjectSchema),
      z.lazy(() => EventUncheckedCreateWithoutPopupInputObjectSchema),
    ]),
  })
  .strict();

export const EventCreateOrConnectWithoutPopupInputObjectSchema = Schema;
