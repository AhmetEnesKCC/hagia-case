"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNews = exports.saveNews = void 0;
const axios_1 = __importDefault(require("axios"));
const htmlParse_1 = require("../helpers/htmlParse");
const connect_1 = require("../db/connect");
const analyze_all_news_1 = require("./analyze-all-news");
const puppeteer_1 = __importDefault(require("puppeteer"));
const saveNews = async () => {
    const news = await (0, exports.getNews)();
    await connect_1.prisma.news.createMany({
        data: news,
        skipDuplicates: true,
    });
    const newsCount = await connect_1.prisma.news.count();
    console.log(newsCount);
    console.log("News saved successfully");
    try {
        await (0, analyze_all_news_1.analyzeAllNewsAI)();
    }
    catch (err) {
        console.error(err);
        console.log("Error analyzing news");
    }
    return "News saved successfully";
};
exports.saveNews = saveNews;
function wait(ms) {
    return new Promise((resolve) => setTimeout(() => resolve(true), ms));
}
// v0 was using axios
const fetchNews = async () => {
    const res = await axios_1.default.get(process.env.NEWS_URL);
    return res.data;
};
// v1 will use puppeteer
const scrapNews = async () => {
    const browser = await puppeteer_1.default.launch();
    const [page] = await browser.pages();
    await page.goto(process.env.NEWS_URL, { waitUntil: "networkidle0" });
    await wait(2000);
    const data = await page.content();
    return data;
};
const getNews = async () => {
    const fetchedNews = await scrapNews();
    const [parsedNews, html] = (0, htmlParse_1.parseHTML)(fetchedNews, ".widget-news-list ul li");
    const resNews = [];
    parsedNews.each((_, el) => {
        const texts = html(el).find("figcaption span");
        const image = html(el).find("figure img").attr("src") ?? "";
        const date = html(texts[0]).text();
        const title = html(texts[1]).text();
        const description = html(texts[2]).text();
        resNews.push({ date, title, description, image });
    });
    return resNews;
};
exports.getNews = getNews;
