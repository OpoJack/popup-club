import { z } from "zod";
import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";

export const linkRouter = createTRPCRouter({
  getAll: publicProcedure
    .input(
      z.object({
        popupId: z.string(),
      })
    )
    .query(({ ctx, input }) => {
      return ctx.prisma.link.findMany({
        where: {
          popupId: input.popupId,
        },
      });
    }),

  getOne: publicProcedure
    .input(
      z.object({
        name: z.string(),
      })
    )
    .query(({ ctx, input }) => {
      return ctx.prisma.link.findUnique({
        where: {
          name: input.name,
        },
      });
    }),

  create: protectedProcedure
    .input(
      z.object({
        name: z.string(),
        popupId: z.string(),
        imageUrl: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.prisma.link.create({
        data: {
          name: input.name,
          popupId: input.popupId,
          imageUrl: input.imageUrl,
        },
      });
    }),

  delete: protectedProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      return ctx.prisma.link.delete({
        where: {
          id: input.id,
        },
      });
    }),
});
