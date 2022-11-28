import z from 'zod';

export const getSinglePopupSchema = z.object({
  popupId: z.string().cuid(),
});
