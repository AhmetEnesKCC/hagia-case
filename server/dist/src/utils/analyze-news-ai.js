import { sleep } from "openai/core.mjs";
import OpenAI from "openai";
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});
export const analyzeNewsAI = async (onenews) => {
    await sleep(1000);
    const completion = await openai.chat.completions.create({
        model: "gpt-4o",
        messages: [
            {
                role: "system",
                content: "You are a helpful assistant.",
            },
            {
                role: "user",
                content: `${onenews.description} \n Bunlar haberlerim. Bu haberlerin duygu analizini bir kelime ve bir emojiyle yapmani istiyorum. sadece emoji ve kelimeyi dön`,
            },
        ],
    });
    const res = completion.choices[0].message.content;
    return res;
};
