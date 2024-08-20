"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const save_news_1 = require("../utils/save-news");
const cheerio_1 = require("cheerio");
// added global variable for testing
globalThis.$ = cheerio_1.load;
(0, globals_1.it)("should save news", async () => {
    return expect((0, save_news_1.saveNews)()).resolves.toBe("News saved successfully");
}, 30000);
