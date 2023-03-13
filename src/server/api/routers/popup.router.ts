import { z } from "zod";
import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";

export const popupRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.popup.findMany({
      include: {
        links: true,
        events: true,
        tags: true,
      },
    });
  }),

  //This will find the popup by the given popup id
  getOne: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ ctx, input }) => {
      return ctx.prisma.popup.findUnique({
        where: {
          id: input.id,
        },
        select: {
          id: true,
          name: true,
          description: true,
          imageUrl: true,
          basedIn: true,
          isHot: true,
          orderType: true,
        },
      });
    }),

  updateOne: protectedProcedure
    .input(
      z.object({
        id: z.string(),
        name: z.string(),
        description: z.string(),
        imageUrl: z.string(),
        basedIn: z.string(),
        isHot: z.boolean(),
        orderType: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.prisma.popup.update({
        where: {
          id: input.id,
        },
        data: {
          id: input.id,
          name: input.name,
          description: input.description,
          imageUrl: input.imageUrl,
          basedIn: input.basedIn,
          isHot: input.isHot,
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
