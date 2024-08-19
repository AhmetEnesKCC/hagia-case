import { analyzeAllNewsAI } from "../utils/analyze-all-news";
import { expect, test } from "@jest/globals";

it("should analyze all news", async () => {
  expect.assertions(1);
  return expect(analyzeAllNewsAI()).resolves.toBe(
    "All news analyzed successfully"
  );
});
