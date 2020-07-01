export const db = {
    getById: (id: string) => {
        const entry = localStorage.getItem(id);
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