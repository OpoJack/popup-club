import { z } from 'zod';
import { LinksWhereUniqueInputObjectSchema } from './LinksWhereUniqueInput.schema';
import { LinksCreateWithoutPopupInputObjectSchema } from './LinksCreateWithoutPopupInput.schema';
import { LinksUncheckedCreateWithoutPopupInputObjectSchema } from './LinksUncheckedCreateWithoutPopupInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LinksCreateOrConnectWithoutPopupInput> = z
  .object({
    where: z.lazy(() => LinksWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => LinksCreateWithoutPopupInputObjectSchema),
      z.lazy(() => LinksUncheckedCreateWithoutPopupInputObjectSchema),
    ]),
  })
  .strict();

export const LinksCreateOrConnectWithoutPopupInputObjectSchema = Schema;
