import crypto from 'crypto-js';

const getRandomKey = (keyLength: number = 16): string => {
    let key = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for ( let i = 0; i < keyLength; i++ ) {
        key += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return key;
}

export class Encrypter {
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

    decrypt() {
        if(!this.encryptedText) {
            this.decryptedText = '';
        }
        const decrypted = crypto.AES.decrypt(
            this.encryptedText,
            crypto.enc.Hex.parse(this.key_hex),
            { iv: crypto.enc.Hex.parse(this.iv_hex) }
        );

        this.decryptedText = decrypted.toString(crypto.enc.Base64);

        console.log(window.atob(this.decryptedText));
    }
}


