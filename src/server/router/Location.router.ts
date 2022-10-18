import { createRouter } from "./helpers/createRouter";
import { LocationFindUniqueSchema } from "../schemas/findUniqueLocation.schema";
import { LocationFindFirstSchema } from "../schemas/findFirstLocation.schema";
import { LocationFindManySchema } from "../schemas/findManyLocation.schema";
import { LocationCreateOneSchema } from "../schemas/createOneLocation.schema";
import { LocationCreateManySchema } from "../schemas/createManyLocation.schema";
import { LocationDeleteOneSchema } from "../schemas/deleteOneLocation.schema";
import { LocationUpdateOneSchema } from "../schemas/updateOneLocation.schema";
import { LocationDeleteManySchema } from "../schemas/deleteManyLocation.schema";
import { LocationUpdateManySchema } from "../schemas/updateManyLocation.schema";
import { LocationUpsertSchema } from "../schemas/upsertOneLocation.schema";
import { LocationAggregateSchema } from "../schemas/aggregateLocation.schema";
import { LocationGroupBySchema } from "../schemas/groupByLocation.schema";

export const locationsRouter = createRouter()

  .query("aggregateLocation", {
    input: LocationAggregateSchema,
    async resolve({ ctx, input }) {
      const aggregateLocation = await ctx.prisma.location.aggregate(input);
      return aggregateLocation;
    },
  })

  .mutation("createManyLocation", {
    input: LocationCreateManySchema,
    async resolve({ ctx, input }) {
      const createManyLocation = await ctx.prisma.location.createMany({ data: input.data });
      return createManyLocation;
    },
  })

  .mutation("createOneLocation", {
    input: LocationCreateOneSchema,
    async resolve({ ctx, input }) {
      const createOneLocation = await ctx.prisma.location.create({ data: input.data });
      return createOneLocation;
    },
  })

  .mutation("deleteManyLocation", {
    input: LocationDeleteManySchema,
    async resolve({ ctx, input }) {
      const deleteManyLocation = await ctx.prisma.location.deleteMany(input);
      return deleteManyLocation;
    },
  })

  .mutation("deleteOneLocation", {
    input: LocationDeleteOneSchema,
    async resolve({ ctx, input }) {
      const deleteOneLocation = await ctx.prisma.location.delete({ where: input.where });
      return deleteOneLocation;
    },
  })

  .query("findFirstLocation", {
    input: LocationFindFirstSchema,
    async resolve({ ctx, input }) {
      const findFirstLocation = await ctx.prisma.location.findFirst(input);
      return findFirstLocation;
    },
  })

  .query("findManyLocation", {
    input: LocationFindManySchema,
    async resolve({ ctx, input }) {
      const findManyLocation = await ctx.prisma.location.findMany(input);
      return findManyLocation;
    },
  })

  .query("findUniqueLocation", {
    input: LocationFindUniqueSchema,
    async resolve({ ctx, input }) {
      const findUniqueLocation = await ctx.prisma.location.findUnique({ where: input.where });
      return findUniqueLocation;
    },
  })

  .query("groupByLocation", {
    input: LocationGroupBySchema,
    async resolve({ ctx, input }) {
      const groupByLocation = await ctx.prisma.location.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByLocation;
    },
  })

  .mutation("updateManyLocation", {
    input: LocationUpdateManySchema,
    async resolve({ ctx, input }) {
      const updateManyLocation = await ctx.prisma.location.updateMany(input);
      return updateManyLocation;
    },
  })

  .mutation("updateOneLocation", {
    input: LocationUpdateOneSchema,
    async resolve({ ctx, input }) {
      const updateOneLocation = await ctx.prisma.location.update({ where: input.where, data: input.data });
      return updateOneLocation;
    },
  })

  .mutation("upsertOneLocation", {
    input: LocationUpsertSchema,
    async resolve({ ctx, input }) {
      const upsertOneLocation = await ctx.prisma.location.upsert({ where: input.where, create: input.create, update: input.update });
      return upsertOneLocation;
    },
  })
