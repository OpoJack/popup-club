import { z } from 'zod';
import { TagsCreateWithoutPopupsInputObjectSchema } from './TagsCreateWithoutPopupsInput.schema';
import { TagsUncheckedCreateWithoutPopupsInputObjectSchema } from './TagsUncheckedCreateWithoutPopupsInput.schema';
import { TagsCreateOrConnectWithoutPopupsInputObjectSchema } from './TagsCreateOrConnectWithoutPopupsInput.schema';
import { TagsWhereUniqueInputObjectSchema } from './TagsWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagsCreateNestedOneWithoutPopupsInput> = z.union(
  [
    z
      .object({
        create: z
          .union([
            z.lazy(() => TagsCreateWithoutPopupsInputObjectSchema),
            z.lazy(() => TagsUncheckedCreateWithoutPopupsInputObjectSchema),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connectOrCreate: z
          .lazy(() => TagsCreateOrConnectWithoutPopupsInputObjectSchema)
          .optional(),
      })
      .strict(),
    z
      .object({
        connect: z.lazy(() => TagsWhereUniqueInputObjectSchema).optional(),
      })
      .strict(),
  ],
);

export const TagsCreateNestedOneWithoutPopupsInputObjectSchema = Schema;
