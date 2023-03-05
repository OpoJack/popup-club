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

  create: protectedProcedure
    .input(
      z.object({
        popupId: z.string(),
        imageUrl: z.string(),
        website: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.prisma.link.create({
        data: {
          popupId: input.popupId,
          imageUrl: input.imageUrl,
          website: input.website,
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
