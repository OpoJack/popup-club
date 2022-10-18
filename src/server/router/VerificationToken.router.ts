import { createRouter } from "./helpers/createRouter";
import { VerificationTokenFindUniqueSchema } from "../schemas/findUniqueVerificationToken.schema";
import { VerificationTokenFindFirstSchema } from "../schemas/findFirstVerificationToken.schema";
import { VerificationTokenFindManySchema } from "../schemas/findManyVerificationToken.schema";
import { VerificationTokenCreateOneSchema } from "../schemas/createOneVerificationToken.schema";
import { VerificationTokenCreateManySchema } from "../schemas/createManyVerificationToken.schema";
import { VerificationTokenDeleteOneSchema } from "../schemas/deleteOneVerificationToken.schema";
import { VerificationTokenUpdateOneSchema } from "../schemas/updateOneVerificationToken.schema";
import { VerificationTokenDeleteManySchema } from "../schemas/deleteManyVerificationToken.schema";
import { VerificationTokenUpdateManySchema } from "../schemas/updateManyVerificationToken.schema";
import { VerificationTokenUpsertSchema } from "../schemas/upsertOneVerificationToken.schema";
import { VerificationTokenAggregateSchema } from "../schemas/aggregateVerificationToken.schema";
import { VerificationTokenGroupBySchema } from "../schemas/groupByVerificationToken.schema";

export const verificationtokensRouter = createRouter()

  .query("aggregateVerificationToken", {
    input: VerificationTokenAggregateSchema,
    async resolve({ ctx, input }) {
      const aggregateVerificationToken = await ctx.prisma.verificationToken.aggregate(input);
      return aggregateVerificationToken;
    },
  })

  .mutation("createManyVerificationToken", {
    input: VerificationTokenCreateManySchema,
    async resolve({ ctx, input }) {
      const createManyVerificationToken = await ctx.prisma.verificationToken.createMany({ data: input.data });
      return createManyVerificationToken;
    },
  })

  .mutation("createOneVerificationToken", {
    input: VerificationTokenCreateOneSchema,
    async resolve({ ctx, input }) {
      const createOneVerificationToken = await ctx.prisma.verificationToken.create({ data: input.data });
      return createOneVerificationToken;
    },
  })

  .mutation("deleteManyVerificationToken", {
    input: VerificationTokenDeleteManySchema,
    async resolve({ ctx, input }) {
      const deleteManyVerificationToken = await ctx.prisma.verificationToken.deleteMany(input);
      return deleteManyVerificationToken;
    },
  })

  .mutation("deleteOneVerificationToken", {
    input: VerificationTokenDeleteOneSchema,
    async resolve({ ctx, input }) {
      const deleteOneVerificationToken = await ctx.prisma.verificationToken.delete({ where: input.where });
      return deleteOneVerificationToken;
    },
  })

  .query("findFirstVerificationToken", {
    input: VerificationTokenFindFirstSchema,
    async resolve({ ctx, input }) {
      const findFirstVerificationToken = await ctx.prisma.verificationToken.findFirst(input);
      return findFirstVerificationToken;
    },
  })

  .query("findManyVerificationToken", {
    input: VerificationTokenFindManySchema,
    async resolve({ ctx, input }) {
      const findManyVerificationToken = await ctx.prisma.verificationToken.findMany(input);
      return findManyVerificationToken;
    },
  })

  .query("findUniqueVerificationToken", {
    input: VerificationTokenFindUniqueSchema,
    async resolve({ ctx, input }) {
      const findUniqueVerificationToken = await ctx.prisma.verificationToken.findUnique({ where: input.where });
      return findUniqueVerificationToken;
    },
  })

  .query("groupByVerificationToken", {
    input: VerificationTokenGroupBySchema,
    async resolve({ ctx, input }) {
      const groupByVerificationToken = await ctx.prisma.verificationToken.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByVerificationToken;
    },
  })

  .mutation("updateManyVerificationToken", {
    input: VerificationTokenUpdateManySchema,
    async resolve({ ctx, input }) {
      const updateManyVerificationToken = await ctx.prisma.verificationToken.updateMany(input);
      return updateManyVerificationToken;
    },
  })

  .mutation("updateOneVerificationToken", {
    input: VerificationTokenUpdateOneSchema,
    async resolve({ ctx, input }) {
      const updateOneVerificationToken = await ctx.prisma.verificationToken.update({ where: input.where, data: input.data });
      return updateOneVerificationToken;
    },
  })

  .mutation("upsertOneVerificationToken", {
    input: VerificationTokenUpsertSchema,
    async resolve({ ctx, input }) {
      const upsertOneVerificationToken = await ctx.prisma.verificationToken.upsert({ where: input.where, create: input.create, update: input.update });
      return upsertOneVerificationToken;
    },
  })
