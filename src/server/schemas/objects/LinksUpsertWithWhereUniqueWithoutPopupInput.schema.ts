import { z } from 'zod';
import { LinksWhereUniqueInputObjectSchema } from './LinksWhereUniqueInput.schema';
import { LinksUpdateWithoutPopupInputObjectSchema } from './LinksUpdateWithoutPopupInput.schema';
import { LinksUncheckedUpdateWithoutPopupInputObjectSchema } from './LinksUncheckedUpdateWithoutPopupInput.schema';
import { LinksCreateWithoutPopupInputObjectSchema } from './LinksCreateWithoutPopupInput.schema';
import { LinksUncheckedCreateWithoutPopupInputObjectSchema } from './LinksUncheckedCreateWithoutPopupInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LinksUpsertWithWhereUniqueWithoutPopupInput> = z
  .object({
    where: z.lazy(() => LinksWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => LinksUpdateWithoutPopupInputObjectSchema),
      z.lazy(() => LinksUncheckedUpdateWithoutPopupInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => LinksCreateWithoutPopupInputObjectSchema),
      z.lazy(() => LinksUncheckedCreateWithoutPopupInputObjectSchema),
    ]),
  })
  .strict();

export const LinksUpsertWithWhereUniqueWithoutPopupInputObjectSchema = Schema;
