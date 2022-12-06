import express from "express";
import cors from "cors";

import ShortUniqueId from "short-unique-id";

import { PrismaClient } from "@prisma/client";

const app = express();
app.use(express.json());
app.use(cors());

const prisma = new PrismaClient();

app.get("/menu", async (request, response) => {
  const menu = await prisma.menu.findMany();

  return response.json(menu);
});

app.get("/menu/:name", async (request, response) => {
  const { name } = request.params;

  const menu = await prisma.menu.findMany({
    where: {
      foodName: {
        contains: name,
      },
    },
  });

  return response.json(menu);
});

app.post("/order", async (request, response) => {
  const { foodName, foodPicture, qty } = request.body;

  const generate = new ShortUniqueId({ length: 6 });
  const code = String(generate()).toUpperCase();

  try {
    await prisma.kitchen.create({
      data: {
        foodName,
        foodPicture,
        qty,
        order: code,
      },
    });
  } catch (error) {
    console.log(`Error:` + error);
  }

  return response.status(201).send({ code });
});

app.listen(3333);
