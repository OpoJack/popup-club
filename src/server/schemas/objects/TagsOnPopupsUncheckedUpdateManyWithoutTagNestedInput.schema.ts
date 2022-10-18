import { z } from 'zod';
import { TagsOnPopupsCreateWithoutTagInputObjectSchema } from './TagsOnPopupsCreateWithoutTagInput.schema';
import { TagsOnPopupsUncheckedCreateWithoutTagInputObjectSchema } from './TagsOnPopupsUncheckedCreateWithoutTagInput.schema';
import { TagsOnPopupsCreateOrConnectWithoutTagInputObjectSchema } from './TagsOnPopupsCreateOrConnectWithoutTagInput.schema';
import { TagsOnPopupsUpsertWithWhereUniqueWithoutTagInputObjectSchema } from './TagsOnPopupsUpsertWithWhereUniqueWithoutTagInput.schema';
import { TagsOnPopupsCreateManyTagInputEnvelopeObjectSchema } from './TagsOnPopupsCreateManyTagInputEnvelope.schema';
import { TagsOnPopupsWhereUniqueInputObjectSchema } from './TagsOnPopupsWhereUniqueInput.schema';
import { TagsOnPopupsUpdateWithWhereUniqueWithoutTagInputObjectSchema } from './TagsOnPopupsUpdateWithWhereUniqueWithoutTagInput.schema';
import { TagsOnPopupsUpdateManyWithWhereWithoutTagInputObjectSchema } from './TagsOnPopupsUpdateManyWithWhereWithoutTagInput.schema';
import { TagsOnPopupsScalarWhereInputObjectSchema } from './TagsOnPopupsScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagsOnPopupsUncheckedUpdateManyWithoutTagNestedInput> =
  z.union([
    z
      .object({
        create: z
          .union([
            z.lazy(() => TagsOnPopupsCreateWithoutTagInputObjectSchema),
            z.lazy(() => TagsOnPopupsCreateWithoutTagInputObjectSchema).array(),
            z.lazy(
              () => TagsOnPopupsUncheckedCreateWithoutTagInputObjectSchema,
            ),
            z
              .lazy(
                () => TagsOnPopupsUncheckedCreateWithoutTagInputObjectSchema,
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
              () => TagsOnPopupsCreateOrConnectWithoutTagInputObjectSchema,
            ),
            z
              .lazy(
                () => TagsOnPopupsCreateOrConnectWithoutTagInputObjectSchema,
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
                TagsOnPopupsUpsertWithWhereUniqueWithoutTagInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  TagsOnPopupsUpsertWithWhereUniqueWithoutTagInputObjectSchema,
              )
              .array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        createMany: z
          .lazy(() => TagsOnPopupsCreateManyTagInputEnvelopeObjectSchema)
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
                TagsOnPopupsUpdateWithWhereUniqueWithoutTagInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  TagsOnPopupsUpdateWithWhereUniqueWithoutTagInputObjectSchema,
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
              () => TagsOnPopupsUpdateManyWithWhereWithoutTagInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  TagsOnPopupsUpdateManyWithWhereWithoutTagInputObjectSchema,
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

export const TagsOnPopupsUncheckedUpdateManyWithoutTagNestedInputObjectSchema =
  Schema;
