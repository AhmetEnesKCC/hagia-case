"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const connect_1 = require("../db/connect");
const analyze_news_ai_1 = require("../utils/analyze-news-ai");
const analyzeNewsAICron = async () => {
    const unanalyzedNews = await connect_1.prisma.news.findMany({
        where: {
            analyze: null,
        },
    });
    unanalyzedNews.forEach(async (onenews) => {
        const analyze = await (0, analyze_news_ai_1.analyzeNewsAI)(onenews);
        console.log(analyze);
    });
};
