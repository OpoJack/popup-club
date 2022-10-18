import { createRouter } from "./helpers/createRouter";
import { TagsFindUniqueSchema } from "../schemas/findUniqueTags.schema";
import { TagsFindFirstSchema } from "../schemas/findFirstTags.schema";
import { TagsFindManySchema } from "../schemas/findManyTags.schema";
import { TagsCreateOneSchema } from "../schemas/createOneTags.schema";
import { TagsCreateManySchema } from "../schemas/createManyTags.schema";
import { TagsDeleteOneSchema } from "../schemas/deleteOneTags.schema";
import { TagsUpdateOneSchema } from "../schemas/updateOneTags.schema";
import { TagsDeleteManySchema } from "../schemas/deleteManyTags.schema";
import { TagsUpdateManySchema } from "../schemas/updateManyTags.schema";
import { TagsUpsertSchema } from "../schemas/upsertOneTags.schema";
import { TagsAggregateSchema } from "../schemas/aggregateTags.schema";
import { TagsGroupBySchema } from "../schemas/groupByTags.schema";

export const tagsRouter = createRouter()

  .query("aggregateTags", {
    input: TagsAggregateSchema,
    async resolve({ ctx, input }) {
      const aggregateTags = await ctx.prisma.tags.aggregate(input);
      return aggregateTags;
    },
  })

  .mutation("createManyTags", {
    input: TagsCreateManySchema,
    async resolve({ ctx, input }) {
      const createManyTags = await ctx.prisma.tags.createMany({ data: input.data });
      return createManyTags;
    },
  })

  .mutation("createOneTags", {
    input: TagsCreateOneSchema,
    async resolve({ ctx, input }) {
      const createOneTags = await ctx.prisma.tags.create({ data: input.data });
      return createOneTags;
    },
  })

  .mutation("deleteManyTags", {
    input: TagsDeleteManySchema,
    async resolve({ ctx, input }) {
      const deleteManyTags = await ctx.prisma.tags.deleteMany(input);
      return deleteManyTags;
    },
  })

  .mutation("deleteOneTags", {
    input: TagsDeleteOneSchema,
    async resolve({ ctx, input }) {
      const deleteOneTags = await ctx.prisma.tags.delete({ where: input.where });
      return deleteOneTags;
    },
  })

  .query("findFirstTags", {
    input: TagsFindFirstSchema,
    async resolve({ ctx, input }) {
      const findFirstTags = await ctx.prisma.tags.findFirst(input);
      return findFirstTags;
    },
  })

  .query("findManyTags", {
    input: TagsFindManySchema,
    async resolve({ ctx, input }) {
      const findManyTags = await ctx.prisma.tags.findMany(input);
      return findManyTags;
    },
  })

  .query("findUniqueTags", {
    input: TagsFindUniqueSchema,
    async resolve({ ctx, input }) {
      const findUniqueTags = await ctx.prisma.tags.findUnique({ where: input.where });
      return findUniqueTags;
    },
  })

  .query("groupByTags", {
    input: TagsGroupBySchema,
    async resolve({ ctx, input }) {
      const groupByTags = await ctx.prisma.tags.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByTags;
    },
  })

  .mutation("updateManyTags", {
    input: TagsUpdateManySchema,
    async resolve({ ctx, input }) {
      const updateManyTags = await ctx.prisma.tags.updateMany(input);
      return updateManyTags;
    },
  })

  .mutation("updateOneTags", {
    input: TagsUpdateOneSchema,
    async resolve({ ctx, input }) {
      const updateOneTags = await ctx.prisma.tags.update({ where: input.where, data: input.data });
      return updateOneTags;
    },
  })

  .mutation("upsertOneTags", {
    input: TagsUpsertSchema,
    async resolve({ ctx, input }) {
      const upsertOneTags = await ctx.prisma.tags.upsert({ where: input.where, create: input.create, update: input.update });
      return upsertOneTags;
    },
  })
