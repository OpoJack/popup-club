import { createRouter } from "./helpers/createRouter";
import { TagsOnPopupsFindUniqueSchema } from "../schemas/findUniqueTagsOnPopups.schema";
import { TagsOnPopupsFindFirstSchema } from "../schemas/findFirstTagsOnPopups.schema";
import { TagsOnPopupsFindManySchema } from "../schemas/findManyTagsOnPopups.schema";
import { TagsOnPopupsCreateOneSchema } from "../schemas/createOneTagsOnPopups.schema";
import { TagsOnPopupsCreateManySchema } from "../schemas/createManyTagsOnPopups.schema";
import { TagsOnPopupsDeleteOneSchema } from "../schemas/deleteOneTagsOnPopups.schema";
import { TagsOnPopupsUpdateOneSchema } from "../schemas/updateOneTagsOnPopups.schema";
import { TagsOnPopupsDeleteManySchema } from "../schemas/deleteManyTagsOnPopups.schema";
import { TagsOnPopupsUpdateManySchema } from "../schemas/updateManyTagsOnPopups.schema";
import { TagsOnPopupsUpsertSchema } from "../schemas/upsertOneTagsOnPopups.schema";
import { TagsOnPopupsAggregateSchema } from "../schemas/aggregateTagsOnPopups.schema";
import { TagsOnPopupsGroupBySchema } from "../schemas/groupByTagsOnPopups.schema";

export const tagsonpopupsRouter = createRouter()

  .query("aggregateTagsOnPopups", {
    input: TagsOnPopupsAggregateSchema,
    async resolve({ ctx, input }) {
      const aggregateTagsOnPopups = await ctx.prisma.tagsOnPopups.aggregate(input);
      return aggregateTagsOnPopups;
    },
  })

  .mutation("createManyTagsOnPopups", {
    input: TagsOnPopupsCreateManySchema,
    async resolve({ ctx, input }) {
      const createManyTagsOnPopups = await ctx.prisma.tagsOnPopups.createMany({ data: input.data });
      return createManyTagsOnPopups;
    },
  })

  .mutation("createOneTagsOnPopups", {
    input: TagsOnPopupsCreateOneSchema,
    async resolve({ ctx, input }) {
      const createOneTagsOnPopups = await ctx.prisma.tagsOnPopups.create({ data: input.data });
      return createOneTagsOnPopups;
    },
  })

  .mutation("deleteManyTagsOnPopups", {
    input: TagsOnPopupsDeleteManySchema,
    async resolve({ ctx, input }) {
      const deleteManyTagsOnPopups = await ctx.prisma.tagsOnPopups.deleteMany(input);
      return deleteManyTagsOnPopups;
    },
  })

  .mutation("deleteOneTagsOnPopups", {
    input: TagsOnPopupsDeleteOneSchema,
    async resolve({ ctx, input }) {
      const deleteOneTagsOnPopups = await ctx.prisma.tagsOnPopups.delete({ where: input.where });
      return deleteOneTagsOnPopups;
    },
  })

  .query("findFirstTagsOnPopups", {
    input: TagsOnPopupsFindFirstSchema,
    async resolve({ ctx, input }) {
      const findFirstTagsOnPopups = await ctx.prisma.tagsOnPopups.findFirst(input);
      return findFirstTagsOnPopups;
    },
  })

  .query("findManyTagsOnPopups", {
    input: TagsOnPopupsFindManySchema,
    async resolve({ ctx, input }) {
      const findManyTagsOnPopups = await ctx.prisma.tagsOnPopups.findMany(input);
      return findManyTagsOnPopups;
    },
  })

  .query("findUniqueTagsOnPopups", {
    input: TagsOnPopupsFindUniqueSchema,
    async resolve({ ctx, input }) {
      const findUniqueTagsOnPopups = await ctx.prisma.tagsOnPopups.findUnique({ where: input.where });
      return findUniqueTagsOnPopups;
    },
  })

  .query("groupByTagsOnPopups", {
    input: TagsOnPopupsGroupBySchema,
    async resolve({ ctx, input }) {
      const groupByTagsOnPopups = await ctx.prisma.tagsOnPopups.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByTagsOnPopups;
    },
  })

  .mutation("updateManyTagsOnPopups", {
    input: TagsOnPopupsUpdateManySchema,
    async resolve({ ctx, input }) {
      const updateManyTagsOnPopups = await ctx.prisma.tagsOnPopups.updateMany(input);
      return updateManyTagsOnPopups;
    },
  })

  .mutation("updateOneTagsOnPopups", {
    input: TagsOnPopupsUpdateOneSchema,
    async resolve({ ctx, input }) {
      const updateOneTagsOnPopups = await ctx.prisma.tagsOnPopups.update({ where: input.where, data: input.data });
      return updateOneTagsOnPopups;
    },
  })

  .mutation("upsertOneTagsOnPopups", {
    input: TagsOnPopupsUpsertSchema,
    async resolve({ ctx, input }) {
      const upsertOneTagsOnPopups = await ctx.prisma.tagsOnPopups.upsert({ where: input.where, create: input.create, update: input.update });
      return upsertOneTagsOnPopups;
    },
  })
