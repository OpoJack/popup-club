import { z } from 'zod';
import { TagsOnPopupsScalarWhereInputObjectSchema } from './TagsOnPopupsScalarWhereInput.schema';
import { TagsOnPopupsUpdateManyMutationInputObjectSchema } from './TagsOnPopupsUpdateManyMutationInput.schema';
import { TagsOnPopupsUncheckedUpdateManyWithoutPopupsInputObjectSchema } from './TagsOnPopupsUncheckedUpdateManyWithoutPopupsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagsOnPopupsUpdateManyWithWhereWithoutTagInput> =
  z
    .object({
      where: z.lazy(() => TagsOnPopupsScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => TagsOnPopupsUpdateManyMutationInputObjectSchema),
        z.lazy(
          () => TagsOnPopupsUncheckedUpdateManyWithoutPopupsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const TagsOnPopupsUpdateManyWithWhereWithoutTagInputObjectSchema =
  Schema;
