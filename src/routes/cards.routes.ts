import express from "express";

import * as cardsController from "../controllers/cards.controller";
import { cardPostValidation } from "../middleware/validations/cardPost.validation";

export const cardsRoute = express.Router();

cardsRoute.post("/v1/card", cardPostValidation, cardsController.addCard);
