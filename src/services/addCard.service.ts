import UnexpectedError from "../core/error/unexpected.error";
import { AddCardRequest } from "../types/addCard.request.type";
import { encrypt } from "../common/crypto.function";
import { db } from "../models/index";
const Card = db.cards;

export const addCardService = async (params: AddCardRequest): Promise<void> => {
  try {
    const card: AddCardRequest = {
      ...params,
      cardNumber: encrypt(params.cardNumber),
      cvv: encrypt(params.cvv),
    };

    await Card.create(card);
  } catch (err) {
    throw new UnexpectedError("Something went wrong." + err);
  }
};
