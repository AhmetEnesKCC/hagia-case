import { OneNewsType } from "../types/news";

// @ts-expect-error no declaration type file for this module
import md2json from "md-2-json";

import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const analyzeNewsAI = async (onenews: OneNewsType) => {
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
