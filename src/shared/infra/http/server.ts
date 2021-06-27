import "reflect-metadata";
import "@shared/infra/typeorm";
import "@shared/container";

import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";

import { AppError } from "@shared/errors/AppError";

import { router } from "./routes";

const app = express();

app.use(express.json());

app.use(router);

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      error: err.message,
    });
  }

  return response.status(500).json({
    status: "error",
    message: err.message,
  });
});

app.listen(3333, () => console.log("Server is running!"));
