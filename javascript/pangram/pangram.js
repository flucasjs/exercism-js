export const isPangram = (strToTest) => {
    if (strToTest) {
        return [...new Set(strToTest.toLowerCase().match(/[a-z]/g))].length === 26
    }
    return false;
};
