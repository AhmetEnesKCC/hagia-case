import axios from "axios";
import { parseHTML } from "../helpers/htmlParse.js";
import { prisma } from "../db/connect.js";
import { analyzeAllNewsAI } from "./analyze-all-news.js";
export const saveNews = async () => {
    const news = await getNews();
    await prisma.news.createMany({
        data: news,
        skipDuplicates: true,
    });
    const newsCount = await prisma.news.count();
    console.log(newsCount);
    console.log("News saved successfully");
    try {
        await analyzeAllNewsAI();
    }
    catch (err) {
        console.error(err);
        console.log("Error analyzing news");
    }
};
const fetchNews = async () => {
    const res = await axios.get(process.env.NEWS_URL);
    return res.data;
};
export const getNews = async () => {
    const fetchedNews = await fetchNews();
    const [parsedNews, html] = parseHTML(fetchedNews, ".widget-news-list ul li");
    const resNews = [];
    parsedNews.each((_, el) => {
        const texts = html(el).find("figcaption span");
        const image = html(el).find("figcaption img").attr("src") ?? "";
        const date = html(texts[0]).text();
        const title = html(texts[1]).text();
        const description = html(texts[2]).text();
        resNews.push({ date, title, description, image });
    });
    return resNews;
};
