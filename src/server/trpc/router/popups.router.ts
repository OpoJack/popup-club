import { z } from 'zod';
import { getSinglePopupSchema } from '../schemas';
import { publicProcedure, router } from '../trpc';

//This will return all the popups in the database

export const popupRouter = router({
  getAllPopups: publicProcedure.query(({ ctx }) => {
    const popups = ctx.prisma.popup.findMany({
      take: 100,
      include: {
        links: true,
        events: {
          include: {
            location: true,
          },
          orderBy: {
            date: 'asc',
          },
        },
        tags: {
          include: {
            tag: true,
          },
          orderBy: {
            tag: {
              name: 'asc',
            },
          },
        },
      },
      orderBy: {
        name: 'asc',
      },
    });
    return popups;
  }),
  getSinglePopup: publicProcedure
    .input(getSinglePopupSchema)
    .query(({ ctx, input }) => {
      const popup = ctx.prisma.popup.findUnique({
        where: {
          id: input.popupId,
        },
        include: {
          links: true,
          events: {
            include: {
              location: true,
            },
            orderBy: {
              date: 'asc',
            },
          },
          tags: {
            include: {
              tag: true,
            },
            orderBy: {
              tag: {
                name: 'asc',
              },
            },
          },
        },
      });
      if (!popup) {
        throw new Error('No popup found');
      }
      return popup;
    }),
});

// export const popupRouter = router({
//   getAllPopups: publicProcedure.query(({ ctx }) => {
//     return ctx.prisma.popup.findMany({
//       include: {
//         links: {
//           include: {
//             popup: true,
//           },
//         },
//         events: {
//           include: {
//             location: true,
//           },
//         },
//         tags: {
//           include: {
//             tag: true,
//           },
//         },
//       },
//     });
//   }),
// });
