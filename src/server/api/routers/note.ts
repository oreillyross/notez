import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "../trpc";

export const notesRouter = createTRPCRouter({
  create: publicProcedure
    .input(z.object({ title: z.string() }))
    .mutation(({ ctx, input }) => {
      const note = ctx.prisma.note.create({ data: { title: input.title } });
      return note;
    }),
  getAll: publicProcedure.query(({ ctx }) => {
    const notes = ctx.prisma.note.findMany();
    return notes;
  }),
});
