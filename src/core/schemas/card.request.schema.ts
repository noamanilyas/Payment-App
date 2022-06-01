import Joi from "joi";
import { expDateHelper, luhnCheckHelper } from "./card.request.helpers";

export const cardPostReqSchema = Joi.object()
  .keys({
    cardNumber: Joi.string().custom(luhnCheckHelper).required(),
    cvv: Joi.string().min(3).max(4).required(),
    name: Joi.string().min(3).max(50).required(),
    expiryMonth: Joi.string().min(2).max(2).required(),
    expiryYear: Joi.string().min(4).max(4).required(),
    exp: Joi.string().required(),
  })
  .custom(expDateHelper)
  .message("Must be a valid date");
