import { test, it } from "@jest/globals";
import { saveNews } from "../utils/save-news";
import { load as loadCheerio } from "cheerio";

// added global variable for testing
globalThis.$ = loadCheerio;

it("should save news", async () => {
  return expect(saveNews()).resolves.toBe("News saved successfully");
}, 30000);
