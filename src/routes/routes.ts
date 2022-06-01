import express from "express";
import { cardsRoute } from "./cards.routes";

export const routes = express.Router();

routes.use(cardsRoute);
