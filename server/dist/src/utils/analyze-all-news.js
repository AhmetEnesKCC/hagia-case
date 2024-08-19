import { prisma } from "../db/connect.js";
import { analyzeNewsAI } from "./analyze-news-ai.js";
export const analyzeAllNewsAI = async () => {
    const unanalyzedNews = await prisma.news.findMany({
        where: {
            analyze: null,
        },
    });
    unanalyzedNews.forEach(async (onenews) => {
        const analyze = await analyzeNewsAI(onenews);
        await prisma.news.update({
            where: {
                id: onenews.id,
            },
            data: {
                analyze,
            },
        });
    });
    console.log("All news analyzed successfully");
};
