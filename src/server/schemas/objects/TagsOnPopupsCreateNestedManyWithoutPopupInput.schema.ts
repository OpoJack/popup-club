import { z } from 'zod';
import { TagsOnPopupsCreateWithoutPopupInputObjectSchema } from './TagsOnPopupsCreateWithoutPopupInput.schema';
import { TagsOnPopupsUncheckedCreateWithoutPopupInputObjectSchema } from './TagsOnPopupsUncheckedCreateWithoutPopupInput.schema';
import { TagsOnPopupsCreateOrConnectWithoutPopupInputObjectSchema } from './TagsOnPopupsCreateOrConnectWithoutPopupInput.schema';
import { TagsOnPopupsCreateManyPopupInputEnvelopeObjectSchema } from './TagsOnPopupsCreateManyPopupInputEnvelope.schema';
import { TagsOnPopupsWhereUniqueInputObjectSchema } from './TagsOnPopupsWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagsOnPopupsCreateNestedManyWithoutPopupInput> =
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
        createMany: z
          .lazy(() => TagsOnPopupsCreateManyPopupInputEnvelopeObjectSchema)
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

export const TagsOnPopupsCreateNestedManyWithoutPopupInputObjectSchema = Schema;
