import { test } from "@jest/globals";
import { analyzeNewsAI } from "../utils/analyze-news-ai";

test("get analyze of a news", async () => {
  return expect(
    analyzeNewsAI({
      date: "12 subat 2003",
      description: "bu cok olumlu bir haber",
      image: "image",
      title: "title",
    })
  ).resolves.toMatch(
    /\w+\s(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/
  );
});
