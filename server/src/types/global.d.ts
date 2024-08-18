import { resolve } from "path";

declare global {
  var __dirname: string;
  var environment: "development" | "production" | "staging" | (string & {});
}

export {};
