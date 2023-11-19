import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const viewsRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `a ${input.text}`,
      };
    }),

  getViews: publicProcedure.input(z.object({creatorId : z.string()})).query(({ ctx, input }) => {
    return ctx.db.views.findMany({
        where :{creatorId : input.creatorId}
      });
  }),
});
