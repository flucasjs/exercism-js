export const isPangram = (pangram) => {
    if (!pangram) return false;

    const alphabet = new (function Alphabet() {
        for (const char of "abcdefghijklmnopqrstuvwxyz") {
            this[`${char}`] = 0;
        }
    })();

    for (let i = 0; i < pangram.length; i++) {
        const cp = pangram[i].charCodeAt();

        if (cp >= 97 && cp <= 122) {
            alphabet[`${pangram[i]}`] = 1;
        } else if (cp >= 97 - 32 && cp <= 122 - 32) {
            alphabet[`${pangram[i].toLowerCase()}`] = 1;
        }
    }

    for (const charExists of Object.values(alphabet)) {
        if (!charExists) {
            return false;
        }
    }

    return true;
};
