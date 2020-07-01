import { encryptedLabels } from './labels';
import { CubbitEncrypter } from '../../utils/cubbitCipher';

const encrypter = new CubbitEncrypter();
const DECRYPT_KEY = 'frontend';

const getDecryptedLabels = (labels: Object): Object => {
    const decryptedLabels = {};
    Object.keys(labels).forEach(k => {
        decryptedLabels[k] = encrypter.decrypt(DECRYPT_KEY, labels[k]);
    });
    return decryptedLabels;
}

export const labels = {
    encryptedLabels,
    englishLabels: getDecryptedLabels(encryptedLabels)
};

export const languageOptions = [
    { id: 'encryptedLabels', text: 'Encrypted' },
    { id: 'englishLabels', text: encrypter.decrypt(DECRYPT_KEY, 'W"y {\'z')},
];
