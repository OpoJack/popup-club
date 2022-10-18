import { z } from 'zod';
import { TagsOnPopupsCreateWithoutTagInputObjectSchema } from './TagsOnPopupsCreateWithoutTagInput.schema';
import { TagsOnPopupsUncheckedCreateWithoutTagInputObjectSchema } from './TagsOnPopupsUncheckedCreateWithoutTagInput.schema';
import { TagsOnPopupsCreateOrConnectWithoutTagInputObjectSchema } from './TagsOnPopupsCreateOrConnectWithoutTagInput.schema';
import { TagsOnPopupsCreateManyTagInputEnvelopeObjectSchema } from './TagsOnPopupsCreateManyTagInputEnvelope.schema';
import { TagsOnPopupsWhereUniqueInputObjectSchema } from './TagsOnPopupsWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagsOnPopupsCreateNestedManyWithoutTagInput> =
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
        createMany: z
          .lazy(() => TagsOnPopupsCreateManyTagInputEnvelopeObjectSchema)
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
  ]);

export const TagsOnPopupsCreateNestedManyWithoutTagInputObjectSchema = Schema;
