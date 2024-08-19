import cron from "node-cron";
import { getNews, saveNews } from "../utils/save-news.js";

export const saveNewsCron = (cronTime: string) => {
  cron.schedule(cronTime, saveNews);
};
