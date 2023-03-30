import { z } from "zod";
import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";

export const tagRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.tag.findMany({
      take: 20,
    });
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

  updateOne: protectedProcedure
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

  //This will remove a tag from a popup
  //If the tag does not exist, it will be ignored
  removeTag: protectedProcedure
    .input(
      z.object({
        popupId: z.string(),
        tagId: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.prisma.popup.update({
        where: {
          id: input.popupId,
        },
        data: {
          tags: {
            disconnect: {
              id: input.tagId,
            },
          },
        },
      });
    }),

  //This will update the Tags array with a new tag
  //If the tag already exists, it will be ignored
  //If the tag does not exist, it will be created
  updateTags: protectedProcedure
    .input(
      z.object({
        popupId: z.string(),
        tags: z.array(z.string()),
      })
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.prisma.popup.update({
        where: {
          id: input.popupId,
        },
        data: {
          tags: {
            connectOrCreate: input.tags.map((tag) => ({
              where: {
                name: tag,
              },
              create: {
                name: tag,
              },
            })),
          },
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
