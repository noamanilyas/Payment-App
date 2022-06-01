import crypto from "crypto";

const ALGO = process.env.ALGORITHM as string;
const SECRET = process.env.SECRET_KEY as string;

export const encrypt = (str: string) => {
  /**
   * Better to use a hash key and digest it for the secret
   */
  const sha256 = crypto.createHash("sha256");
  sha256.update(SECRET);
  const iv = crypto.randomBytes(16);
  const cipher = crypto.createCipheriv(ALGO, sha256.digest(), iv);
  const ciphertext = cipher.update(Buffer.from(str));
  const encrypted = Buffer.concat([iv, ciphertext, cipher.final()]).toString("base64");
  return encrypted;
};

export const decrypt = (enc) => {
  const sha256 = crypto.createHash("sha256");
  sha256.update(SECRET);
  const input = Buffer.from(enc, "base64");
  const iv = input.slice(0, 16);
  const decipher = crypto.createDecipheriv(ALGO, sha256.digest(), iv);
  const ciphertext = input.slice(16);
  const plaintext = Buffer.concat([decipher.update(ciphertext), decipher.final()]).toString();
  return plaintext;
};
