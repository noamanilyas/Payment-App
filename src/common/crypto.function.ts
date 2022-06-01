import crypto from "crypto";

const algorithm = "aes-256-ctr";
const secretKey = "vOVH6sdmpNWjRRIqCc7rdxs01lwHzfr3";

export const encrypt = (str: string) => {
  /**
   * Better to use a hash key and digest it for the secret
   */
  const sha256 = crypto.createHash("sha256");
  sha256.update(secretKey);
  const iv = crypto.randomBytes(16);
  const cipher = crypto.createCipheriv(algorithm, sha256.digest(), iv);
  const ciphertext = cipher.update(Buffer.from(str));
  const encrypted = Buffer.concat([iv, ciphertext, cipher.final()]).toString("base64");
  return encrypted;
};

export const decrypt = (enc) => {
  const sha256 = crypto.createHash("sha256");
  sha256.update(secretKey);
  const input = Buffer.from(enc, "base64");
  const iv = input.slice(0, 16);
  const decipher = crypto.createDecipheriv(algorithm, sha256.digest(), iv);
  const ciphertext = input.slice(16);
  const plaintext = Buffer.concat([decipher.update(ciphertext), decipher.final()]).toString();
  return plaintext;
};
