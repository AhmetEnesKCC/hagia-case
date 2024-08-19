// Cheerio

import { load as cheerioLoad } from "cheerio";

declare global {
  var $: typeof cheerioLoad;
}

export {};
