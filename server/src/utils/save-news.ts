import axios from "axios";
import { NewsType } from "../types/news";
import { parseHTML } from "../helpers/htmlParse.js";
import { prisma } from "../db/connect.js";
import { analyzeAllNewsAI } from "./analyze-all-news.js";
import puppeteer from "puppeteer";

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
  } catch (err) {
    console.error(err);
    console.log("Error analyzing news");
  }
};

function wait(ms: number) {
  return new Promise((resolve) => setTimeout(() => resolve(true), ms));
}

// v0 was using axios
const fetchNews = async () => {
  const res = await axios.get(process.env.NEWS_URL!);
  return res.data;
};

// v1 will use puppeteer
const scrapNews = async () => {
  const browser = await puppeteer.launch();
  const [page] = await browser.pages();
  await page.goto(process.env.NEWS_URL!, { waitUntil: "networkidle0" });
  await wait(20000);
  const data = await page.content();
  return data;
};

export const getNews = async () => {
  const fetchedNews = await scrapNews();
  const [parsedNews, html] = parseHTML(fetchedNews, ".widget-news-list ul li");

  const resNews: NewsType = [];

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
