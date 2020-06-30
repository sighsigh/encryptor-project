import crypto from 'crypto-js';

const getRandomKey = (keyLength: number = 16): string => {
    let key = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for ( let i = 0; i < keyLength; i++ ) {
        key += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return key;
}

export class Encryptor {
    secret: string;
    iv_hex: string;
    key_hex: string;
    encryptedText: string;
    decryptedText: string;

    constructor() {
        this.secret = getRandomKey();
    }

    encrypt(text: string) {
        const salt = crypto.lib.WordArray.random(16);

        const iv = crypto.lib.WordArray.random(16);
        this.iv_hex = crypto.enc.Hex.stringify(iv);

        const key = crypto.PBKDF2(this.secret, salt, { keySize: 256/32, iterations: 1 });
        this.key_hex = crypto.enc.Hex.stringify(key);

        const encrypted = crypto.AES.encrypt(text, key, { iv: iv });

        this.encryptedText = encrypted.ciphertext.toString(crypto.enc.Base64);
    }

    decrypt({ encryptedText, key_hex, iv_hex }) {
        const decrypted = crypto.AES.decrypt(
            encryptedText || this.encryptedText,
            crypto.enc.Hex.parse(key_hex || this.key_hex),
            { iv: crypto.enc.Hex.parse(iv_hex || this.iv_hex) }
        );

        this.decryptedText = atob(decrypted.toString(crypto.enc.Base64));
    }
}
