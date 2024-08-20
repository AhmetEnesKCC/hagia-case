"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.analyzeAllNewsAI = void 0;
const connect_1 = require("../db/connect");
const analyze_news_ai_1 = require("./analyze-news-ai");
const analyzeAllNewsAI = async () => {
    const unanalyzedNews = await connect_1.prisma.news.findMany({
        where: {
            analyze: null,
        },
    });
    unanalyzedNews.forEach(async (onenews) => {
        const analyze = await (0, analyze_news_ai_1.analyzeNewsAI)(onenews);
        await connect_1.prisma.news.update({
            where: {
                id: onenews.id,
            },
            data: {
                analyze,
            },
        });
    });
    return "All news analyzed successfully";
};
exports.analyzeAllNewsAI = analyzeAllNewsAI;
