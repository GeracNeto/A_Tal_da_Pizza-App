import express from "express";

import { PrismaClient } from "@prisma/client";

const app = express();
const prisma = new PrismaClient();

app.get("/menu", async (request, response) => {
  const menu = await prisma.menu.findMany();

  return response.json(menu);
});

app.listen(3333);
