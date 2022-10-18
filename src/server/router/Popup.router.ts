import { createRouter } from "./helpers/createRouter";
import { PopupFindUniqueSchema } from "../schemas/findUniquePopup.schema";
import { PopupFindFirstSchema } from "../schemas/findFirstPopup.schema";
import { PopupFindManySchema } from "../schemas/findManyPopup.schema";
import { PopupCreateOneSchema } from "../schemas/createOnePopup.schema";
import { PopupCreateManySchema } from "../schemas/createManyPopup.schema";
import { PopupDeleteOneSchema } from "../schemas/deleteOnePopup.schema";
import { PopupUpdateOneSchema } from "../schemas/updateOnePopup.schema";
import { PopupDeleteManySchema } from "../schemas/deleteManyPopup.schema";
import { PopupUpdateManySchema } from "../schemas/updateManyPopup.schema";
import { PopupUpsertSchema } from "../schemas/upsertOnePopup.schema";
import { PopupAggregateSchema } from "../schemas/aggregatePopup.schema";
import { PopupGroupBySchema } from "../schemas/groupByPopup.schema";

export const popupsRouter = createRouter()

  .query("aggregatePopup", {
    input: PopupAggregateSchema,
    async resolve({ ctx, input }) {
      const aggregatePopup = await ctx.prisma.popup.aggregate(input);
      return aggregatePopup;
    },
  })

  .mutation("createManyPopup", {
    input: PopupCreateManySchema,
    async resolve({ ctx, input }) {
      const createManyPopup = await ctx.prisma.popup.createMany({ data: input.data });
      return createManyPopup;
    },
  })

  .mutation("createOnePopup", {
    input: PopupCreateOneSchema,
    async resolve({ ctx, input }) {
      const createOnePopup = await ctx.prisma.popup.create({ data: input.data });
      return createOnePopup;
    },
  })

  .mutation("deleteManyPopup", {
    input: PopupDeleteManySchema,
    async resolve({ ctx, input }) {
      const deleteManyPopup = await ctx.prisma.popup.deleteMany(input);
      return deleteManyPopup;
    },
  })

  .mutation("deleteOnePopup", {
    input: PopupDeleteOneSchema,
    async resolve({ ctx, input }) {
      const deleteOnePopup = await ctx.prisma.popup.delete({ where: input.where });
      return deleteOnePopup;
    },
  })

  .query("findFirstPopup", {
    input: PopupFindFirstSchema,
    async resolve({ ctx, input }) {
      const findFirstPopup = await ctx.prisma.popup.findFirst(input);
      return findFirstPopup;
    },
  })

  .query("findManyPopup", {
    input: PopupFindManySchema,
    async resolve({ ctx, input }) {
      const findManyPopup = await ctx.prisma.popup.findMany(input);
      return findManyPopup;
    },
  })

  .query("findUniquePopup", {
    input: PopupFindUniqueSchema,
    async resolve({ ctx, input }) {
      const findUniquePopup = await ctx.prisma.popup.findUnique({ where: input.where });
      return findUniquePopup;
    },
  })

  .query("groupByPopup", {
    input: PopupGroupBySchema,
    async resolve({ ctx, input }) {
      const groupByPopup = await ctx.prisma.popup.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByPopup;
    },
  })

  .mutation("updateManyPopup", {
    input: PopupUpdateManySchema,
    async resolve({ ctx, input }) {
      const updateManyPopup = await ctx.prisma.popup.updateMany(input);
      return updateManyPopup;
    },
  })

  .mutation("updateOnePopup", {
    input: PopupUpdateOneSchema,
    async resolve({ ctx, input }) {
      const updateOnePopup = await ctx.prisma.popup.update({ where: input.where, data: input.data });
      return updateOnePopup;
    },
  })

  .mutation("upsertOnePopup", {
    input: PopupUpsertSchema,
    async resolve({ ctx, input }) {
      const upsertOnePopup = await ctx.prisma.popup.upsert({ where: input.where, create: input.create, update: input.update });
      return upsertOnePopup;
    },
  })
