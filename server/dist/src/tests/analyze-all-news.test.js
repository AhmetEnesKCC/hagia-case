"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const analyze_all_news_1 = require("../utils/analyze-all-news");
const globals_1 = require("@jest/globals");
it("should analyze all news", async () => {
    globals_1.expect.assertions(1);
    return (0, globals_1.expect)((0, analyze_all_news_1.analyzeAllNewsAI)()).resolves.toBe("All news analyzed successfully");
});
