import { z } from 'zod';
import { LinksCreateWithoutPopupInputObjectSchema } from './LinksCreateWithoutPopupInput.schema';
import { LinksUncheckedCreateWithoutPopupInputObjectSchema } from './LinksUncheckedCreateWithoutPopupInput.schema';
import { LinksCreateOrConnectWithoutPopupInputObjectSchema } from './LinksCreateOrConnectWithoutPopupInput.schema';
import { LinksUpsertWithWhereUniqueWithoutPopupInputObjectSchema } from './LinksUpsertWithWhereUniqueWithoutPopupInput.schema';
import { LinksCreateManyPopupInputEnvelopeObjectSchema } from './LinksCreateManyPopupInputEnvelope.schema';
import { LinksWhereUniqueInputObjectSchema } from './LinksWhereUniqueInput.schema';
import { LinksUpdateWithWhereUniqueWithoutPopupInputObjectSchema } from './LinksUpdateWithWhereUniqueWithoutPopupInput.schema';
import { LinksUpdateManyWithWhereWithoutPopupInputObjectSchema } from './LinksUpdateManyWithWhereWithoutPopupInput.schema';
import { LinksScalarWhereInputObjectSchema } from './LinksScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LinksUpdateManyWithoutPopupNestedInput> =
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
        upsert: z
          .union([
            z.lazy(
              () => LinksUpsertWithWhereUniqueWithoutPopupInputObjectSchema,
            ),
            z
              .lazy(
                () => LinksUpsertWithWhereUniqueWithoutPopupInputObjectSchema,
              )
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
        set: z
          .union([
            z.lazy(() => LinksWhereUniqueInputObjectSchema),
            z.lazy(() => LinksWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        disconnect: z
          .union([
            z.lazy(() => LinksWhereUniqueInputObjectSchema),
            z.lazy(() => LinksWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        delete: z
          .union([
            z.lazy(() => LinksWhereUniqueInputObjectSchema),
            z.lazy(() => LinksWhereUniqueInputObjectSchema).array(),
          ])
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
    z
      .object({
        update: z
          .union([
            z.lazy(
              () => LinksUpdateWithWhereUniqueWithoutPopupInputObjectSchema,
            ),
            z
              .lazy(
                () => LinksUpdateWithWhereUniqueWithoutPopupInputObjectSchema,
              )
              .array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        updateMany: z
          .union([
            z.lazy(() => LinksUpdateManyWithWhereWithoutPopupInputObjectSchema),
            z
              .lazy(() => LinksUpdateManyWithWhereWithoutPopupInputObjectSchema)
              .array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        deleteMany: z
          .union([
            z.lazy(() => LinksScalarWhereInputObjectSchema),
            z.lazy(() => LinksScalarWhereInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
  ]);

export const LinksUpdateManyWithoutPopupNestedInputObjectSchema = Schema;
