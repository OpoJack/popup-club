import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { LocationRelationFilterObjectSchema } from './LocationRelationFilter.schema';
import { LocationWhereInputObjectSchema } from './LocationWhereInput.schema';
import { PopupRelationFilterObjectSchema } from './PopupRelationFilter.schema';
import { PopupWhereInputObjectSchema } from './PopupWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EventWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => EventWhereInputObjectSchema),
        z.lazy(() => EventWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => EventWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => EventWhereInputObjectSchema),
        z.lazy(() => EventWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    popupId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    locationId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    name: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    description: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    date: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.date()])
      .optional(),
    location: z
      .union([
        z.lazy(() => LocationRelationFilterObjectSchema),
        z.lazy(() => LocationWhereInputObjectSchema),
      ])
      .optional(),
    popup: z
      .union([
        z.lazy(() => PopupRelationFilterObjectSchema),
        z.lazy(() => PopupWhereInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const EventWhereInputObjectSchema = Schema;
