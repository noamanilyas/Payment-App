process.env.NODE_ENV = "test";
import supertest from "supertest";

import { app, server } from "../../../src/app";

const request = supertest(app);

console.error = jest.fn(); // silence log during test
console.log = jest.fn(); // silence log during test

/**
 * Added a sample test for refrence
 */

describe("API Test", () => {
  afterAll(async () => {
    // await disconnectDb();
    server.close();
  });

  let mockBody = {
    cardNumber: "4024007135259827",
    cvv: "699",
    name: "Garnett Brown",
    expiryMonth: "06",
    expiryYear: "2022",
    exp: "06/2022",
  };

  it("Success: Post card", async () => {
    const res = await request.post("/v1/card").set("Accept", "application/json").send(mockBody);
    expect(res.status).toBe(200);
    expect(res.body).toEqual({
      status: true,
      result: {},
      error: false,
    });
  });

  it("Fail: Post card invalid cardNumber failed luhn check", async () => {
    let invalidBody = { ...mockBody, cardNumber: "4024007135259828" };
    const res = await request.post("/v1/card").set("Accept", "application/json").send(invalidBody);
    expect(res.status).toBe(400);
    expect(res.body).toEqual({
      status: false,
      result: false,
      error: {
        type: "ValidationError",
        message: 'Invalid request, "cardNumber" contains an invalid value',
      },
    });
  });
});
