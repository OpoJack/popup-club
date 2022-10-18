import { z } from 'zod';
import { TagsOnPopupsScalarWhereInputObjectSchema } from './TagsOnPopupsScalarWhereInput.schema';
import { TagsOnPopupsUpdateManyMutationInputObjectSchema } from './TagsOnPopupsUpdateManyMutationInput.schema';
import { TagsOnPopupsUncheckedUpdateManyWithoutTagsInputObjectSchema } from './TagsOnPopupsUncheckedUpdateManyWithoutTagsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagsOnPopupsUpdateManyWithWhereWithoutPopupInput> =
  z
    .object({
      where: z.lazy(() => TagsOnPopupsScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => TagsOnPopupsUpdateManyMutationInputObjectSchema),
        z.lazy(
          () => TagsOnPopupsUncheckedUpdateManyWithoutTagsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const TagsOnPopupsUpdateManyWithWhereWithoutPopupInputObjectSchema =
  Schema;
