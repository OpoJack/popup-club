import { router } from "@trpc/server";
import { z } from "zod";
import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";

export const popupRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.popup.findMany();
  }),

  create: protectedProcedure
    .input(
      z.object({
        name: z.string(),
        description: z.string(),
        basedIn: z.string(),
        isHot: z.boolean(),
        orderType: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.prisma.popup.create({
        data: {
          name: input.name,
          description: input.description,
          basedIn: input.basedIn,
          isHot: input.isHot,
          orderType: input.orderType,
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
