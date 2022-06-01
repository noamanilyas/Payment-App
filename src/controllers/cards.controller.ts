import { Request, Response } from "express";
import { errorResponse, successResponse } from "../core/handlers/api-response.handler";
import { addCardService } from "../services/addCard.service";

export const addCard = async (req: Request, res: Response): Promise<void> => {
  try {
    const { body } = req;

    /**
     * To make a PCI Compliant app its not a good way to store
     * credit card information (CVV) in database even though encrypted.
     *
     * The better way is to save those in payment gateway (eg: worldpay, stripe)
     * and only save the encryptedData.
     *
     * But for the sake of the test will go with this way,
     * since security is not a priority here.
     */
    await addCardService(body);

    /**
     * This will return success response, with 200 status code.
     */
    successResponse(res, {});
  } catch (err) {
    errorResponse(res, err);
  }
};
