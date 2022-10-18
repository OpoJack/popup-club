import { createRouter } from "./helpers/createRouter";
import { LinksFindUniqueSchema } from "../schemas/findUniqueLinks.schema";
import { LinksFindFirstSchema } from "../schemas/findFirstLinks.schema";
import { LinksFindManySchema } from "../schemas/findManyLinks.schema";
import { LinksCreateOneSchema } from "../schemas/createOneLinks.schema";
import { LinksCreateManySchema } from "../schemas/createManyLinks.schema";
import { LinksDeleteOneSchema } from "../schemas/deleteOneLinks.schema";
import { LinksUpdateOneSchema } from "../schemas/updateOneLinks.schema";
import { LinksDeleteManySchema } from "../schemas/deleteManyLinks.schema";
import { LinksUpdateManySchema } from "../schemas/updateManyLinks.schema";
import { LinksUpsertSchema } from "../schemas/upsertOneLinks.schema";
import { LinksAggregateSchema } from "../schemas/aggregateLinks.schema";
import { LinksGroupBySchema } from "../schemas/groupByLinks.schema";

export const linksRouter = createRouter()

  .query("aggregateLinks", {
    input: LinksAggregateSchema,
    async resolve({ ctx, input }) {
      const aggregateLinks = await ctx.prisma.links.aggregate(input);
      return aggregateLinks;
    },
  })

  .mutation("createManyLinks", {
    input: LinksCreateManySchema,
    async resolve({ ctx, input }) {
      const createManyLinks = await ctx.prisma.links.createMany({ data: input.data });
      return createManyLinks;
    },
  })

  .mutation("createOneLinks", {
    input: LinksCreateOneSchema,
    async resolve({ ctx, input }) {
      const createOneLinks = await ctx.prisma.links.create({ data: input.data });
      return createOneLinks;
    },
  })

  .mutation("deleteManyLinks", {
    input: LinksDeleteManySchema,
    async resolve({ ctx, input }) {
      const deleteManyLinks = await ctx.prisma.links.deleteMany(input);
      return deleteManyLinks;
    },
  })

  .mutation("deleteOneLinks", {
    input: LinksDeleteOneSchema,
    async resolve({ ctx, input }) {
      const deleteOneLinks = await ctx.prisma.links.delete({ where: input.where });
      return deleteOneLinks;
    },
  })

  .query("findFirstLinks", {
    input: LinksFindFirstSchema,
    async resolve({ ctx, input }) {
      const findFirstLinks = await ctx.prisma.links.findFirst(input);
      return findFirstLinks;
    },
  })

  .query("findManyLinks", {
    input: LinksFindManySchema,
    async resolve({ ctx, input }) {
      const findManyLinks = await ctx.prisma.links.findMany(input);
      return findManyLinks;
    },
  })

  .query("findUniqueLinks", {
    input: LinksFindUniqueSchema,
    async resolve({ ctx, input }) {
      const findUniqueLinks = await ctx.prisma.links.findUnique({ where: input.where });
      return findUniqueLinks;
    },
  })

  .query("groupByLinks", {
    input: LinksGroupBySchema,
    async resolve({ ctx, input }) {
      const groupByLinks = await ctx.prisma.links.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByLinks;
    },
  })

  .mutation("updateManyLinks", {
    input: LinksUpdateManySchema,
    async resolve({ ctx, input }) {
      const updateManyLinks = await ctx.prisma.links.updateMany(input);
      return updateManyLinks;
    },
  })

  .mutation("updateOneLinks", {
    input: LinksUpdateOneSchema,
    async resolve({ ctx, input }) {
      const updateOneLinks = await ctx.prisma.links.update({ where: input.where, data: input.data });
      return updateOneLinks;
    },
  })

  .mutation("upsertOneLinks", {
    input: LinksUpsertSchema,
    async resolve({ ctx, input }) {
      const upsertOneLinks = await ctx.prisma.links.upsert({ where: input.where, create: input.create, update: input.update });
      return upsertOneLinks;
    },
  })
