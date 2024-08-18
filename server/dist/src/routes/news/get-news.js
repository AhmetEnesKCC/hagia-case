import { prisma } from "../../db/connect.js";
const getNewsRoute = async (req, res) => {
    const news = await prisma.news.findMany({});
    res.json(news);
};
export default getNewsRoute;
