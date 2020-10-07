import { Cipher } from "../utils/cipher";

const encrypter = new Cipher();
const DECRYPT_KEY = "frontend";

window.__enc = encrypter;

export const getDecryptedLabels = (labels: Object): Object => {
  const decryptedLabels = {};
  Object.keys(labels).forEach((k) => {
    decryptedLabels[k] = encrypter.decrypt(DECRYPT_KEY, labels[k]);
  });
  return decryptedLabels;
};
