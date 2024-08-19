import { inferRouterInputs, inferRouterOutputs } from "@trpc/server";
import { AppRouter } from "../../../server/src/trpc";

export type NewsOutputType = inferRouterOutputs<AppRouter>;

export type NewsType = NewsOutputType["getNews"];
export type OneNewsType = NewsType[0];
