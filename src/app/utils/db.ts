export const db = {
    getBySecretKey: (key: string) => {
        const entry = localStorage.getItem(key);
        if(entry) {
            return JSON.parse(entry);
        }
        return null;
    },

    save: ({ secret, iv_hex, key_hex, encryptedText }) => {
        localStorage.setItem(secret, JSON.stringify({
            iv_hex,
            key_hex,
            encryptedText,
        }))
    }
}