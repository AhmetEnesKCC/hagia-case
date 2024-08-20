"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveNewsCron = void 0;
const node_cron_1 = __importDefault(require("node-cron"));
const save_news_js_1 = require("../utils/save-news.js");
const saveNewsCron = (cronTime) => {
    node_cron_1.default.schedule(cronTime, save_news_js_1.saveNews);
};
exports.saveNewsCron = saveNewsCron;
