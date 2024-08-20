"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = require("path");
const get_news_1 = __importDefault(require("./routes/news/get-news"));
const cheerio_1 = require("cheerio");
const trpcExpress = __importStar(require("@trpc/server/adapters/express"));
const trpc_js_1 = require("./trpc.js");
const connect_1 = require("./db/connect");
const save_news_1 = require("./jobs/save-news");
const save_news_2 = require("./utils/save-news");
// created for each request
const createContext = ({ req, res, }) => ({}); // no context
// Global Variables
globalThis.__dirname = (0, path_1.resolve)();
globalThis.environment = process.env.NODE_ENV ?? "development";
globalThis.$ = cheerio_1.load;
dotenv_1.default.config({
    path: __dirname + "/" + "../../" + (environment?.toLowerCase() + ".env"),
});
// Connect to database
(0, connect_1.connectToDb)()
    .then(async () => {
    console.log("Connected to the database");
})
    .catch(async (e) => {
    console.error(e);
    await connect_1.prisma.$disconnect();
    process.exit(1);
});
// Creating Expres App
const app = (0, express_1.default)();
// Express Plugins
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
app.use("/trpc", trpcExpress.createExpressMiddleware({
    router: trpc_js_1.appRouter,
    createContext,
}));
app.get("/", (req, res) => {
    res.send("Hello World");
});
// this is for checking news. not for client. client using trpc route
app.get("/get-news", get_news_1.default);
app.use(express_1.default.static(__dirname + "/public"));
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});
// cron time for every 10 minutes
(0, save_news_2.saveNews)();
(0, save_news_1.saveNewsCron)("*/12 * * * *");
