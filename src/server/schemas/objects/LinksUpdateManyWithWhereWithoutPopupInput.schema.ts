import { z } from 'zod';
import { LinksScalarWhereInputObjectSchema } from './LinksScalarWhereInput.schema';
import { LinksUpdateManyMutationInputObjectSchema } from './LinksUpdateManyMutationInput.schema';
import { LinksUncheckedUpdateManyWithoutLinksInputObjectSchema } from './LinksUncheckedUpdateManyWithoutLinksInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LinksUpdateManyWithWhereWithoutPopupInput> = z
  .object({
    where: z.lazy(() => LinksScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => LinksUpdateManyMutationInputObjectSchema),
      z.lazy(() => LinksUncheckedUpdateManyWithoutLinksInputObjectSchema),
    ]),
  })
  .strict();

export const LinksUpdateManyWithWhereWithoutPopupInputObjectSchema = Schema;
