import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { PopupRelationFilterObjectSchema } from './PopupRelationFilter.schema';
import { PopupWhereInputObjectSchema } from './PopupWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LinksWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => LinksWhereInputObjectSchema),
        z.lazy(() => LinksWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => LinksWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => LinksWhereInputObjectSchema),
        z.lazy(() => LinksWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    popupId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    imageUrl: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    facebook: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    instagram: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    twitter: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    website: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    youtube: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    popup: z
      .union([
        z.lazy(() => PopupRelationFilterObjectSchema),
        z.lazy(() => PopupWhereInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const LinksWhereInputObjectSchema = Schema;
