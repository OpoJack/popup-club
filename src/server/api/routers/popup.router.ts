import { z } from 'zod';
import { createTRPCRouter, publicProcedure, protectedProcedure } from '~/server/api/trpc';

export const popupRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.popup.findMany({
      include: {
        links: true,
        events: {
          include: {
            location: true,
          },
          orderBy: {
            date: 'asc',
          },
          where: {
            date: {
              gte: new Date(),
              lte: new Date(new Date().setDate(new Date().getDate() + 60)),
            },
          },
        },
        tags: {
          orderBy: {
            name: 'asc',
          },
        },
      },
    });
  }),

  //This will find the popup by the given popup id
  getOne: publicProcedure.input(z.object({ id: z.string() })).query(async ({ ctx, input }) => {
    return ctx.prisma.popup.findUnique({
      where: {
        id: input.id,
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
          where: {
            date: {
              gte: new Date(new Date().setDate(new Date().getDate() - 60)),
              lte: new Date(new Date().setDate(new Date().getDate() + 60)),
            },
          },
        },
        tags: true,
      },
    });
  }),

  updateOne: protectedProcedure
    .input(
      z.object({
        popupId: z.string(),
        name: z.string(),
        description: z.string(),
        imageUrl: z.string(),
        basedIn: z.string(),
        orderType: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.prisma.popup.update({
        where: {
          id: input.popupId,
        },
        data: {
          name: input.name,
          description: input.description,
          imageUrl: input.imageUrl,
          basedIn: input.basedIn,
          orderType: input.orderType,
        },
      });
    }),

  create: protectedProcedure
    .input(
      z.object({
        name: z.string(),
        description: z.string(),
        imageUrl: z.string(),
        basedIn: z.string(),
        isHot: z.boolean(),
        orderType: z.string(),
        userId: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.prisma.popup.create({
        data: {
          name: input.name,
          description: input.description,
          imageUrl: input.imageUrl,
          basedIn: input.basedIn,
          isHot: input.isHot,
          orderType: input.orderType,
          user: {
            connect: {
              id: input.userId,
            },
          },
        },
      });
    }),

  delete: protectedProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      return ctx.prisma.popup.delete({
        where: {
          id: input.id,
        },
      });
    }),
});
