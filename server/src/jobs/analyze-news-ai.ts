import { prisma } from "../db/connect";
import { analyzeNewsAI } from "../utils/analyze-news-ai";

const analyzeNewsAICron = async () => {
  const unanalyzedNews = await prisma.news.findMany({
    where: {
      analyze: null,
    },
  });
  unanalyzedNews.forEach(async (onenews) => {
    const analyze = await analyzeNewsAI(onenews);
    console.log(analyze);
  });
};
