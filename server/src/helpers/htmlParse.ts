import * as cheerio from "cheerio";

export const parseHTML = (
  htmlString: string,
  selector: string
): [cheerio.Cheerio, cheerio.Root] => {
  const html = $(htmlString);
  return [html(selector), html];
};
