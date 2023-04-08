import { createTRPCRouter } from '~/server/api/trpc';
import { popupRouter } from './routers/popup.router';
import { eventRouter } from './routers/event.router';
import { linkRouter } from './routers/link.router';
import { locationRouter } from './routers/location.router';
import { tagRouter } from './routers/tag.router';

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  popup: popupRouter,
  event: eventRouter,
  link: linkRouter,
  location: locationRouter,
  tag: tagRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
