import axios from "axios";
import { parseHTML } from "../helpers/htmlParse";
const saveNews = async (news) => { };
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
        const thumbnail = html(el).find("figcaption img").attr("src") ?? "";
        const date = html(texts[0]).text();
        const title = html(texts[1]).text();
        const description = html(texts[2]).text();
        resNews.push({ date, title, description, thumbnail });
    });
};
