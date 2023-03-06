import { z } from "zod";
import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";

export const tagRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.tag.findMany();
  }),

  getAllByPopup: publicProcedure
    .input(
      z.object({
        popupId: z.string(),
      })
    )
    .query(({ ctx, input }) => {
      return ctx.prisma.tag.findMany({
        where: {
          popups: {
            some: {
              id: input.popupId,
            },
          },
        },
      });
    }),

  create: protectedProcedure
    .input(
      z.object({
        name: z.string(),
        popupId: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.prisma.tag.create({
        data: {
          name: input.name,
          popups: {
            connect: {
              id: input.popupId,
            },
          },
        },
      });
    }),

  update: protectedProcedure
    .input(z.object({ id: z.string(), name: z.string() }))
    .mutation(async ({ ctx, input }) => {
      return ctx.prisma.tag.update({
        where: {
          id: input.id,
        },
        data: {
          name: input.name,
        },
      });
    }),

  delete: protectedProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      return ctx.prisma.tag.delete({
        where: {
          id: input.id,
        },
      });
    }),
});
