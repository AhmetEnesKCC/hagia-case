import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import { resolve } from "path";
import getNewsRoute from "./routes/news/get-news";
import { load as loadCheerio } from "cheerio";
import * as trpcExpress from "@trpc/server/adapters/express";
import { appRouter } from "./trpc.js";
import { connectToDb, prisma } from "./db/connect";
import { saveNewsCron } from "./jobs/save-news";
import { saveNews } from "./utils/save-news";

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
  path: __dirname + "/" + "../../" + (environment?.toLowerCase() + ".env"),
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

// Creating Expres App
const app = express();

// Express Plugins
app.use(cors());
app.use(bodyParser.json());
app.use(
  "/trpc",
  trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext,
  })
);

app.get("/", (req, res) => {
  res.send("Hello World");
});

// this is for checking news. not for client. client using trpc route
app.get("/get-news", getNewsRoute);

app.use(express.static(__dirname + "/public"));

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});

// cron time for every 10 minutes

saveNews();
saveNewsCron("*/12 * * * *");

export {};
