import { z } from "zod";
import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";

export const linkRouter = createTRPCRouter({
  get: publicProcedure
    .input(
      z.object({
        popupId: z.string(),
      })
    )
    .query(({ ctx, input }) => {
      return ctx.prisma.link.findUnique({
        where: {
          popupId: input.popupId,
        },
      });
    }),

  upsert: protectedProcedure
    .input(
      z.object({
        popupId: z.string(),
        Instagram: z.string(),
        Facebook: z.string(),
        TikTok: z.string(),
        Website: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.prisma.link.upsert({
        where: {
          popupId: input.popupId,
        },
        update: {
          Instagram: input.Instagram,
          Facebook: input.Facebook,
          TikTok: input.TikTok,
          Website: input.Website,
        },
        create: {
          Instagram: input.Instagram,
          Facebook: input.Facebook,
          TikTok: input.TikTok,
          Website: input.Website,
          popup: {
            connect: {
              id: input.popupId,
            },
          },
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
