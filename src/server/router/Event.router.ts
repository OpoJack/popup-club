import { createRouter } from './helpers/createRouter';
import { EventFindUniqueSchema } from '../schemas/findUniqueEvent.schema';
import { EventFindFirstSchema } from '../schemas/findFirstEvent.schema';
import { EventFindManySchema } from '../schemas/findManyEvent.schema';
import { EventCreateOneSchema } from '../schemas/createOneEvent.schema';
import { EventCreateManySchema } from '../schemas/createManyEvent.schema';
import { EventDeleteOneSchema } from '../schemas/deleteOneEvent.schema';
import { EventUpdateOneSchema } from '../schemas/updateOneEvent.schema';
import { EventDeleteManySchema } from '../schemas/deleteManyEvent.schema';
import { EventUpdateManySchema } from '../schemas/updateManyEvent.schema';
import { EventUpsertSchema } from '../schemas/upsertOneEvent.schema';
import { EventAggregateSchema } from '../schemas/aggregateEvent.schema';
import { EventGroupBySchema } from '../schemas/groupByEvent.schema';

export const eventsRouter = createRouter()
  .query('aggregateEvent', {
    input: EventAggregateSchema,
    async resolve({ ctx, input }) {
      const aggregateEvent = await ctx.prisma.event.aggregate(input);
      return aggregateEvent;
    },
  })

  .mutation('createManyEvent', {
    input: EventCreateManySchema,
    async resolve({ ctx, input }) {
      const createManyEvent = await ctx.prisma.event.createMany({
        data: input.data,
      });
      return createManyEvent;
    },
  })

  .mutation('createOneEvent', {
    input: EventCreateOneSchema,
    async resolve({ ctx, input }) {
      const createOneEvent = await ctx.prisma.event.create({
        data: input.data,
      });
      return createOneEvent;
    },
  })

  .mutation('deleteManyEvent', {
    input: EventDeleteManySchema,
    async resolve({ ctx, input }) {
      const deleteManyEvent = await ctx.prisma.event.deleteMany(input);
      return deleteManyEvent;
    },
  })

  .mutation('deleteOneEvent', {
    input: EventDeleteOneSchema,
    async resolve({ ctx, input }) {
      const deleteOneEvent = await ctx.prisma.event.delete({
        where: input.where,
      });
      return deleteOneEvent;
    },
  })

  .query('findFirstEvent', {
    input: EventFindFirstSchema,
    async resolve({ ctx, input }) {
      const findFirstEvent = await ctx.prisma.event.findFirst(input);
      return findFirstEvent;
    },
  })

  .query('findManyEvent', {
    input: EventFindManySchema,
    async resolve({ ctx, input }) {
      const findManyEvent = await ctx.prisma.event.findMany(input);
      return findManyEvent;
    },
  })

  .query('findUniqueEvent', {
    input: EventFindUniqueSchema,
    async resolve({ ctx, input }) {
      const findUniqueEvent = await ctx.prisma.event.findUnique({
        where: input.where,
      });
      return findUniqueEvent;
    },
  })

  .query('groupByEvent', {
    input: EventGroupBySchema,
    async resolve({ ctx, input }) {
      const groupByEvent = await ctx.prisma.event.groupBy({
        where: input.where,
        orderBy: input.orderBy,
        by: input.by,
        having: input.having,
        take: input.take,
        skip: input.skip,
      });
      return groupByEvent;
    },
  })

  .mutation('updateManyEvent', {
    input: EventUpdateManySchema,
    async resolve({ ctx, input }) {
      const updateManyEvent = await ctx.prisma.event.updateMany(input);
      return updateManyEvent;
    },
  })

  .mutation('updateOneEvent', {
    input: EventUpdateOneSchema,
    async resolve({ ctx, input }) {
      const updateOneEvent = await ctx.prisma.event.update({
        where: input.where,
        data: input.data,
      });
      return updateOneEvent;
    },
  })

  .mutation('upsertOneEvent', {
    input: EventUpsertSchema,
    async resolve({ ctx, input }) {
      const upsertOneEvent = await ctx.prisma.event.upsert({
        where: input.where,
        create: input.create,
        update: input.update,
      });
      return upsertOneEvent;
    },
  });
