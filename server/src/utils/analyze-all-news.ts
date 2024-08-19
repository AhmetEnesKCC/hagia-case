import { prisma } from "../db/connect";
import { analyzeNewsAI } from "./analyze-news-ai";

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
  return "All news analyzed successfully";
};
