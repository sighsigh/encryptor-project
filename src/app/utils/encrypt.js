import crypto from 'crypto-js';

export const getRandomSecret = () => {
    const base = '0123456789abcdef';
    const baseArr = base.split('');

    const randomIndex = () => Math.floor(Math.random() * (baseArr.length + 1))

    // TODO

}

// -----------------------------

    // const plaintext = 'my-text-file.txt';
    // const secret = getRandomSecret();

    // const salt = crypto.lib.WordArray.random(16);

    // const iv = crypto.lib.WordArray.random(16);
    // const iv_hex = crypto.enc.Hex.stringify(iv);

    // const key = crypto.PBKDF2(secret, salt, { keySize: 256/32, iterations: 1 });
    // const key_hex = crypto.enc.Hex.stringify(key);

    // const encrypted = crypto.AES.encrypt(plaintext, key, { iv: iv });

    // const encryptedtxt = encrypted.ciphertext.toString(crypto.enc.Base64);

    // console.log('encryptedtxt: ', encryptedtxt);

    // //decrypt
    // const decrypted = crypto.AES.decrypt(
    // encrypted,
    // crypto.enc.Hex.parse(key_hex),
    // { iv: crypto.enc.Hex.parse(iv_hex) });

    // var decryptedText = decrypted.toString(crypto.enc.Base64);

    // console.log('decryptedText: ', decryptedText);

    // // atob
    // console.log(window.atob(decryptedText));

// -------------------------