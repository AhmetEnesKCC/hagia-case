import cron from "node-cron";
import { saveNews } from "../utils/save-news.js";
export const saveNewsCron = (cronTime) => {
    cron.schedule(cronTime, saveNews);
};
