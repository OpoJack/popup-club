import { z } from 'zod';
import { TagsOnPopupsCreateWithoutPopupInputObjectSchema } from './TagsOnPopupsCreateWithoutPopupInput.schema';
import { TagsOnPopupsUncheckedCreateWithoutPopupInputObjectSchema } from './TagsOnPopupsUncheckedCreateWithoutPopupInput.schema';
import { TagsOnPopupsCreateOrConnectWithoutPopupInputObjectSchema } from './TagsOnPopupsCreateOrConnectWithoutPopupInput.schema';
import { TagsOnPopupsUpsertWithWhereUniqueWithoutPopupInputObjectSchema } from './TagsOnPopupsUpsertWithWhereUniqueWithoutPopupInput.schema';
import { TagsOnPopupsCreateManyPopupInputEnvelopeObjectSchema } from './TagsOnPopupsCreateManyPopupInputEnvelope.schema';
import { TagsOnPopupsWhereUniqueInputObjectSchema } from './TagsOnPopupsWhereUniqueInput.schema';
import { TagsOnPopupsUpdateWithWhereUniqueWithoutPopupInputObjectSchema } from './TagsOnPopupsUpdateWithWhereUniqueWithoutPopupInput.schema';
import { TagsOnPopupsUpdateManyWithWhereWithoutPopupInputObjectSchema } from './TagsOnPopupsUpdateManyWithWhereWithoutPopupInput.schema';
import { TagsOnPopupsScalarWhereInputObjectSchema } from './TagsOnPopupsScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagsOnPopupsUncheckedUpdateManyWithoutPopupNestedInput> =
  z.union([
    z
      .object({
        create: z
          .union([
            z.lazy(() => TagsOnPopupsCreateWithoutPopupInputObjectSchema),
            z
              .lazy(() => TagsOnPopupsCreateWithoutPopupInputObjectSchema)
              .array(),
            z.lazy(
              () => TagsOnPopupsUncheckedCreateWithoutPopupInputObjectSchema,
            ),
            z
              .lazy(
                () => TagsOnPopupsUncheckedCreateWithoutPopupInputObjectSchema,
              )
              .array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connectOrCreate: z
          .union([
            z.lazy(
              () => TagsOnPopupsCreateOrConnectWithoutPopupInputObjectSchema,
            ),
            z
              .lazy(
                () => TagsOnPopupsCreateOrConnectWithoutPopupInputObjectSchema,
              )
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
              () =>
                TagsOnPopupsUpsertWithWhereUniqueWithoutPopupInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  TagsOnPopupsUpsertWithWhereUniqueWithoutPopupInputObjectSchema,
              )
              .array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        createMany: z
          .lazy(() => TagsOnPopupsCreateManyPopupInputEnvelopeObjectSchema)
          .optional(),
      })
      .strict(),
    z
      .object({
        set: z
          .union([
            z.lazy(() => TagsOnPopupsWhereUniqueInputObjectSchema),
            z.lazy(() => TagsOnPopupsWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        disconnect: z
          .union([
            z.lazy(() => TagsOnPopupsWhereUniqueInputObjectSchema),
            z.lazy(() => TagsOnPopupsWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        delete: z
          .union([
            z.lazy(() => TagsOnPopupsWhereUniqueInputObjectSchema),
            z.lazy(() => TagsOnPopupsWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connect: z
          .union([
            z.lazy(() => TagsOnPopupsWhereUniqueInputObjectSchema),
            z.lazy(() => TagsOnPopupsWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        update: z
          .union([
            z.lazy(
              () =>
                TagsOnPopupsUpdateWithWhereUniqueWithoutPopupInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  TagsOnPopupsUpdateWithWhereUniqueWithoutPopupInputObjectSchema,
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
            z.lazy(
              () =>
                TagsOnPopupsUpdateManyWithWhereWithoutPopupInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  TagsOnPopupsUpdateManyWithWhereWithoutPopupInputObjectSchema,
              )
              .array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        deleteMany: z
          .union([
            z.lazy(() => TagsOnPopupsScalarWhereInputObjectSchema),
            z.lazy(() => TagsOnPopupsScalarWhereInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
  ]);

export const TagsOnPopupsUncheckedUpdateManyWithoutPopupNestedInputObjectSchema =
  Schema;
