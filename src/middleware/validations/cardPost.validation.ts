import { NextFunction, Request, Response } from "express";
import ValidationError from "../../core/error/validation.error";
import { errorResponse } from "../../core/handlers/api-response.handler";
import { cardPostReqSchema } from "../../core/schemas/card.request.schema";

export const cardPostValidation = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { error } = cardPostReqSchema.validate(req.body);
    if (error) {
      throw new ValidationError("Invalid request, " + error.message);
    }
  } catch (err) {
    errorResponse(res, err);
  }
  return next();
};
