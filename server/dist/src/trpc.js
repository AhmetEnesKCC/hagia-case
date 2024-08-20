"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appRouter = exports.publicProcedure = void 0;
const server_1 = require("@trpc/server");
const connect_js_1 = require("./db/connect.js");
const t = server_1.initTRPC.create();
exports.publicProcedure = t.procedure;
exports.appRouter = t.router({
    getNews: exports.publicProcedure.query(async () => {
        const news = await connect_js_1.prisma.news.findMany({});
        return news;
    }),
});
