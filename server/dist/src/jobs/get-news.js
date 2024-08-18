import cron from "node-cron";
import { getNews } from "../utils/get-news";
export const getNewsCron = (cronTime) => {
    cron.schedule(cronTime, getNews);
};
