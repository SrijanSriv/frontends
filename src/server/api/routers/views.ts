import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const viewsRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),

  getLatest: publicProcedure.query(({ ctx }) => {
    return ctx.db.views.findMany();
  }),
});
