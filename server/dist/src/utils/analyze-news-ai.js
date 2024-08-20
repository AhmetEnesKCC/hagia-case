"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.analyzeNewsAI = void 0;
const openai_1 = __importDefault(require("openai"));
const openai = new openai_1.default({
    apiKey: process.env.OPENAI_API_KEY,
});
const analyzeNewsAI = async (onenews) => {
    const completion = await openai.chat.completions.create({
        model: "gpt-4o",
        messages: [
            {
                role: "system",
                content: "You are a helpful assistant.",
            },
            {
                role: "user",
                content: `${onenews.description} \n Bunlar haberlerim. Bu haberlerin duygu analizini bir kelime ve bir emojiyle yapmani istiyorum. sadece emoji ve kelimeyi dön. Bu kelime su seceneklerden biri olsun: Olumlu, Olumsuz, Nötr `,
            },
        ],
    });
    const res = completion.choices[0].message.content;
    return res;
};
exports.analyzeNewsAI = analyzeNewsAI;
