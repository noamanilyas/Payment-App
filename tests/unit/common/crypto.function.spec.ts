process.env.NODE_ENV = "test";
import { decrypt, encrypt } from "../../../src/common/crypto.function";
import crypto from "crypto";

console.error = jest.fn(); // silence log during test
console.log = jest.fn(); // silence log during test

describe("crypto test suit", () => {
  const mockCardNumber = "79927398713";
  const mockshaHash = "encrypt 123";
  const mockEncryptedData = "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=";

  it("Should encrypt a card number", async () => {
    const hashMock = {
      update: jest.fn().mockReturnThis(),
      digest: jest.fn().mockReturnValueOnce(mockshaHash),
    };

    const cipherIVMock = {
      update: jest.fn().mockReturnValueOnce(Buffer.from(new Uint32Array(6))),
      final: jest.fn().mockReturnValueOnce(Buffer.from(new Uint32Array(1))),
    };

    const createHashMock = jest.spyOn(crypto, "createHash").mockImplementationOnce(() => hashMock as any);
    const randomBytesMockFn = jest.fn().mockReturnValueOnce(Buffer.from(new Uint32Array(16)));
    const randomBytesMock = jest.spyOn(crypto, "randomBytes").mockImplementationOnce(() => randomBytesMockFn() as any);
    const createCipherivMock = jest.spyOn(crypto, "createCipheriv").mockImplementationOnce(() => cipherIVMock as any);

    const encrypted = encrypt(mockCardNumber);

    expect(encrypted).toBe(mockEncryptedData);

    createHashMock.mockRestore();
    randomBytesMock.mockRestore();
    createCipherivMock.mockRestore();
  });

  it("Should decrypt an encrypted string", async () => {
    const hashMock = {
      update: jest.fn().mockReturnThis(),
      digest: jest.fn().mockReturnValueOnce(Buffer.from(new Uint32Array(32))),
    };

    const decipherIVMock = {
      update: jest.fn().mockReturnValueOnce(Buffer.from(new Uint32Array(6))),
      final: jest.fn().mockReturnValueOnce(Buffer.from(new Uint32Array(1))),
    };

    const createHashMock = jest.spyOn(crypto, "createHash").mockImplementationOnce(() => hashMock as any);
    const randomBytesMockFn = jest.fn().mockReturnValueOnce(Buffer.from(new Uint32Array(16)));
    const randomBytesMock = jest.spyOn(crypto, "randomBytes").mockImplementationOnce(() => randomBytesMockFn() as any);
    const createDecipherivMock = jest
      .spyOn(crypto, "createCipheriv")
      .mockImplementationOnce(() => decipherIVMock as any);

    const decrypted = decrypt(mockEncryptedData);

    expect(decrypted).toBe("ܕ�x�@�");

    createHashMock.mockRestore();
    randomBytesMock.mockRestore();
    createDecipherivMock.mockRestore();
  });
});
