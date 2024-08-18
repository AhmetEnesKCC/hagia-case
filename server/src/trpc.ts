import { initTRPC } from "@trpc/server";
import { prisma } from "./db/connect.js";
import { Prisma } from "@prisma/client";
import { z } from "zod";
import { NewsSchema } from "../prisma/generated/zod";

const t = initTRPC.create();

export const publicProcedure = t.procedure;

export const appRouter = t.router({
  getNews: publicProcedure.query(async () => {
    const news = await prisma.news.findMany();
    return news;
  }),
  // saveNews: publicProcedure.input(NewsSchema).mutation(async (opts) => {
  //   prisma.news.create({
  //     data: opts.input,
  //   });
  // }),
});

export type AppRouter = typeof appRouter;
