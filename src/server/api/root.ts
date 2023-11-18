import { viewsRouter } from "~/server/api/routers/views";
import { createTRPCRouter } from "~/server/api/trpc";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  views: viewsRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
