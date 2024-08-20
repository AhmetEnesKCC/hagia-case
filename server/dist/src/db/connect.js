"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prisma = void 0;
exports.connectToDb = connectToDb;
const client_1 = require("@prisma/client");
exports.prisma = new client_1.PrismaClient({});
async function connectToDb() {
    try {
        exports.prisma.$connect();
    }
    catch {
        console.log("Can not connect to db");
    }
}
