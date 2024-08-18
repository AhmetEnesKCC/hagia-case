import { Request, Response } from "express";
import { prisma } from "../../db/connect.js";

const getNewsRoute = async (req: Request, res: Response) => {
  const news = await prisma.news.findMany({});
  res.json(news);
};

export default getNewsRoute;
