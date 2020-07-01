export class CubbitEncrypter {
    minCode: number;
    maxCode: number;
    alphabetLength: number;

    constructor() {
        this.minCode = 32;
        this.maxCode = 125;
        this.alphabetLength = this.maxCode - this.minCode + 1;
    }

    getASCIICode(char: string): number {
        return char.charCodeAt(0);
    }

    calculateASCIICodesSum(str: string): number {
        return str
                .split('')
                .map(this.getASCIICode)
                .reduce((acc, val) => acc + val, 0);
    }

    createChunkGroup(size: number, str: string): string[] {
        const regex = new RegExp(`.{1,${size}}`,'g')
        return str.match(regex);
    }

    encrypt(key: string, message: string): string {
        const positions = this.calculateASCIICodesSum(key);

        // split in chunks
        let chunksGroup = this.createChunkGroup(key.length, message);

        // reverse each chunk
        chunksGroup = chunksGroup.map(chunk => chunk.split('').reverse().join(''));

        chunksGroup = chunksGroup.map(chunk => {
            let result = '';
            chunk.split('').forEach(char => {
                // shift characters
                const charCode = this.getASCIICode(char);
                const shiftedPosition = charCode + (positions % this.alphabetLength);
                const newPosition = shiftedPosition > this.maxCode
                    ? (this.minCode - 1) + (shiftedPosition - this.maxCode)
                    : shiftedPosition

                result += String.fromCharCode(newPosition);
            });
            // reverse back chunk
            return result.split('').reverse().join('');
        });

        const encryptedString = chunksGroup.join('');

        return encryptedString;
    }

    decrypt(key: string, message: string): string {
        const positions = this.calculateASCIICodesSum(key);

        // split in chunks
        let chunksGroup = this.createChunkGroup(key.length, message);

        chunksGroup = chunksGroup.map(chunk => {
            let result = '';
            chunk.split('').forEach(char => {
                // shift characters
                const charCode = this.getASCIICode(char);
                const shiftedPosition = charCode - (positions % this.alphabetLength);
                const newPosition = shiftedPosition < this.minCode
                    ? (this.maxCode + 1) - (this.minCode - shiftedPosition)
                    : shiftedPosition

                result += String.fromCharCode(newPosition);
            });
            // reverse back chunk
            return result.split('').reverse().join('');
        });

        // reverse each chunk
        chunksGroup = chunksGroup.map(chunk => chunk.split('').reverse().join(''));

        const decryptedString = chunksGroup.join('');

        return decryptedString;
    }
}
