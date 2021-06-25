import { NextFunction, Request, Response } from "express";

export function ensureAdmin(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const admin = false;

  if (!admin) {
    return response.status(401).json({
      error: "Unauthorized",
    });
  }

  return next();
}