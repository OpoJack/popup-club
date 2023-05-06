import { z } from 'zod';
import { createTRPCRouter, publicProcedure, protectedProcedure } from '~/server/api/trpc';

export const locationRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.location.findMany();
  }),

  getOne: publicProcedure
    .input(
      z.object({
        id: z.string(),
      })
    )
    .query(({ ctx, input }) => {
      return ctx.prisma.location.findUnique({
        where: {
          id: input.id,
        },
      });
    }),

  create: protectedProcedure
    .input(
      z.object({
        name: z.string(),
        address: z.string(),
        city: z.string(),
        state: z.string(),
        zip: z.string(),
        country: z.string(),
        mapsUrl: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.prisma.location.create({
        data: {
          name: input.name,
          address: input.address,
          city: input.city,
          state: input.state,
          zip: input.zip,
          country: input.country,
          mapsUrl: input.mapsUrl,
        },
      });
    }),

  delete: protectedProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      return ctx.prisma.location.delete({
        where: {
          id: input.id,
        },
      });
    }),
});
