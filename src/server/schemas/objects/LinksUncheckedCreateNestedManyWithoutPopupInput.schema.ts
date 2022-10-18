import { z } from 'zod';
import { LinksCreateWithoutPopupInputObjectSchema } from './LinksCreateWithoutPopupInput.schema';
import { LinksUncheckedCreateWithoutPopupInputObjectSchema } from './LinksUncheckedCreateWithoutPopupInput.schema';
import { LinksCreateOrConnectWithoutPopupInputObjectSchema } from './LinksCreateOrConnectWithoutPopupInput.schema';
import { LinksCreateManyPopupInputEnvelopeObjectSchema } from './LinksCreateManyPopupInputEnvelope.schema';
import { LinksWhereUniqueInputObjectSchema } from './LinksWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LinksUncheckedCreateNestedManyWithoutPopupInput> =
  z.union([
    z
      .object({
        create: z
          .union([
            z.lazy(() => LinksCreateWithoutPopupInputObjectSchema),
            z.lazy(() => LinksCreateWithoutPopupInputObjectSchema).array(),
            z.lazy(() => LinksUncheckedCreateWithoutPopupInputObjectSchema),
            z
              .lazy(() => LinksUncheckedCreateWithoutPopupInputObjectSchema)
              .array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connectOrCreate: z
          .union([
            z.lazy(() => LinksCreateOrConnectWithoutPopupInputObjectSchema),
            z
              .lazy(() => LinksCreateOrConnectWithoutPopupInputObjectSchema)
              .array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        createMany: z
          .lazy(() => LinksCreateManyPopupInputEnvelopeObjectSchema)
          .optional(),
      })
      .strict(),
    z
      .object({
        connect: z
          .union([
            z.lazy(() => LinksWhereUniqueInputObjectSchema),
            z.lazy(() => LinksWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
  ]);

export const LinksUncheckedCreateNestedManyWithoutPopupInputObjectSchema =
  Schema;
