import { CubbitEncrypter } from '../utils/cubbitCipher';

const encrypter = new CubbitEncrypter();
const DECRYPT_KEY = 'frontend';

export const getDecryptedLabels = (labels: Object): Object => {
    const decryptedLabels = {};
    Object.keys(labels).forEach(k => {
        decryptedLabels[k] = encrypter.decrypt(DECRYPT_KEY, labels[k]);
    });
    return decryptedLabels;
}