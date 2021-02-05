export const isPangram = (strToTest) => {
    if (strToTest) {
        const invalidChars = strToTest.match(/[^a-z]|(.)(?=.*\1)/gi)
        return (!invalidChars || strToTest.length - invalidChars.length === 26);
    }
    return false;
};
