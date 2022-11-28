// import { createRouter } from './context';
import { z } from 'zod';

// export const locationRouter = createRouter()
//   .query('getLocations', {
//     async resolve({ ctx }) {
//       return await ctx.prisma.location.findMany();
//     },
//   })
//   .query('getLocationsByID', {
//     input: z.object({
//       locationid: z.string(),
//     }),
//     async resolve({ ctx, input }) {
//       return await ctx.prisma.popup.findUnique({
//         where: {
//           id: input.locationid,
//         },
//         include: {
//           events: true,
//         },
//       });
//     },
//   });
