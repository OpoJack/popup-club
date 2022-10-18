import { z } from 'zod';

export const PopupScalarFieldEnumSchema = z.enum([
  'id',
  'name',
  'description',
  'basedIn',
  'isHot',
  'orderType',
]);
