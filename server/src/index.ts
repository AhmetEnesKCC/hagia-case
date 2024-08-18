import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import { resolve } from "path";
import getNewsRoute from "./routes/news/get-news.js";
import { load as loadCheerio } from "cheerio";
import * as trpcExpress from "@trpc/server/adapters/express";
import { AppRouter, appRouter } from "./trpc.js";
import { connectToDb, prisma } from "./db/connect.js";

// created for each request
const createContext = ({
  req,
  res,
}: trpcExpress.CreateExpressContextOptions) => ({}); // no context
type Context = Awaited<ReturnType<typeof createContext>>;

// Global Variables

globalThis.__dirname = resolve();
globalThis.environment = process.env.NODE_ENV ?? "development";
globalThis.$ = loadCheerio;

dotenv.config({
  path: __dirname + "/" + (environment?.toLowerCase() + ".env"),
});

// Connect to database

connectToDb()
  .then(async () => {
    console.log("Connected to the database");
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/get-news", getNewsRoute);

app.use(express.static(__dirname + "/public"));
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});

app.use(
  "/trpc",
  trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext,
  })
);

export {};
