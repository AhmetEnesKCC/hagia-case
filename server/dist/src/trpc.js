import { initTRPC } from "@trpc/server";
import { prisma } from "./db/connect.js";
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
