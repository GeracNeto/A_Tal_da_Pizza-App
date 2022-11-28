import express from "express";
import cors from "cors";

import { PrismaClient } from "@prisma/client";

const app = express();
app.use(express.json());
app.use(cors());

const prisma = new PrismaClient();

app.get("/menu", async (request, response) => {
  const menu = await prisma.menu.findMany();

  return response.json(menu);
});

app.listen(3333);
