import { createTRPCRouter } from "~/server/api/trpc";
import { popupRouter } from "./routers/popup.router";
import { eventRouter } from "./routers/event.router";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  popup: popupRouter,
  event: eventRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
