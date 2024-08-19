import { initTRPC } from "@trpc/server";
import { prisma } from "./db/connect.js";
import { z } from "zod";

const t = initTRPC.create();

export const publicProcedure = t.procedure;

export const appRouter = t.router({
  getNews: publicProcedure.query(async () => {
    const news = await prisma.news.findMany({});
    return news;
  }),
});

export type AppRouter = typeof appRouter;
