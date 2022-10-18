import { z } from 'zod';
import { PopupWhereUniqueInputObjectSchema } from './PopupWhereUniqueInput.schema';
import { PopupCreateWithoutLinksInputObjectSchema } from './PopupCreateWithoutLinksInput.schema';
import { PopupUncheckedCreateWithoutLinksInputObjectSchema } from './PopupUncheckedCreateWithoutLinksInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PopupCreateOrConnectWithoutLinksInput> = z
  .object({
    where: z.lazy(() => PopupWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => PopupCreateWithoutLinksInputObjectSchema),
      z.lazy(() => PopupUncheckedCreateWithoutLinksInputObjectSchema),
    ]),
  })
  .strict();

export const PopupCreateOrConnectWithoutLinksInputObjectSchema = Schema;
