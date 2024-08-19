import { test, it } from "@jest/globals";
import { saveNews } from "../utils/save-news";

it("should save news", async () => {
  return expect(saveNews()).resolves.toBe("News saved successfully");
}, 30000);
