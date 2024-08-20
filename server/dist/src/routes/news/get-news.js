"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const connect_js_1 = require("../../db/connect.js");
const getNewsRoute = async (req, res) => {
    const news = await connect_js_1.prisma.news.findMany({});
    res.json(news);
};
exports.default = getNewsRoute;
