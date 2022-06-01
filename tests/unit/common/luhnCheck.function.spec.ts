process.env.NODE_ENV = "test";
import { luhnCheck } from "../../../src/common/luhnCheck.function";

console.error = jest.fn(); // silence log during test
console.log = jest.fn(); // silence log during test

/**
 * This function is covered 100%
 */

describe("Luhn check function tests", () => {
  it("Success: Should return true for valid number", async () => {
    const mockCard = "79927398713";

    expect(luhnCheck(mockCard)).toBe(true);
  });

  it("Success: Should return true with space valid number", async () => {
    const mockCard = "6271 7012 2597 9642";

    expect(luhnCheck(mockCard)).toBe(true);
  });

  it("Success: Should return true with dash valid number", async () => {
    const mockCard = "6271-7012-2597-9642";

    expect(luhnCheck(mockCard)).toBe(true);
  });

  it("Fail: Should return false for invalid number", async () => {
    const mockCard = "7992739871";

    expect(luhnCheck(mockCard)).toBe(false);
  });

  it("Fail: Should fail for number with invalid characters", async () => {
    const mockCard = "799W2739GHHJ8713";

    expect(luhnCheck(mockCard)).toBe(false);
  });
});
