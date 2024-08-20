import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient({});

export async function connectToDb() {
  try {
    prisma.$connect();
  } catch {
    console.log("Can not connect to db");
  }
}
