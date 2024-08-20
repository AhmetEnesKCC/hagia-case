"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const analyze_news_ai_1 = require("../utils/analyze-news-ai");
(0, globals_1.test)("get analyze of a news", async () => {
    return expect((0, analyze_news_ai_1.analyzeNewsAI)({
        date: "12 subat 2003",
        description: "bu cok olumlu bir haber",
        image: "image",
        title: "title",
    })).resolves.toMatch(/\w+\s(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/);
});
