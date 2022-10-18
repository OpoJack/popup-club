import { z } from 'zod';
import { LinksWhereUniqueInputObjectSchema } from './LinksWhereUniqueInput.schema';
import { LinksUpdateWithoutPopupInputObjectSchema } from './LinksUpdateWithoutPopupInput.schema';
import { LinksUncheckedUpdateWithoutPopupInputObjectSchema } from './LinksUncheckedUpdateWithoutPopupInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LinksUpdateWithWhereUniqueWithoutPopupInput> = z
  .object({
    where: z.lazy(() => LinksWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => LinksUpdateWithoutPopupInputObjectSchema),
      z.lazy(() => LinksUncheckedUpdateWithoutPopupInputObjectSchema),
    ]),
  })
  .strict();

export const LinksUpdateWithWhereUniqueWithoutPopupInputObjectSchema = Schema;
